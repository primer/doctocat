import {doctocat} from '@primer/doctocat-nextjs/config'

const withDoctocat = doctocat()

/**
 * @type {import('next').NextConfig}
 */
const config = {}

export default withDoctocat(config)
