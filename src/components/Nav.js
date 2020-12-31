const { html } = require("htm/preact");
const { Logo } = require("./Logo");

const sortedNav = (nav) =>
  nav.sort((a, b) => a.data.navorder - b.data.navorder);

const Nav = ({ nav, pageUrl }) => {
  return html`
    <${Logo} />
    <nav>
      <ul class="topnav">
        ${sortedNav(nav).map((navItem) => {
          const isCurrent = navItem.url == pageUrl;
          return html`<li
            class=${`topnav--item${isCurrent ? "-selected" : ""}`}
          >
            <a href=${navItem.url}>${navItem.data.title}</a>
          </li>`;
        })}
      </ul>
    </nav>
  `;
};

module.exports = { Nav };
