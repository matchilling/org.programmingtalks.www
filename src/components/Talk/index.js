import Link from 'gatsby-link'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import TagList from '../TagList'

import './index.scss'

class Talk extends React.Component {
  render() {
    return (
      <div className="talk-info">
        {this.props.path ? (
          <h2 className="talk-title">
            <Link to={this.props.path}>{this.props.title}</Link>
          </h2>
        ) : (
          <h2 className="talk-title">{this.props.title}</h2>
        )}

        {(this.props.presenter ||
          this.props.duration ||
          this.props.tags.length) && (
          <div className="talk-meta">
            {this.props.presenter.name && (
              <div className="talk-presenter">
                {this.props.presenter.path && (
                  <Link to={this.props.presenter.path}>
                    {this.props.presenter.name}
                  </Link>
                )}

                {!this.props.presenter.path && (
                  <span>{this.props.presenter.name}</span>
                )}
              </div>
            )}

            {this.props.duration && (
              <div className="talk-duration">
                {moment.duration(this.props.duration).humanize()}
              </div>
            )}

            <TagList className="talk-tag-list" list={this.props.tags} />
          </div>
        )}

        {(this.props.thumbnails || this.props.description) && (
          <div className="talk-description">
            {this.props.thumbnails && this.props.thumbnails.default.url && (
              <img
                alt={this.props.title}
                height={this.props.thumbnails.default.height / 1.5}
                src={this.props.thumbnails.default.url}
                width={this.props.thumbnails.default.width / 1.5}
              />
            )}

            {this.props.description && this.props.description}
          </div>
        )}
      </div>
    )
  }
}

Talk.propTypes = {
  description: PropTypes.string,
  duration: PropTypes.string,
  id: PropTypes.string,
  key: PropTypes.string,
  presenter: PropTypes.object,
  tags: PropTypes.array,
  thumbnails: PropTypes.object,
  title: PropTypes.string,
}

export default Talk
