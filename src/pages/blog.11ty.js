const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

const { Title } = require("../components/Title");
const { BlogPostSummary } = require("../components/BlogPostSummary");

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
          ${[...data.collections.blog.all]
            .reverse()
            .map((post) => html`<${BlogPostSummary} post=${post} />`)}
        </ol>
      </article>`
  );
};
