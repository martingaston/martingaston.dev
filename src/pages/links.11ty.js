const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

const { Title } = require("../components/Title");
const { LinkItem } = require("../components/LinkItem");
const { Tags } = require("../components/Tags");

exports.data = {
  layout: "base",
  title: "Links",
  permalink: "links/index.html",
  tags: "nav",
  navorder: 3,
};

exports.render = function (data) {
  return render(
    html`<${Title} title="Links" />
      <article class="content">
        <${Tags}
          tags=${getAllTagsFromCollection(data.collections.links)}
          prefix="/links/tags"
        />
        <ol class="postlist">
          ${[...data.collections.links.all]
            .reverse()
            .map((link) => html`<${LinkItem} link=${link} />`)}
        </ol>
      </article>`
  );
};

function getAllTagsFromCollection(collection) {
  return Object.keys(collection).filter((tag) => tag !== "all");
}
