import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

import './index.scss'

class ResultList extends React.Component {
  static defaultProps = {
    className: 'result-list',
  }

  render() {
    if (this.props.list.length <= 0) {
      return null
    }

    return (
      <ul className={this.props.className}>
        {this.props.list.map((item, key) => (
          <li key={key} className={`${this.props.className}-item`}>
            <Link to={item.url}>
              {item.title}
              {item.presenter && <span>{item.presenter}</span>}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}

ResultList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array.isRequired,
}

export default ResultList
