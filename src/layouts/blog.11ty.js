const { html } = require("htm/preact");
const { render } = require("preact-render-to-string");

const { Content } = require("../components/Content");
const { OtherPosts } = require("../components/OtherPosts");
const { Title } = require("../components/Title");
const { Info } = require("../components/Info");

exports.data = {
  layout: "base",
};

exports.render = function (data) {
  console.log(data);
  return render(html`
    <${Title} title=${data.title} />
    <${Info} date=${data.page.date} content=${data.content} tags=${data.tags} />
    <${Content}
      element="article"
      classes="article content dropcap tombstone"
      content=${data.content}
    />
    <${OtherPosts} />
  `);
};
