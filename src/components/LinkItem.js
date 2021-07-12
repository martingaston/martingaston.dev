const { html } = require("htm/preact");
const { format } = require("date-fns");

const { Tags } = require("./Tags");

const LinkItem = ({ link }) => html`<li class="postlist--item">
  <h4 class="postlist--title">
    <a class="postlist--link" href=${link.data.url}>${link.data.title}</a>
  </h4>
  <div class="postlist--info">
    <time>${format(link.date, "MMMM dd, y")}</time>
    <${Tags} tags=${link.data.tags} prefix="/links/tags" />
  </div>
  ${link.data.comment &&
  html`<p class="postlist--summary">${link.data.comment}</p>`}
</li>`;

module.exports = { LinkItem };
