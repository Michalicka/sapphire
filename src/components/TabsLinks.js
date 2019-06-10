
import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import withWidth from '@material-ui/core/withWidth'

export const TabsLinks = ({ params, match, baseUrl, width }) => {
  const isSmall = width === 'xs' || width === 'sm'
  return (
    <Paper>
      <Tabs
        value={match.params.type}
        variant={isSmall ? 'scrollable' : 'standard'}
        scrollButtons={isSmall ? 'auto' : 'off'}
        centered={!isSmall}
      >
        {
          params.map(param => {
            const url = baseUrl.replace(':type', param)
            const label = `${param.charAt(0).toUpperCase()}${param.slice(1, param.length)}`
            return (
              <Tab
                key={param}
                component={Link}
                to={url}
                value={param}
                label={label}
              >
              </Tab>
            )
          })
        }
      </Tabs>
    </Paper>
  )
}

TabsLinks.propTypes = {
  params: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
  baseUrl: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
}

export default withWidth()(TabsLinks)
