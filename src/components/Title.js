const { html } = require("htm/preact");

const Title = ({ title }) => html`<h1 class="main--post-title">${title}</h1>`;

module.exports = { Title };
