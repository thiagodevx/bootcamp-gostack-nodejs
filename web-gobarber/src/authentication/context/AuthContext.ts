import { createContext } from 'react'

interface AuthContext {
  user: {
    name: string
  }
}

export default createContext<AuthContext>({} as AuthContext)
