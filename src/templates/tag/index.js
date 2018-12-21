import Helmet from 'react-helmet'
import descriptions from '../../../data/tag/index.json'
import { normalizeResult } from '../../utils/graphql'
import React from 'react'
import String from '../../utils/string'
import TalkList from '../../components/TalkList'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class TagTemplate extends React.Component {
  render() {
    const { pathname } = this.props.location

    const slug = pathname.substr(pathname.lastIndexOf('/') + 1)
    const description = descriptions[slug]

    return (
      <Layout>
        <Helmet
          title={`Programming Talks tagged with: "${
            this.props.pageContext.tag
          }"`}
        />
        <div className="row">
          <h1 className="tag-name">{this.props.pageContext.tag}</h1>

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
              this.props.pageContext.tag
            }"`}
          />
        </div>
      </Layout>
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
