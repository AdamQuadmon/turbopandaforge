/**
 * Types of WebPage
 */
export type PageType =
  | 'AboutPage'
  | 'CheckoutPage'
  | 'ContactPage'
  | 'FAQPage'
  | 'ItemPage'
  | 'MedicalWebPage'
  | 'ProfilePage'
  | 'QAPage'
  | 'RealEstateListing'
  | 'SearchResultsPage'
  | 'WebPage'
  | CollectionPage

type CollectionPage = 'CollectionPage' | MediaGallery

type MediaGallery = 'ImageGallery' | 'MediaGallery' | 'VideoGallery'
