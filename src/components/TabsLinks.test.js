
import React from 'react'
import { TabsLinks } from './TabsLinks'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { shallow } from 'enzyme'
import { tasksTypes, tasks as tasksLink, dashboard as dashboardLink } from '../routes'
import Paper from '@material-ui/core/Paper'

describe('TabsLinks component', () => {
  let wrapper
  let props

  beforeEach(() => {
    props = {
      match: {
        params: {
          type: tasksTypes[0]
        }
      },
      params: tasksTypes,
      baseUrl: `${dashboardLink}/${tasksLink.replace(':id', '1')}`,
      width: 'lg'
    }
    wrapper = shallow(<TabsLinks {...props} />)
  })

  it('should render the component properly', () => {
    const name = param => `${param.charAt(0).toUpperCase()}${param.slice(1, param.length)}`
    const url = param => props.baseUrl.replace(':type', param)
    const tabs = wrapper.find(Tabs)
    const tab = tabs.dive().find(Tab)

    expect(wrapper.find(Tabs).props().value).toBe(props.match.params.type)
    props.params.forEach((param, index) => {
      const tabProps = tab.at(index).props()
      expect(tabProps.to).toBe(url(param))
      expect(tabProps.label).toBe(name(param))
      expect(tabProps.value).toBe(param)
    })
  })
})
