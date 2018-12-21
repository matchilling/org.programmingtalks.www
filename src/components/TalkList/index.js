import PropTypes from 'prop-types'
import React from 'react'
import Talk from '../Talk'
import String from '../../utils/string'

class TalkList extends React.Component {
  static defaultProps = {
    titleElement: 'h3',
  }

  render() {
    if (this.props.list.length <= 0) return null

    return (
      <div className="talk-list-wrapper">
        {this.props.title && (
          <this.props.titleElement className="talk-list-title">
            {this.props.title}
          </this.props.titleElement>
        )}

        <div className="talk-list">
          {this.props.list.map((item, key) => (
            <div className="talk-list-item" key={key}>
              <Talk
                description={`${String.truncate(item.description, 50)} ...`}
                duration={
                  item.hasOwnProperty('meta') &&
                  item.meta.hasOwnProperty('duration')
                    ? item.meta.duration
                    : null
                }
                path={item.path}
                presenter={{
                  name:
                    item.hasOwnProperty('presenter') &&
                    item.presenter.hasOwnProperty('name')
                      ? item.presenter.name
                      : '',
                  path:
                    item.hasOwnProperty('presenter') &&
                    item.presenter.hasOwnProperty('path')
                      ? item.presenter.path
                      : '',
                }}
                tags={item.tags}
                thumbnails={item.thumbnails}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

TalkList.propTypes = {
  list: PropTypes.array.isRequired,
  title: PropTypes.string,
  titleElement: PropTypes.string,
}

export default TalkList
