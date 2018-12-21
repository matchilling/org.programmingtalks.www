import React from 'react'
import renderer from 'react-test-renderer'

import TagTemplate from '../../../templates/tag'

describe('TagTemplate', () => {
  it('renders correctly', () => {
    const data = {
      allTalkJson: {
        edges: [
          {
            node: {
              description:
                'In this keynote speech from JaxConf 2012, Rich Hickey, creator of Clojure and founder of Datomic gives an awesome analysis of the changing way we think about values (not the philosphoical kind) in light of the increasing complexity of information technology and the advent of Big Data. The broad subject of the talk makes it worth watching for almost anyone in the programming world, and was one of the highlights of the JaxConf lineup.',
              meta: {
                duration: 'PT31M44S',
              },
              presenter: {
                name: 'Rich Hickey',
              },
              source: {
                id: '-6BsiVyC1kM',
                provider: 'youtube',
              },
              slug: 'the-value-of-values',
              tag: ['JaxConf 2012', 'Keynote'],
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/-6BsiVyC1kM/default.jpg',
                  height: 90,
                  width: 120,
                },
              },
              title: 'The Value of Values',
            },
          },
        ],
      },
    }

    const location = {
      pathname: '/tag/keynote',
    }

    const pageContext = { tag: 'Keynote' }

    const tree = renderer
      .create(
        <TagTemplate
          data={data}
          location={location}
          pageContext={pageContext}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
