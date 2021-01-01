const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

const { Content } = require("../components/Content");
const { OtherPosts } = require("../components/OtherPosts");
const { Title } = require("../components/Title");
const { Info } = require("../components/Info");

exports.data = {
  layout: "base",
};

const getOtherPosts = (data) =>
  [...data.collections.blog]
    .reverse()
    .filter((post) => post.data.page.url != data.page.url)
    .slice(0, 4);

exports.render = function (data) {
  return render(html`
    <${Title} title=${data.title} />
    <${Info} date=${data.page.date} content=${data.content} tags=${data.tags} />
    <${Content}
      element="article"
      classes="content markdown dropcap tombstone"
      content=${data.content}
    />
    <${OtherPosts} posts=${getOtherPosts(data)} />
  `);
};
