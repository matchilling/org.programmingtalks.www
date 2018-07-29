import React from 'react'
import Module from './'

describe('src/components/PageFooter', () => {
  const wrapper = shallow(<Module />)

  it('should be wrapped in a footer html tag', () => {
    expect(wrapper.find('footer').exists()).toBe(true)
  })

  it('should contain a title', () => {
    expect(wrapper.find('h2').text()).toBe('Contributing')
  })

  it('should contain a description', () => {
    const expected =
      'Have you seen an awesome talk which is currently missing on this website? ' +
      'Drop me an email at m@matchilling.com, send a tweet @matchilling or create ' +
      'a pull request on github.com/matchilling/org-programmingtalks.'

    expect(wrapper.find('p').text()).toBe(expected)
  })

  it('description should contain 3 links', () => {
    const expected = [
      'mailto:m@matchilling.com',
      'https://twitter.com/MatChilling',
      'https://github.com/matchilling/org-programmingtalks',
    ]

    wrapper.find('a').forEach((node, index) => {
      expect(node.prop('href')).toBe(expected[index])
    })
  })
})
