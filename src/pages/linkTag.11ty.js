const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

const { Title } = require("../components/Title");
const { LinkItem } = require("../components/LinkItem");

exports.data = {
  layout: "base",
  pagination: {
    data: "collections.links",
    size: 1,
    alias: "tag",
    before: getUniqueTagsFromCollection,
  },
  permalink: function (data) {
    return `links/tags/${this.slug(data.tag)}/`;
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
      <${Title} title="${capitalise(data.tag)} Links" />
      <article class="content">
        <ul>
          ${getTaggedTemplatesFromCollection(data.tag, data.collections.links)
            .reverse()
            .map((link) => html`<${LinkItem} link=${link} />`)}
        </ul>
      </article>
    `
  );
};

function getTaggedTemplatesFromCollection(tag, collection) {
  return collection.filter((template) => template.data.tags.includes(tag));
}
