import Fuse from 'fuse.js'
import debounce from 'lodash.debounce'

let fuse = null
let currentQuery = ""

const performSearch = debounce(function performSearch() {
  const query = currentQuery
  const results = fuse.search(query).slice(0, 20)
  postMessage({results: results, query: query})
})

onmessage = function({data}) {
  if (data.list) {
    fuse = new Fuse(data.list, {
      threshold: 0.2,
      keys: ['title', 'rawBody'],
      tokenize: true,
    })
  } else if (data.query) {
    currentQuery = data.query
    performSearch()
  }
}
