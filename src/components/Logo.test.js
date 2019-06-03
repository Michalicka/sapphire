
import logo from '../assets/brands/logo.png'
import logoWhite from '../assets/brands/logo-white.png'
import React from 'react'
import Logo from './Logo'
import { shallow } from 'enzyme'

describe('logo component', () => {
  it('should return logo src', () => {
    const wrapper = shallow(<Logo />)
    const img = wrapper.find('img')
    expect(img.props().src).toBe(logo)
  })

  it('shloud return logo white src', () => {
    const wrapper = shallow(<Logo white />)
    const img = wrapper.find('img')
    expect(img.props().src).toBe(logoWhite)
  })
})
