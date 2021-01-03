const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: "<br />",
  });

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  const options = {
    html: true,
    linkify: true,
    typographer: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "layouts",
    },
  };
};
