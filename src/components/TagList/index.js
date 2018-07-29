import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

class TagList extends React.Component {
  render() {
    return (
      <ul className={this.props.className}>
        {this.props.list.map((item, key) => (
          <li key={key} className={`${this.props.className}-item`}>
            {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
          </li>
        ))}
      </ul>
    )
  }
}

TagList.defaultProps = {
  className: 'tag-list',
}

TagList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array.isRequired,
}

export default TagList
