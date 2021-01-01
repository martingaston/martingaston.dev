const { html } = require("htm/preact");
const { format } = require("date-fns");

const { Tags } = require("./Tags");

const BlogPostSummary = ({ post }) => html`<li class="postlist--item">
  <h4 class="postlist--title">
    <a class="postlist--link" href=${post.url}>${post.data.title}</a>
  </h4>
  <div class="postlist--info">
    <time>${format(post.date, "MMMM dd, y")}</time>
    <${Tags} tags=${post.data.tags} />
  </div>
  <p class="postlist--summary">${post.data.page.excerpt}</p>
</li>`;

module.exports = { BlogPostSummary };
