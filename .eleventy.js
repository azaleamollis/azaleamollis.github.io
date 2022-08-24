const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    eleventyConfig.setFrontMatterParsingOptions({  excerpt: true });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(sitemap, {
        lastModifiedProperty: "lastupdate",

        sitemap: {
          hostname: "https://www.annalytic.com",
        },
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}