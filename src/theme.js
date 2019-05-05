
import indigo from '@material-ui/core/colors/indigo'
import deepPurple from '@material-ui/core/colors/deepPurple'
import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: deepPurple
  },
  typography: {
    useNextVariants: true
  },
  shape: {
    borderRadius: 6
  }
})
