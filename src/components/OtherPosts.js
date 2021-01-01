const { html } = require("htm/preact");
const { format } = require("date-fns");

const OtherPosts = ({ posts }) => {
  return html`<section class="content afterpost">
    <h6 class="afterpost--title">Keep That Content Train Rolling...</h6>
    <ul class="afterpost--list">
      ${posts.map(
        (post) => html`
          <li class="afterpost--list-item">
            <time>${format(post.data.page.date, "dd MMM yyyy")}</time>
            <a href=${post.data.page.url}>${post.data.title}</a>
          </li>
        `
      )}
    </ul>
  </section>`;
};

module.exports = { OtherPosts };
