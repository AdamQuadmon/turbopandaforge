/**
 * Types of Blog Article
 */
export type ArticleType =
  | 'AdvertiserContentArticle'
  | 'Article'
  | 'DiscussionForumPosting'
  | 'Report'
  | 'SatiricalArticle'
  | 'ScholarlyArticle'
  | NewsArticle
  | SocialMediaPosting
  | TechArticle

type NewsArticle =
  | 'AnalysisNewsArticle'
  | 'AskPublicNewsArticle'
  | 'BackgroundNewsArticle'
  | 'NewsArticle'
  | 'OpinionNewsArticle'
  | 'ReportageNewsArticle'
  | 'ReviewNewsArticle'

type SocialMediaPosting = 'BlogPosting' | 'DiscussionForumPosting' | 'SocialMediaPosting'

type TechArticle = 'APIReference' | 'TechArticle'
