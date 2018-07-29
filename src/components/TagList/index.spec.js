import React from 'react'
import Module from './'

describe('src/components/TagList', () => {
  const props = {
    list: [{ path: '/foo', name: 'Foo' }, { path: '/bar', name: 'Bar' }],
  }
  const wrapper = shallow(<Module list={props.list} />)

  it('should be wrapped in an ul html tag', () => {
    expect(wrapper.find('ul').exists()).toBe(true)
  })

  it('should contain a list', () => {
    expect(wrapper.find('GatsbyLink').length).toBe(props.list.length)
  })
})
