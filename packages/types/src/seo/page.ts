/**
 * Maps Schema-dts @type `WebPage`
 *
 * Every web page is implicitly assumed to be declared to be of type WebPage
 *
 * breadcrumb
 * lastReviewed
 * mainContentOfPage - Indicates if this web page element is the main subject of the page.
 * primaryImageOfPage
 * relatedLink
 * reviewedBy
 * significantLink
 * speakable
 * specialty - Any branch of a field in which people typically develop specific expertise,
 *             usually after significant study, time, and effort.
 */
export type PageType =
  | 'WebPage'
  | 'AboutPage'
  | 'CheckoutPage'
  | 'ContactPage'
  /**
   * A FAQPage present one or more
   * {@link https://en.wikipedia.org/wiki/FAQ}
   * (see also QAPage).
   */
  | 'FAQPage'
  /** A page devoted to a single item, such as a particular product or hotel. */
  | 'ItemPage'
  | 'MedicalWebPage'
  | 'ProfilePage'
  /**
   * A QAPage
   * is focussed on a specific Question and its Answer(s),
   * e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).
   */
  | 'QAPage'
  /**
   * A listing that describes one or more real-estate Offers
   * (whose businessFunction is typically to lease out, or to sell).
   *
   * The RealEstateListing type itself represents the overall listing,
   * as manifested in some WebPage.
   */
  | 'RealEstateListing'
  | 'SearchResultsPage'
  | CollectionPage

type CollectionPage = 'CollectionPage' | MediaGallery

type MediaGallery = 'MediaGallery' | 'ImageGallery' | 'VideoGallery'
