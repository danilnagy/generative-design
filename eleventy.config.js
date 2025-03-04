// .eleventy.js
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // 1. Create a new markdown-it instance with desired options
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  // 2. Configure markdown-it-anchor
  let anchorOptions = {
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: "#",
      placement: "before",
    }),
    slugify: (s) =>
      s
        .trim()
        .toLowerCase()
        .replace(/[^\w]+/g, "-"),
  };

  // 3. Create the customized Markdown library
  let mdLib = markdownIt(mdOptions).use(markdownItAnchor, anchorOptions);

  // 4. Tell Eleventy to use this new library for Markdown files
  eleventyConfig.setLibrary("md", mdLib);

  // Other Eleventy config...
  return {
    // Eleventy will look in the current directory (".") for content
    // and put the final site in a folder called "_site".
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },

    // By default, Eleventy uses Liquid for .md templates.
    // You can override these if you want to use Nunjucks or another template engine.
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
