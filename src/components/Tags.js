const { html } = require("htm/preact");

const Tags = () => html`<section class="tags">
  <ul class="tags--list">
    <li class="tags--list-item">blog</li>
    <li class="tags--list-item">markdown</li>
    <li class="tags--list-item">TYPOGRAPHY</li>
  </ul>
</section>`;

module.exports = { Tags };
