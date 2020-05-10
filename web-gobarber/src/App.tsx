import React from 'react'

import SignIn from './authentication/login/SignIn'
import AuthContextProvider from './authentication/context/AuthContextProvider'

export default () => (
  <AuthContextProvider>
    <SignIn />
  </AuthContextProvider>
)
