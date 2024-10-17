export const JSON_LD = (jsonLd: Record<string, unknown>) => {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      type="application/ld+json"
    />
  )
}
