const slugMap = {
  2018: {
    'lar-data-fields': 'LAR_data_fields.md',
    'data-browser-filters': 'data_browser_filters.md'
  }
}

function slugToMarkdown(year, slug) {
  const slugs = slugMap[year]
  console.log(slugs, slug, slugs[slug])
  return slugs && slugs[slug]
}

function getAllSlugsPerYear(year) {
  const slugs = slugMap[year]
  return slugs && Object.keys(slugs)
}

function isBadSlug(year, slug){
  return !slugToMarkdown(year, slug)
}

function getMarkdownUrl(year, slug) {
  return `https://raw.githubusercontent.com/cfpb/hmda-documentation/master/markdown/${year}/${slugToMarkdown(year, slug)}`
}

export {
  getMarkdownUrl,
  isBadSlug,
  getAllSlugsPerYear
}
