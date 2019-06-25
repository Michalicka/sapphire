
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import MoreButton from './MoreButton'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export const CardItem = ({ item, options, baseUrl, urlSelector }) => (
  <Card>
    <CardHeader
      action={
        <MoreButton
          options={options}
          args={[item.id]}
        />
      }
      title={item.name || item.title}
    />
    <CardActions>
      <Button
        color="secondary"
        variant="outlined"
        component={Link}
        to={baseUrl.replace(urlSelector || ':id', item.id)}
      >GO TO</Button>
    </CardActions>
  </Card>
)

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired,
  urlSelector: PropTypes.string
}

export default CardItem
