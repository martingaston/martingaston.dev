const { h } = require("preact");

const Content = ({ element, classes, content }) => {
  return h(
    element,
    {
      class: classes,
      dangerouslySetInnerHTML: {
        __html: content,
      },
    },
    ""
  );
};

module.exports = { Content };
