import React from 'react'

import AuthContext from './authentication/context/AuthContext'
import SignIn from './authentication/login/SignIn'

const initialAuthState = {
  user: {
    name: ''
  }
}
export default () => (
  <AuthContext.Provider value={initialAuthState}>
    <SignIn />
  </AuthContext.Provider>
)
