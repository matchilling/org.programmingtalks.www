import React from 'react'
import renderer from 'react-test-renderer'

import SpeakerTemplate from '../../../templates/speaker'

describe('SpeakerTemplate', () => {
  it('renders correctly', () => {
    const location = {
      pathname: '/speaker/alan-kay',
    }

    const data = {
      allTalkJson: {
        edges: [
          {
            node: {
              description:
                'Alan Kay talks about alternative approaches to teach Computer Science in schools.',
              meta: {
                duration: 'PT1H10M32S',
              },
              presenter: {
                name: 'Alan Kay',
              },
              source: {
                id: 'N9c7_8Gp7gI',
                provider: 'youtube',
              },
              slug: 'rethinking-computer-science-education',
              tag: ['Educational', 'CrossRoads 2015', 'Inspiring'],
              thumbnails: {
                default: {
                  url: 'https://i.ytimg.com/vi/N9c7_8Gp7gI/default.jpg',
                  height: 90,
                  width: 120,
                },
              },
              title: 'Rethinking Computer Science Education',
            },
          },
        ],
      },
    }

    const tree = renderer
      .create(<SpeakerTemplate location={location} data={data} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
