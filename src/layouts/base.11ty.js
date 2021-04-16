const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");
const { Layout } = require("../components/Layout");

exports.render = function (data) {
  if (!data.title) {
    console.error(`⚠️  No title set for page: ${data.page.inputPath}`);
  }

  const author = data.author;
  const site = data.site;
  const title = `${data.title} | ${site.name}`;
  return `<!doctype html>
<html lang="en">
  <!-- 🤓 View the source - I welcome feedback! ${site.source} -->
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/prism-theme.css">
    <link rel="stylesheet" href="/css/cv.css" />
    <link rel="canonical" href="${site.url}${data.page.url}" />
    <title>${title}</title>

    <!-- General -->
    <meta name="author" content="${author.name}">

    <!-- Open Graph -->
    <meta property="og:title" content="${data.title}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${site.url}" />
    <meta property="og:image" content="${site.url}/assets/mg-gb.png" />
    <meta property="og:site_name" content="${site.name}">
    <meta property="og:locale" content="${site.locale}">

    <!-- Twitter -->
    <meta name="twitter:site" content="@${author.social.twitter.name}">
    <meta name="twitter:creator" content="@${author.social.twitter.name}">
  </head>
  <body class="container">
    ${render(html`<${Layout} data=${data} />`)}
  </body>
  <!-- LAST BUILD: ${data.build.timestamp} -->
</html>`;
};
