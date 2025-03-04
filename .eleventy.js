module.exports = function (eleventyConfig) {
    return {
        // Eleventy will look in the current directory (".") for content
        // and put the final site in a folder called "_site".
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },

        // By default, Eleventy uses Liquid for .md templates.
        // You can override these if you want to use Nunjucks or another template engine.
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk"
    };
};
