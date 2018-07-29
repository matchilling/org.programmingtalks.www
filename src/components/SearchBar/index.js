import PropTypes from 'prop-types'
import React from 'react'
import { Search } from '../../utils'

import './index.scss'

const initialState = {
  hits: [],
  query: '',
}

class SearchBar extends React.Component {
  constructor() {
    super()
    this.setState(initialState)
  }

  componentDidMount() {
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange() {
    const query = this.refs.search.value

    if (query.length < 3) return undefined

    Search.query({ query })
      .then(response =>
        this.setState({
          hits: response,
          query,
        })
      )
      .then(() => console.log(this.state.hits))
  }

  render() {
    return (
      <div className="row search-bar">
        <form>
          <input
            placeholder="Search for..."
            onChange={this.handleInputChange}
            ref="search"
          />
        </form>
      </div>
    )
  }
}

SearchBar.defaultProps = {
  className: null,
  id: 'search-bar',
}

SearchBar.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
}

export default SearchBar
