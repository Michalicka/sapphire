
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import FormHelperText from '@material-ui/core/FormHelperText'
import IconButton from '@material-ui/core/IconButton'
import ClearIcon from '@material-ui/icons/Clear'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  avatarWrap: {
    marginBottom: theme.spacing.unit * 2,
    position: 'relative'
  },
  input: {
    display: 'none'
  },
  label: {
    display: 'block',
    textAlign: 'center'
  },
  buttonIcon: {
    marginRight: theme.spacing.unit
  },
  avatar: {
    width: 120,
    height: 120,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  removeButton: {
    position: 'absolute',
    top: 0,
    right: 0
  }
})

export class ImageInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.setValue = this.setValue.bind(this)
    this.inputRef = React.createRef()
  }

  setValue(value) {
    this.props.setFieldValue(this.props.name, value)
    this.props.setFieldTouched(this.props.name, true)
  }

  handleChange(e) {
    if (e.currentTarget.value) {
      const reader = new FileReader()
      const event = { ...e }
      reader.onload = (ev) => {
        this.setValue(ev.target.result)
      }
      reader.readAsDataURL(event.currentTarget.files[0])
    } else {
      this.setValue('')
    }
  }

  render() {
    const { value, classes, name, error, helperText } = this.props
    return (
      <div>
        {value &&
          <div className={classes.avatarWrap}>
            <Avatar
              src={value}
              className={classes.avatar}
            />
            <IconButton
              className={classes.removeButton}
              onClick={() => this.handleChange({ currentTarget: {} })}
            >
              <ClearIcon />
            </IconButton>
          </div>
        }
        <label className={classes.label}>
          <input
            type="file"
            name={name}
            ref={this.inputRef}
            onChange={this.handleChange}
            className={classes.input}
            accept="image/png, image/jpeg"
          />
          <Button
            variant="contained"
            color="secondary"
            component="span"
            className={classes.errorButton}
          >
            <CloudUploadIcon className={classes.buttonIcon} />
            Upload
          </Button>
          {error &&
            <FormHelperText
              error={true}
            >{helperText}</FormHelperText>
          }
        </label>
      </div>
    )
  }
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired
}

export default withStyles(styles)(ImageInput)
