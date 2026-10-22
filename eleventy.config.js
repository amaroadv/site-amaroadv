export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("src/googled0b27c956afa3157.html");
  eleventyConfig.ignores.add("src/googled0b27c956afa3157.html");

  eleventyConfig.addFilter("paragrafos", (texto = "") =>
    texto.split(/\n\s*\n/).map((p) => `<p>${p.trim()}</p>`).join("\n")
  );
  eleventyConfig.addFilter("dataBR", (data) =>
    new Date(data).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })
  );
  eleventyConfig.addFilter("head", (arr = [], n) => arr.slice(0, n));
  eleventyConfig.addFilter("urlencode", (s = "") => encodeURIComponent(s));
  eleventyConfig.addCollection("artigos", (api) =>
    api.getFilteredByGlob("src/artigos/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
