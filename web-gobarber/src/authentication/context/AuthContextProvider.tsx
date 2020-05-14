import React, { useState } from 'react'
import AuthContext from './AuthContext'
import api from '../../config/api'
import AuthContextInterface from './AuthContextInterface'

interface AuthProps {
  children: JSX.Element
}

export default (props: AuthProps) => {
  const signIn = (email: string, password: string) => {
    api.post('/session', { email, password }).then(response => {
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    })
  }
  const [state] = useState<AuthContextInterface>(() => {
    const token = localStorage.getItem('token') || ''
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    return { signIn, token, user, name: 'Maria' }
  })
  return <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
}
