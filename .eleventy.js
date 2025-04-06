module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/*.njk");
  });
  eleventyConfig.addFilter("stringify", function (value) {
    return JSON.stringify(value, null, 2);
  });

  return {
    pathPrefix: "/new-main-smart-inspired/", // Must match your repo name!
    dir: {
      input: "src",
      output: "./_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "md", "html"],
  };
};
