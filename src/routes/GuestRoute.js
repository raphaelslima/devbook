import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Pages/Home/index'

function GuestRoute({ element: component, ...rest }) {
  const isAuthentication = true

  return <Route {...rest} element={isAuthentication ? <Home /> : component} />
}

export default GuestRoute
