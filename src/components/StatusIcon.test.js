
import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import StatusIcon from './StatusIcon'
import { shallow } from 'enzyme'

describe('StatusIcon', () => {
  it('should render right component', () => {
    const wrapper = variant => shallow(<StatusIcon variant={variant} />)
    expect(wrapper('success').equals(<CheckCircleIcon />))
    expect(wrapper('warning').equals(<WarningIcon />))
    expect(wrapper('error').equals(<ErrorIcon />))
    expect(wrapper('info').equals(<InfoIcon />))
  })
})
