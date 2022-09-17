const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");
    
    eleventyConfig.addPassthroughCopy({
      "./node_modules/simplelightbox/dist/simple-lightbox.min.css": "./assets/css/vendor/simple-lightbox/simple-lightbox.min.css",
      "./node_modules/simplelightbox/dist/simple-lightbox.min.js": "./assets/js/vendor/simple-lightbox/simple-lightbox.min.js"
    });

    eleventyConfig.setFrontMatterParsingOptions({  excerpt: true });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(sitemap, {
        lastModifiedProperty: "lastupdate",

        sitemap: {
          hostname: "https://www.annalytic.com",
        }
      });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}