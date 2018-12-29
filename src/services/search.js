import axios from 'axios'
import Fuse from 'fuse.js'

const searchOptions = {
  // Whether the matches should be included in the result set. When true,
  // each record in the result set will include the indices of the matched
  // characters: indices: [start, end]. These can consequently be used for
  // highlighting purposes.
  includeMatches: false,
  // Whether the score should be included in the result set. A score of 0
  // indicates a perfect match, while a score of 1 indicates a complete
  // mismatch.
  includeScore: true,
  // Whether to sort the result list, by score.
  shouldSort: true,
  // At what point does the match algorithm give up. A threshold of 0.0
  // requires a perfect match (of both letters and location), a threshold of
  // 1.0 would match anything.
  threshold: 0.2,
  // When true, the algorithm will search individual words and the full string,
  // computing the final score as a function of both. In this case, the
  // threshold, distance, and location are inconsequential for individual
  // tokens, and are thus ignored.
  tokenize: true,
  // Determines approximately where in the text is the pattern expected to be
  // found.
  location: 0,
  // Determines how close the match must be to the fuzzy location (specified by
  // location). An exact letter match which is distance characters away from
  // the fuzzy location would score as a complete mismatch. A distance of 0
  // requires the match be at the exact location specified, a distance of 1000
  // would require a perfect match to be within 800 characters of the location
  // to be found using a threshold of 0.8.
  distance: 0,
  // The maximum length of the pattern. The longer the pattern (i.e. the search
  // query), the more intensive the search operation will be. Whenever the
  // pattern exceeds the maxPatternLength, an error will be thrown.
  maxPatternLength: 32,
  minMatchCharLength: 3,
  // List of properties that will be searched. This supports nested properties,
  // weighted search, searching in arrays of strings and objects
  keys: ['title', 'presenter', 'description'],
}

const state = {
  isFetching: false,
  talks: [],
}

const fetchTalks = async () => {
  if (state.talks.length <= 0 && !state.isFetching) {
    state.isFetching = true
    state.talks = (await axios.get('/index.json')).data
    state.isFetching = false
  }

  return state.talks
}

class SearchService {
  constructor() {
    if (!SearchService.instance) {
      SearchService.instance = this
    }

    return SearchService.instance
  }

  async search(query) {
    const list = await fetchTalks()
    const fuse = new Fuse(list, searchOptions)

    return fuse.search(query)
  }
}

const instance = new SearchService()
Object.freeze(instance)

export default instance
