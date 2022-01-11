import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'

//Importação do tema
import theme from './Theme'

//Importações de componentes
import Home from './Pages/Home'
import Login from './Pages/Signin'
import GuestRoute from './routes/GuestRoute'

import './mock'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <GuestRoute exact path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
