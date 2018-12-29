import React from 'react'
import ResultList from '../ResultList'
import SearchService from '../../services/search'

import './index.scss'

const options = {
  queryMinLength: 3,
  results: 10,
}

const state = {
  talks: [],
}

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = state
    this.onChange = this.onChange.bind(this)
    this.onResponse = this.onResponse.bind(this)
  }

  onChange(event) {
    if (event.target.value.length < options.queryMinLength) {
      return this.reset()
    }

    SearchService.search(event.target.value).then(this.onResponse)
  }

  onResponse(talks) {
    this.setState({
      talks: talks.map(element => element.item).slice(0, options.results - 1),
    })
  }

  render() {
    return (
      <div className={'search'}>
        <input
          id="search-input"
          onChange={this.onChange}
          placeholder={'Search'}
          type="text"
          value={this.state.query}
        />
        <ResultList list={this.state.talks} />
      </div>
    )
  }

  reset() {
    this.setState(state)
  }
}

export default Search
