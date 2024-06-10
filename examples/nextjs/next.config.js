import {doctocat} from '@primer/doctocat-nextjs/config'
import {createRequire} from 'module'

const require = createRequire(import.meta.url)
const withDoctocat = doctocat()

/**
 * @type {import('next').NextConfig}
 */
const config = {
  // pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // webpack(config, options) {
  // const loader = {
  // loader: require.resolve('./src/loader/index.cjs'),
  // options: {
  // providerImportSource: 'next-mdx-import-source-file',
  // },
  // }
  // config.resolve.alias['next-mdx-import-source-file'] = [
  // 'private-next-root-dir/src/mdx-components',
  // 'private-next-root-dir/mdx-components',
  // '@mdx-js/react',
  // ]
  // config.module.rules.push({
  // test: /\.mdx$/,
  // use: [options.defaultLoaders.babel, loader],
  // })
  // return config
  // },
}

export default withDoctocat(config)
