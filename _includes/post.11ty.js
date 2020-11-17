// _includes/post.11ty.js
const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

exports.render = function (data) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/styles.css">
    <title>${data.title}</title>
  </head>
  <body>
    ${render(html`<${App} data=${data} />`)}
  </body>
</html>`;
};

const App = ({ data }) =>
  html`${html([data.content])}`;

