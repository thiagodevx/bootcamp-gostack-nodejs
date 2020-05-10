import React from 'react'
import AuthContext from './AuthContext'
import AuthContextInterface from './AuthContextInterface'

const initialAuthState: AuthContextInterface = {
  user: {
    name: ''
  }
}
interface AuthProps {
  children: JSX.Element
}
export default (props: AuthProps) => (
  <AuthContext.Provider value={initialAuthState}>{props.children}</AuthContext.Provider>
)
