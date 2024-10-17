/**
 * Configuration for Next Js Headers Security Settings
 */
export interface SecuritySettingsConfig {
  permissionsPolicy: string
  referrerPolicy: string
  strictTransportSecurity: string
  xContentTypeOptions: string
  xDnsPrefetchControl: string
  xFrameOptions: string
  directives: DirectivesConfig
}

export type DirectivesConfig = {
  [key in ContentSecurityPolicyDirective]?: string[]
}

// Define the runtime object for ContentSecurityPolicyDirective
const ContentSecurityPolicyDirectives = {
  DefaultSrc: 'default-src',
  WorkerSrc: 'worker-src',
  ObjectSrc: 'object-src',
  BaseUri: 'base-uri',
  ScriptSrc: 'script-src',
  ChildSrc: 'child-src',
  StyleSrc: 'style-src',
  ImgSrc: 'img-src',
  MediaSrc: 'media-src',
  ConnectSrc: 'connect-src',
  FontSrc: 'font-src',
  FrameSrc: 'frame-src',
} as const

/**
 * ContentSecurityPolicyDirective
 *
 * 'default-src'  Specifies the default sources allowed for loading content
 *                such as JavaScript, Images, CSS, Fonts, AJAX requests, Frames, HTML5 Media.
 *
 * 'worker-src'   Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.
 *
 * 'object-src'   Specifies valid sources for the `<object>`, `<embed>`, and `<applet>` elements.
 *
 * 'base-uri'     Specifies the URLs which can be used in a document's `<base>` element.
 *
 * 'script-src'   Providers that include scripts on your page will need to declare this directive.
 *                Examples include:
 *                - Analytics providers like Google Analytics, Umami, etc.
 *                - Commenting systems like Giscus.
 *                - Any other third-party script providers.
 *
 * 'child-src'    Providers that require embedding content via frames or other HTML child elements
 *                may need to declare this directive.
 *                Examples include:
 *                - Embedding content from Google, Spotify, Discord, or Instagram.
 *                - Other iframe or embed providers.
 *
 * 'style-src'    Providers that include CSS styles on your page will need to declare this directive.
 *                Examples include:
 *                - Google Fonts or any other third-party CSS providers.
 *
 * 'img-src'      Providers for images or other media may need to declare this directive.
 *                Examples include:
 *                - Instagram, Google static content, or any other third-party image providers.
 *
 * 'media-src'    Providers for video or audio content may need to declare this directive.
 *                Examples include:
 *                - Amazon S3 for media hosting.
 *                - Any other third-party media providers.
 *
 * 'connect-src'  Providers that your site connects to via XMLHttpRequest, WebSocket,
 *                or Fetch will need to declare this directive.
 *                This is a broad directive and could include a variety of service providers.
 *
 * 'font-src'     Providers that include fonts on your page will need to declare this directive.
 *                Examples include:
 *                - Google Fonts or any other third-party font providers.
 *
 * 'frame-src'    Similar to child-src, but specifically for framing content.
 *                Examples include:
 *                - Giscus app or any other third-party iframe providers.
 */
type ContentSecurityPolicyDirective =
  (typeof ContentSecurityPolicyDirectives)[keyof typeof ContentSecurityPolicyDirectives]
