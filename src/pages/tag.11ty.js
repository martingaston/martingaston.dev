const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");
const { BlogPostSummary } = require("../components/BlogPostSummary");

const { Title } = require("../components/Title");

exports.data = {
  layout: "base",
  pagination: {
    data: "collections.blog",
    size: 1,
    alias: "tag",
    before: getUniqueTagsFromCollection,
  },
  permalink: function (data) {
    return `blog/tags/${this.slug(data.tag)}/`;
  },
  eleventyComputed: {
    title: ({ tag }) => capitalise(tag),
  },
};

function getUniqueTagsFromCollection(data) {
  const uniqueTags = new Set();

  for (let template of data) {
    for (let tag of template.data.tags) {
      uniqueTags.add(tag);
    }
  }

  return [...uniqueTags];
}

function capitalise(string) {
  return string
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

exports.render = function (data) {
  return render(
    html`
      <${Title} title="${capitalise(data.tag)} Posts" />
      <article class="content">
        <ul>
          ${[...data.collections[data.tag]]
            .reverse()
            .map((post) => html`<${BlogPostSummary} post=${post} />`)}
        </ul>
      </article>
    `
  );
};
