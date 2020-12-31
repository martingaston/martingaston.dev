const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");
const { Layout } = require("../components/Layout");

exports.render = function (data) {
  if (!data.title) {
    console.error(`⚠️  No title set for page: ${data.page.inputPath}`);
  }

  const title = `${data.title} | martingaston.dev`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/styles.css">
    <link rel="stylesheet" href="/css/prism-theme.css">
    <title>${title}</title>
  </head>
  <body class="container">
    ${render(html`<${Layout} data=${data} />`)}
  </body>
</html>`;
};
