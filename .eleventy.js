const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "<br />",
  });

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  const options = {
    html: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "layouts",
    },
  };
};
