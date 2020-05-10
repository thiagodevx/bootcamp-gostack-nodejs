import React from 'react'
import AuthContext from './AuthContext'
import api from '../../config/api'

interface AuthProps {
  children: JSX.Element
}
export default (props: AuthProps) => {
  const signIn = (email: string, password: string) => {
    api.post('/session', { email, password }).then(response => console.log(response.data))
  }
  return <AuthContext.Provider value={{ name: '', signIn }}>{props.children}</AuthContext.Provider>
}
