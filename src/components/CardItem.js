
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import MoreButton from './MoreButton'
import Typography from '@material-ui/core/Typography'

export const CardItem = ({ item, options }) => {
  return (
    <Card>
      <CardHeader
        action={
          <MoreButton
            options={options}
          />
        }
        title={item.title}
      />
      <CardContent>
        <Typography
          variant="body1"
        >
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  )
}

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired
}

export default CardItem
