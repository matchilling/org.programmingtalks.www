import React from 'react'
import renderer from 'react-test-renderer'

import TalkTemplate from '../../../templates/talk'

describe('TalkTemplate', () => {
  it('renders correctly', () => {
    const data = {
      talkJson: {
        description:
          'In this keynote speech from JaxConf 2012, Rich Hickey, creator of Clojure and founder of Datomic gives an awesome analysis of the changing way we think about values (not the philosphoical kind) in light of the increasing complexity of information technology and the advent of Big Data. The broad subject of the talk makes it worth watching for almost anyone in the programming world, and was one of the highlights of the JaxConf lineup.',
        meta: {
          duration: 'PT31M44S',
        },
        presenter: {
          name: 'Rich Hickey',
        },
        slug: 'the-value-of-values',
        source: {
          id: '-6BsiVyC1kM',
          provider: 'youtube',
        },
        tag: ['JaxConf 2012', 'Keynote'],
        title: 'The Value of Values',
      },
      allTalkJson: {
        edges: [
          {
            node: {
              description:
                'Architects draw detailed blueprints before a brick is laid or a nail is hammered. Programmers and software engineers seldom do. A blueprint for software is called a specification. The need for extremely rigorous specifications before coding complex or critical systems should be obvious—especially for concurrent and distributed systems. This talk explains why some sort of specification should be written for any software.\n\nhttp://www.microsoftfacultysummit.com',
              meta: {
                duration: 'PT59M51S',
              },
              presenter: {
                name: 'Leslie Lamport',
              },
              source: {
                id: '-4Yp3j_jk8Q',
                provider: 'youtube',
              },
              slug: 'thinking-above-the-code',
              tag: [],
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/-4Yp3j_jk8Q/default.jpg',
                  height: 90,
                  width: 120,
                },
              },
              title: 'Thinking Above the Code',
            },
          },
        ],
      },
    }

    const location = {
      pathname: '/talk/the-value-of-values',
    }

    const pageContext = {}

    const tree = renderer
      .create(
        <TalkTemplate
          data={data}
          location={location}
          pageContext={pageContext}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
