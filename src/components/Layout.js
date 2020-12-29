const { html } = require("htm/preact");

const { Nav } = require("../components/Nav");
const { Content } = require("../components/Content");
const { Footer } = require("../components/Footer");

const Layout = ({ data }) => {
  return html`
    <header class="container--header header"><${Nav} /></header>
    <${Content}
      element="main"
      classes="container--main"
      content=${data.content}
    />
    <footer class="container--footer footer"><${Footer} /></footer>
  `;
};

module.exports = { Layout };
