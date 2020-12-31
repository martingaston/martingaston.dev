const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

const { Title } = require("../components/Title");

exports.data = {
  layout: "base",
  pagination: {
    data: "collections",
    size: 1,
    alias: "tag",
    filter: ["blog"],
  },
  permalink: function (data) {
    return `blog/tags/${this.slug(data.tag)}/`;
  },
};

function capitalise(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

exports.render = function (data) {
  return render(
    html`
      <${Title} title="Posts Tagged With ${capitalise(data.tag)}" />
      <article class="article content">
        <ul>
          ${data.collections[data.tag].map(
            (post) => html`<li><a href=${post.url}>${post.data.title}</a></li>`
          )}
        </ul>
      </article>
    `
  );
};
