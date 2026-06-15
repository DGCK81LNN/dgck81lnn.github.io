export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("*.png")
  eleventyConfig.addPassthroughCopy("*.xml")
  eleventyConfig.addPassthroughCopy("*.ico")
  eleventyConfig.addPassthroughCopy("js")

  eleventyConfig.addGlobalData("permalink", () => {
    return data => `${data.page.filePathStem}.${data.page.outputFileExtension}`
  })
  eleventyConfig.addUrlTransform(page => page.url.replace(/\.html$/, ""))
}
