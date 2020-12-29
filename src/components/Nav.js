const { html } = require("htm/preact");
const { Logo } = require("./Logo");

const Nav = () =>
  html`
    <${Logo} />
    <nav>
      <ul class="topnav">
        <li class="topnav--item"><a href="/posts">Posts</a></li>
        <li class="topnav--item-selected"><a href="/speaking">Speaking</a></li>
        <li class="topnav--item"><a href="/cv">CV</a></li>
      </ul>
    </nav>
  `;

module.exports = { Nav };
