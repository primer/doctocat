import createMDX from '@next/mdx'
import type {NextConfig} from 'next'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [],
  },
})

const customWebpack: NonNullable<NextConfig['webpack']> = (config, options) => {
  if (process.env.ANALYZE_BUNDLE_SIZE === 'true') {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'json',
        openAnalyzer: process.env.CI ? false : true,
        generateStatsFile: true,
        statsFilename: `./analyze/stats.json`,
        reportFilename: !options.nextRuntime
          ? `./analyze/client.html`
          : `../${options.nextRuntime === 'nodejs' ? '../' : ''}analyze/${options.nextRuntime}.html`,
      }),
    )
  }

  return config
}

interface DoctocatConfigOptions {}

export function doctocat(_options: DoctocatConfigOptions): NextConfig {
  return (input: NextConfig): NextConfig => {
    const pageExtensions = new Set(['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'])

    if (input.pageExtensions) {
      for (const extension of input.pageExtensions) {
        pageExtensions.add(extension)
      }
    }

    const config = withMDX({
      ...input,
      output: input.output ?? 'export',
      pageExtensions: Array.from(pageExtensions),
      webpack(config, options) {
        const order = [customWebpack]
        if (input.webpack) {
          order.unshift(input.webpack)
        }

        let result = config
        for (const fn of order) {
          result = fn(result, options)
        }

        return result
      },
    })

    return config
  }
}
