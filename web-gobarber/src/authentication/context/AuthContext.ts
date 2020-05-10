import { createContext } from 'react'
import AuthContextInterface from './AuthContextInterface'

export default createContext<AuthContextInterface>({} as AuthContextInterface)
