const { html } = require("htm/preact");
const slugify = require("slugify");

const Tags = ({ tags }) => html`<section class="tags">
  <ul class="tags--list">
    ${tags
      .filter((tag) => tag != "blog")
      .map((tag) => html`<${Tag} tag=${tag} />`)}
  </ul>
</section>`;

const Tag = ({ tag }) =>
  html`<li class="tags--list-item">
    <a href="/blog/tags/${slugify(tag)}">${tag}</a>
  </li>`;

module.exports = { Tags };
