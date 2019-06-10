
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import MoreButton from './MoreButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export class CardItem extends React.Component {

  render() {
    const { item, options, baseUrl } = this.props
    return (
      <Card>
        <CardHeader
          action={
            <MoreButton
              options={options}
              args={[item.id]}
            />
          }
          title={item.name}
        />
        <CardContent>
          <Typography
            variant="body1"
          >
            {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="secondary"
            variant="outlined"
            component={Link}
            to={baseUrl.replace(':id', item.id)}
          >GO TO</Button>
        </CardActions>
      </Card>
    )
  }
}

CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  baseUrl: PropTypes.string.isRequired
}

export default CardItem
