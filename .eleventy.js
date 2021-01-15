const yaml = require("js-yaml");

const moment = require('moment');
moment.locale('en');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("img");

    eleventyConfig.addWatchTarget("style");
    eleventyConfig.addWatchTarget("js");

    eleventyConfig.addFilter('dateIso', date => {
        return moment(date).toISOString();
    });

    eleventyConfig.addFilter('dateReadable', date => {
        return moment(date).utc().format('LL'); // Format date into something like May 31, 2019
    });

    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
        excerpt_separator: "<!-- excerpt -->"
        });
    
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};
