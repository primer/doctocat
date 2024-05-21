import MagicString from 'magic-string'
import type {Plugin} from 'rollup'

interface IncludeDirectivesOptions {}

export function includeDirectives(_options: IncludeDirectivesOptions): Plugin {
  return {
    /**
     * This custom rollup plugin allows us to preserve directives in source
     * code, such as "use client", in order to support React Server Components.
     *
     * The source for this plugin is inspired by:
     * https://github.com/Ephem/rollup-plugin-preserve-directives
     */
    name: 'include-directives',
    transform(code) {
      const ast = this.parse(code)
      if (ast.type !== 'Program' || !ast.body) {
        return {
          code,
          ast,
          map: null,
        }
      }

      let hasClientDirective = false

      for (const node of ast.body) {
        if (!node) {
          continue
        }

        if (node.type !== 'ExpressionStatement') {
          continue
        }

        // @ts-expect-error this does exist
        if (node.directive === 'use client') {
          hasClientDirective = true
          break
        }
      }

      if (hasClientDirective) {
        return {
          code,
          ast,
          map: null,
          meta: {
            hasClientDirective: true,
          },
        }
      }

      return {
        code,
        ast,
        map: null,
      }
    },
    renderChunk: {
      order: 'post',
      handler(code, chunk, options) {
        // If `preserveModules` is not set to true, we can't be sure if the client
        // directive corresponds to the whole chunk or just a part of it.
        if (!options.preserveModules) {
          return undefined
        }

        let chunkHasClientDirective = false

        for (const moduleId of Object.keys(chunk.modules)) {
          const hasClientDirective = this.getModuleInfo(moduleId)?.meta?.hasClientDirective
          if (hasClientDirective) {
            chunkHasClientDirective = true
            break
          }
        }

        if (chunkHasClientDirective) {
          const transformed = new MagicString(code)
          transformed.prepend(`"use client";\n`)
          const sourcemap = transformed.generateMap({
            includeContent: true,
          })
          return {
            code: transformed.toString(),
            map: sourcemap,
          }
        }

        return null
      },
    },
  }
}
