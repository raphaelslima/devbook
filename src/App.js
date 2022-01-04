import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

//Importação do tema
import theme from './Theme'

//Importações de componentes
import Home from './Pages/Home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
