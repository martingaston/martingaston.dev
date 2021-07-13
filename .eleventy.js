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

  eleventyConfig.addCollection("blog", function (collectionApi) {
    const blog = collectionApi.getFilteredByGlob("src/blog/*.md");

    return orderCollectionIntoTags(blog);
  });

  eleventyConfig.addCollection("links", function (collectionApi) {
    const links = collectionApi.getFilteredByGlob("src/links/*.md");

    return orderCollectionIntoTags(links);
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "layouts",
      data: "data",
    },
  };
};

function orderCollectionIntoTags(collection) {
  tags = {
    all: [],
  };

  for (let template of collection) {
    tags["all"].push(template);

    for (let tag of template.data.tags) {
      if (tags.hasOwnProperty(tag)) {
        tags[tag].push(template);
      } else {
        tags[tag] = [template];
      }
    }
  }

  return tags;
}
