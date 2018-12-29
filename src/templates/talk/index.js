import Helmet from 'react-helmet'
import { normalizeResult } from '../../utils/graphql'
import Player from '../../components/Player'
import React from 'react'
import Search from '../../components/Search'
import String from '../../utils/string'
import Talk from '../../components/Talk'
import TalkList from '../../components/TalkList'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class TalkTemplate extends React.Component {
  render() {
    const talk = this.props.data.talkJson

    return (
      <Layout>
        <Helmet
          title={
            talk.presenter.name
              ? `${talk.title} by ${talk.presenter.name}`
              : talk.title
          }
          meta={[{ name: 'description', content: talk.description }]}
        />

        <Player videoId={talk.source.id} />

        <div className="row content">
          <Search />
          <Talk
            description={talk.description}
            duration={talk.meta.duration}
            path={`/talk/${talk.slug}`}
            presenter={{
              name: talk.presenter.name,
              path: `/speaker/${String.slugify(talk.presenter.name)}`,
            }}
            tags={talk.tag.map(tag => {
              return { name: tag, path: `/tag/${String.slugify(tag)}` }
            })}
            title={talk.title}
          />

          <TalkList
            list={normalizeResult(this.props.data.allTalkJson).map(talk => {
              return {
                path: `/talk/${talk.slug}`,
                tags: talk.tag.map(tag => {
                  return { name: tag, path: `/tag/${String.slugify(tag)}` }
                }),
                presenter: {
                  name: talk.presenter.name,
                  path: `/speaker/${String.slugify(talk.presenter.name)}`,
                },
                ...talk,
              }
            })}
            title="Related Talks"
          />
        </div>
      </Layout>
    )
  }
}

/*eslint no-undef: "off"*/
export const query = graphql`
  query TalkQuery($slug: String, $tags: [String]) {
    talkJson(slug: { eq: $slug }) {
      description
      meta {
        duration
      }
      presenter {
        name
      }
      slug
      source {
        id
        provider
      }
      tag
      title
    }
    allTalkJson(
      limit: 10
      filter: { tag: { in: $tags }, slug: { ne: $slug } }
    ) {
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
