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
  <body class="container">
    ${render(html`<${App} data=${data} />`)}
  </body>
</html>`;
};

const App = ({ data }) =>
  html`
    <header class="container--header header"><${Nav} /></header>
    <main class="container--main main">${html([data.content])}</main>
    <footer class="container--footer footer">footer</footer>
  `;

const Nav = () =>
  html`
    <${Logo} />
    <nav>
      <ul class="topnav">
        <li class="topnav--item">Posts</li>
        <li class="topnav--item">Speaking</li>
        <li class="topnav--item">CV</li>
      </ul>
    </nav>
  `;

const Logo = () =>
  html`
    <svg
      id="mugshot"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165.21 209.599"
    >
      <defs />
      <g stroke-width="0">
        <path
          d="M13.661 0h137.763v7.856H13.661zM151.424 7.856h6.961v6.592h-6.96zM158.385 14.448h6.825v164h-6.825zM6.7 178.448h151.685v6.264H6.7zM0 14.448h6.701v164h-6.7zM27.27 112.724h111.915v7.5H27.27z"
        />
        <path
          d="M19.771 26.207h7.5v86.585h-7.5zM58.407 45.231h7.5V60.95h-7.5zM20.503 152.952H33.43v7.5H20.503zM99.488 146.553h39.072v7.5H99.488zM77.475 59.92h7.5v31.552h-7.5z"
        />
        <path
          d="M71.673 86.793h13.302v7.5H71.673zM65.907 99.915h26.744v7.5H65.907zM139.12 26.207h7.5v86.585h-7.5zM27.271 18.707h111.915v7.5H27.271zM6.7 7.856h6.961v6.592h-6.96zM6.7 203.335h151.685v6.264H6.7z"
        />
        <path
          d="M150.885 178.448h7.5V209.6h-7.5zM6.7 178.448h7.5v31.002H6.7zM43.407 44.904h7.5v15.952h-7.5z"
        />
        <path
          d="M43.407 60.72h22.5v7.5h-22.5zM43.407 39.72h22.5v7.5h-22.5zM108.057 43.673h7.5v19.378h-7.5zM93.057 44.138h7.5v19.326h-7.5z"
        />
        <path
          d="M93.057 60.72h22.5v7.5h-22.5zM93.057 39.72h22.5v7.5h-22.5zM27.02 47.22h16.646v7.5H27.02zM110.672 47.22h32.172v7.5h-32.172zM61.748 47.22h36.08v7.5h-36.08z"
        />
      </g>
    </svg>
  `;
