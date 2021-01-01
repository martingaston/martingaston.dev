const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");
const { format } = require("date-fns");

const { Title } = require("../components/Title");
const { Tags } = require("../components/Tags");

exports.data = {
  layout: "base",
  title: "Blog",
  permalink: "blog/index.html",
  tags: "nav",
  navorder: 2,
};

exports.render = function (data) {
  return render(
    html`<${Title} title="Blog" />
      <article class="content">
        <ol class="postlist">
          ${[...data.collections.blog]
            .reverse()
            .map((post) => html`<${Post} post=${post} />`)}
        </ol>
      </article>`
  );
};

const Post = ({ post }) => html`<li class="postlist--item">
  <h2 class="postlist--title">
    <a class="postlist--link" href=${post.url}>${post.data.title}</a>
  </h2>
  <div class="postlist--info">
    <time>${format(post.date, "MMMM dd, y")}</time>
    <${Tags} tags=${post.data.tags} />
  </div>
  <p class="postlist--summary">${post.data.page.excerpt}</p>
</li>`;
