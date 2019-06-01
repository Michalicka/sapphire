
import indigo from '@material-ui/core/colors/indigo'
import deepPurple from '@material-ui/core/colors/deepPurple'
import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      light: deepPurple[300],
      main: deepPurple[400],
      dark: deepPurple[500]
    }
  },
  typography: {
    useNextVariants: true
  },
  shape: {
    borderRadius: 6
  }
})
