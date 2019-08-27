const slugMap = {
  2017: {},
  2018: {
    'lar-data-fields': 'LAR_data_fields.md',
    'data-browser-filters': 'data_browser_filters.md',
    'derived-data-fields': 'derived_data_fields.md',
    'faq': 'FAQ.md'
  }
}

function slugToMarkdown(year, slug) {
  const slugs = slugMap[year]
  return slugs && slugs[slug]
}

function getAllSlugsPerYear(year) {
  const slugs = slugMap[year]
  return slugs && Object.keys(slugs)
}

function isBadSlug(year, slug){
  return !slugToMarkdown(year, slug)
}

function isBadYear(year){
  return !slugMap[year]
}

function getMarkdownUrl(year, slug) {
  return `https://raw.githubusercontent.com/cfpb/hmda-documentation/master/markdown/${year}/${slugToMarkdown(year, slug)}`
}

export {
  getMarkdownUrl,
  isBadSlug,
  isBadYear,
  getAllSlugsPerYear
}
