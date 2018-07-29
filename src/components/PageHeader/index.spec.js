import React from 'react'
import Module from './'

describe('src/components/PageFooter', () => {
  const wrapper = shallow(<Module />)

  it('should be wrapped in a footer html tag', () => {
    expect(wrapper.find('header').exists()).toBe(true)
  })

  it('should contain a link to the homepage', () => {
    const result = wrapper.find('GatsbyLink')
    expect(result.prop('to')).toBe('/')
  })

  it('should contain a title', () => {
    expect(wrapper.find('h1').text()).toBe('programmingtalks.org')
  })
})
