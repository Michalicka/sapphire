
import React from 'react'
import ProfileController from './ProfileController'
import MenuItem from '@material-ui/core/MenuItem'
import Avatar from '@material-ui/core/Avatar'
import { shallow } from 'enzyme'

describe('ProfileController component', () => {
  let wrapper
  const logout = jest.fn()
  const avatarSrc = 'https://www.google.com/'
  const editProfile = jest.fn()
  const changePassword = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<ProfileController logout={logout} initial="A" avatar={avatarSrc} editProfile={editProfile} changePassword={changePassword} />).dive()
  })

  it('should show have src when avatar is set', () => {
    const avatar = wrapper.find(Avatar)

    expect(avatar.props().src).toBe(avatarSrc)
  })

  it('should show initial when src is empty string', () => {
    const initial = 'A'
    const wrapper = shallow(<ProfileController logout={logout} initial={initial} avatar="" editProfile={editProfile} changePassword={changePassword} />).dive()
    const avatar = wrapper.find(Avatar)
    expect(avatar.props().children).toBe(initial)
  })

  it('hadleOpen should changeState as expected', () => {
    const target = 'target'

    expect(wrapper.state('anchorEl')).toBe(null)
    wrapper.instance().handleOpen({ currentTarget: target })
    expect(wrapper.state('anchorEl')).toBe(target)
  })

  it('should call logout function on logout MenuItem click', () => {
    const logoutMenuItem = wrapper.find(MenuItem).at(2)
    logoutMenuItem.simulate('click')
    expect(logout.mock.calls.length).toBe(1)
  })

  it('should call editProfile function on edit profile MenuItem click', () => {
    const editProfileMenuItem = wrapper.find(MenuItem).at(0)
    editProfileMenuItem.simulate('click')
    expect(editProfile.mock.calls.length).toBe(1)
  })

  it('should call changePassword function on edit profile MenuItem click', () => {
    const editProfileMenuItem = wrapper.find(MenuItem).at(1)
    editProfileMenuItem.simulate('click')
    expect(changePassword.mock.calls.length).toBe(1)
  })
})
