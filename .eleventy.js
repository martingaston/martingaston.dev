const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "<br />"
  });
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
};
