import Helmet from 'react-helmet'
import { normalizeResult } from '../../utils/graphql'
import React from 'react'
import speakers from '../../../data/speaker/index.json'
import String from '../../utils/string'
import TalkList from '../../components/TalkList'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

export default class SpeakerTemplate extends React.Component {
  render() {
    const speaker = Object.assign(
      {
        name: this.props.pageContext.speaker,
      },
      speakers[this.props.pageContext.speaker]
    )

    return (
      <Layout>
        <Helmet title={`Programming Talks by ${speaker.name}`} />
        <div className="row">
          <h1>{speaker.name}</h1>

          {speaker.bio ? <div className="bio">{speaker.bio}</div> : null}

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
            title={`Programming Talks by ${speaker.name}`}
            titleElement="h3"
          />
        </div>
      </Layout>
    )
  }
}

/*eslint no-undef: "off"*/
export const query = graphql`
  query SpeakerQuery($speaker: String!) {
    allTalkJson(filter: { presenter: { name: { eq: $speaker } } }) {
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
