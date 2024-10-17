import { generateRobots } from '@turbopandaforge/seo/generators/robots'
import { siteUrl } from '~/config/routing'
import { robotsDisallowed } from '~/config/routing'

export default async function robots() {
  return generateRobots(siteUrl, robotsDisallowed)
}
