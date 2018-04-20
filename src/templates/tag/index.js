import Helmet from 'react-helmet'
import descriptions from '../../../data/tag/index.json'
import { normalizeResult } from '../../utils/graphql'
import React from 'react'
import String from '../../utils/string'
import TalkList from '../../components/TalkList'

export default class TagTemplate extends React.Component {
  render() {
    const name = this.props.pathContext.tag
    const description = descriptions[this.props.pathContext.slug]

    return (
      <div>
        <Helmet
          title={`Programming Talks tagged with: "${
            this.props.pathContext.tag
          }"`}
        />
        <div className="row">
          <h1 className="tag-name">{name}</h1>

          {description ? (
            <p className="tag-description">{description}</p>
          ) : null}

          <TalkList
            list={normalizeResult(this.props.data.allTalkJson).map(talk => {
              return {
                tags: talk.tag.map(tag => {
                  return { name: tag, path: `/tag/${String.slugify(tag)}` }
                }),
                path: `/talk/${talk.slug}`,
                presenter: {
                  name: talk.presenter.name,
                  path: `/speaker/${String.slugify(talk.presenter.name)}`,
                },
                ...talk,
              }
            })}
            title={`Programming Talks tagged with: "${
              this.props.pathContext.tag
            }"`}
          />
        </div>
      </div>
    )
  }
}

/*eslint no-undef: "off"*/
export const query = graphql`
  query TagQuery($tag: String!) {
    allTalkJson(filter: { tag: { eq: $tag } }) {
      edges {
        node {
          description
          meta {
            duration
          }
          presenter {
            name
          }
          source {
            id
            provider
          }
          slug
          tag
          thumbnails {
            default {
              url
              height
              width
            }
          }
          title
        }
      }
    }
  }
`
