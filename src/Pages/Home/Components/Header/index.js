import React from 'react'

// Material Ui
import { Button } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { SvgIcon } from '@material-ui/core'
import { Bell } from 'react-feather'
import { Avatar } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  appBar: {
    position: 'fixed',
    boxShadow: 'none'
  },
  img: {
    maxHeight: 55
  },
  grow: {
    flexGrow: 1
  },
  userSection: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: 10
  },
  bell: {
    marginRight: 10
  }
})

function Header() {
  const classes = useStyles()

  return (
    <AppBar className={classes.appBar} color="inherit">
      <Toolbar>
        <img src="./images/logo.png" alt="Logo" className={classes.img} />
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            NOVO POST
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Raphael Lima" src="/" />
        </div>
        {/*
          <span>Devbook</span>
        <div>
          
          <span>Img 1</span>
          <span>Img 2</span>
        </div>
          */}
      </Toolbar>
    </AppBar>
  )
}

export default Header
