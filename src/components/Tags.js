const { html } = require("htm/preact");
const slugify = require("slugify");

const Tags = ({ tags, prefix = "/blog/tags" }) => html`<section class="tags">
  <ul class="tags--list">
    ${tags
      .filter((tag) => tag != "blog")
      .map((tag) => html`<${Tag} tag=${tag} prefix=${prefix} />`)}
  </ul>
</section>`;

const Tag = ({ tag, prefix }) =>
  html`<li class="tags--list-item">
    <a href="${prefix}/${slugify(tag)}">${tag}</a>
  </li>`;

module.exports = { Tags };
