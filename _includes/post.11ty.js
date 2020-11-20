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
    <footer class="container--footer footer"><${Footer} /></footer>
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

const Footer = () => html`<div>
  <ul class="footer-list">
    <li class="footer-list--item">
      <a href="https://ko-fi.com/Z8Z71TCJB" target="_blank"
        ><img
          height="36"
          style="border:0px;height:36px;"
          src="https://cdn.ko-fi.com/cdn/kofi5.png?v=2"
          border="0"
          alt="Buy Me a Coffee at ko-fi.com"
      /></a>
    </li>
    <li class="footer-list--item">
      <a href="https://www.twitter.com/squidmania">
        <svg
          class="footer-list--icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
          /></svg
      ></a>
    </li>
    <li class="footer-list--item">
      <a href="https://www.github.com/martingaston"
        ><svg
          class="footer-list--icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
          /></svg
      ></a>
    </li>
    <li class="footer-list--item">
      <a href="https://www.linkedin.com/in/martingaston"
        ><svg
          class="footer-list--icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          /></svg
      ></a>
    </li>
  </ul>
</div>`;
