
module.exports = {
  seo: {
  "title": "RodriguesFast",
  "description": "Rodrigues Store, but Fast",
  "titleTemplate": "%s | RodriguesFast",
  "author": "rstore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "rstore",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://rstore.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/dispositivos%20m%C3%B3veis",
    search: "/s?q=Apple",
    pdp: "/apple-ipad-10/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/apple-ipad-10/p",
      collection: "/dispositivos%20m%C3%B3veis",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/apple-ipad-10/p",
      collection: "/dispositivos%20m%C3%B3veis",
      collection_filtered: "/dispositivos%20m%C3%B3veis/?category-1=dispositivos%20m%C3%B3veis&brand=Apple&facets=category-1%2Cbrand%27",
      search: "/s?q=Apple",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://rstore.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
