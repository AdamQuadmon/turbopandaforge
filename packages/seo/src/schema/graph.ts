import type { Graph, Thing } from 'schema-dts'

export const getGraphSchema = (schema: readonly Thing[]) => {
  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': schema,
  }

  return jsonLd
}
