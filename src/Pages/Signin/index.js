import React from 'react'

// Importação makeStyles
import { makeStyles } from '@material-ui/core/styles'

// Importaçao material ui componentes.
import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Link } from '@material-ui/core'

// Importação axios
import axios from '../../utils/axios'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100vh'
  },

  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(1),
    textAlign: 'center'
  },

  avatar: {
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(1)
  },

  button: {
    marginTop: theme.spacing(1)
  },

  left: {
    backgroundColor: 'red',
    flexBasis: '58%',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  right: {
    backgroundColor: 'blue',
    flexBasis: '42%'
  },

  boxForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(8),
    alignItems: 'center',
    width: '100%'
  },

  form: {
    margin: theme.spacing(0, 4)
  },

  links: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between'
  }
}))

function SingIn() {
  const classes = useStyles()

  async function handleSignIn(e) {
    e.preventDefault()

    try {
      await axios.post('/api/home/login', {
        email: 'raphaeldesousalm@gmail.com',
        password: 'admin'
      })
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Grid className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 20, lineHeight: '45px' }}>
          <strong>
            Simplificando a forma de conectar desenvolvedores de softwares !
          </strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: 'rgb(255,255,255,0.7)',
            lineHeight: '30px',
            marginTop: 30,
            fontSize: 15
          }}
        >
          Compartilhe seu conhecimento com toda a nossa rede de desenvoledores.
        </Typography>
      </Grid>
      <Grid container md={5}>
        <Box className={classes.boxForm}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form noValidate className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
              onClick={e => handleSignIn(e)}
            >
              Entrar
            </Button>

            <Grid container className={classes.links}>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link> Não tem uma conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SingIn
