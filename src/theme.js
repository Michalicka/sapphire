
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue'
import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blue
  },
  typography: {
    useNextVariants: true
  }
})
