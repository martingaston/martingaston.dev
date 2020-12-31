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
          return isCurrent
            ? html`<${CurrentNavItem}
                url=${navItem.url}
                title=${navItem.data.title}
              />`
            : html`<${NavItem}
                url=${navItem.url}
                title=${navItem.data.title}
              />`;
        })}
      </ul>
    </nav>
  `;
};

const CurrentNavItem = ({ url, title }) =>
  html`<li class="topnav--item-selected">
    <a aria-current="page" href=${url}>${title}</a>
  </li>`;

const NavItem = ({ url, title }) =>
  html`<li class="topnav--item"><a href=${url}>${title}</a></li>`;

module.exports = { Nav };
