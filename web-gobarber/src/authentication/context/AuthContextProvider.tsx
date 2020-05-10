import React from 'react'
import AuthContext from './AuthContext'

interface AuthProps {
  children: JSX.Element
}
export default (props: AuthProps) => {
  const signIn = () => console.log('sign in')
  return <AuthContext.Provider value={{ name: '', signIn }}>{props.children}</AuthContext.Provider>
}
