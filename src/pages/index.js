import { normalizeResult } from '../utils/graphql'
import React from 'react'
import { String } from '../utils'
import Player from '../components/Player'
import speakers from '../../data/speaker/index.json'
import TagList from '../components/TagList'
import TalkList from '../components/TalkList'

import './index.scss'

const blacklist = [
  'Programming Language',
  'Bash Films',
  'psf',
  'Video Conferencing',
  'programming',
  'Event Video Recording',
  'video services',
  'videoconference',
  'Conference Video Recording',
]
const randomTalk = array => array[Math.floor(Math.random() * array.length)]
const sumByTagDesc = talks => {
  return Array.from(
    talks.reduce((map, el) => {
      if (!Array.isArray(el.node.tag)) return arr

      for (let i = 0; i < el.node.tag.length; i++) {
        const tag = el.node.tag[i]
        if (map.has(tag)) map.set(tag, map.get(tag) + 1)
        else map.set(tag, 1)
      }

      return map
    }, new Map())
  ).sort((a, b) => {
    return b[1] - a[1]
  })
}

export default class IndexPage extends React.Component {
  render() {
    const popularSpeakers = Object.keys(speakers).map(key => {
      return { name: key, path: `/speaker/${String.slugify(key)}` }
    })
    const popularTags = sumByTagDesc(this.props.data.allTalkJson.edges)
      .filter(talk => !(-1 < blacklist.indexOf(talk[0])))
      .slice(0, 15)
      .map(key => {
        return { name: key[0], path: `/tag/${String.slugify(key[0])}` }
      })
    const talk = randomTalk(this.props.data.allTalkJson.edges).node

    return (
      <div>
        <Player videoId={talk.source.id} style />
        <div className="row content">
          <div className="popular">
            <h3 className="title">Popular speakers</h3>
            <TagList className="tags" list={popularSpeakers} />
            <h3 className="title">Popular tags</h3>
            <TagList className="tags" list={popularTags} />
          </div>
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
          />
        </div>
      </div>
    )
  }
}

/*eslint no-undef: "off"*/
export const query = graphql`
  query AllTalkQuery {
    allTalkJson {
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
