import YAML from "yaml"
import { marked } from "marked"

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("*.png")
  eleventyConfig.addPassthroughCopy("*.svg")
  eleventyConfig.addPassthroughCopy("*.xml")
  eleventyConfig.addPassthroughCopy("*.ico")
  eleventyConfig.addPassthroughCopy("assets/")
  eleventyConfig.addPassthroughCopy("js/")

  eleventyConfig.addGlobalData("permalink", () => {
    return data => `${data.page.filePathStem}.${data.page.outputFileExtension}`
  })
  eleventyConfig.addUrlTransform(page => page.url.replace(/\.html$/, ""))

  eleventyConfig.addDataExtension("yml", contents => YAML.parse(contents))

  eleventyConfig.addFilter("markdownify", text =>
    marked(String(text))
      .trimEnd()
      .replace(/<a href="([^"]*)"/g, (x, href) => {
        x += ' target="_blank"'
        x += ' referrerpolicy="no-referrer"'
        return x
      }),
  )
}
