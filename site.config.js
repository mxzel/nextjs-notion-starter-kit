module.exports = {
  // where it all starts -- the site's root Notion page (required)
  // rootNotionPageId: '1488c63bf43c46e8a3761806fd2e9204',
  rootNotionPageId: 'a4d94082c73141008ac61b7088118ac6',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '22dd1301-0eff-4225-8245-fb1100f1288a',

  // basic site info (required)
  name: 'Minxue Zhang',
  domain: 'https://happy2me.cn',
  author: 'Minxue Zhang',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'Minxue Zhang\'blog',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'mxzel',
  // linkedin: 'fisch2',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'mxzel/nextjs-notion-starter-kit',
  // utterancesGitHubLabel: 'Blog Comments',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
