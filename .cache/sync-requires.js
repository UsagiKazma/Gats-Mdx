const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/juan/ProjectsFolder/Gats-Mdx/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/juan/ProjectsFolder/Gats-Mdx/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/juan/ProjectsFolder/Gats-Mdx/src/pages/index.js"))),
  "component---src-pages-newsletter-js": hot(preferDefault(require("/home/juan/ProjectsFolder/Gats-Mdx/src/pages/newsletter.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/home/juan/ProjectsFolder/Gats-Mdx/src/pages/posts.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("/home/juan/ProjectsFolder/Gats-Mdx/src/pages/success.js")))
}

