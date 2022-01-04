import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

// Componentes do material Ui
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2)
  },
  button: {
    width: '100%'
  }
}))

function Navbar() {
  const classes = useStyles()

  const tags = [
    { id: 1, name: 'React.js' },
    { id: 2, name: 'React.js' },
    { id: 3, name: 'React.js' },
    { id: 4, name: 'React.js' },
    { id: 5, name: 'React.js' },
    { id: 6, name: 'React.js' }
  ]

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        REGISTRAR GRÁTIS
      </Button>
      <ListSubheader>{'Tags em alta'}</ListSubheader>
      {tags.map(item => (
        <ListItem key={item.id}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem button>Exibir mais tags</ListItem>
    </Paper>
  )
}

export default Navbar
