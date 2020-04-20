import Authentication from './authentication.model'
import { getRepository } from 'typeorm'
import User from '../users/user.model'
import { compare } from 'bcryptjs'

export default class AuthenticationService {
  public authenticate = async (authentication: Authentication) => {
    const usersRepository = getRepository(User)
    const user = await usersRepository.findOne({ where: { email: authentication.email } })
    if (!user) throw Error('Incorrect email')
    if (!this.matchPassword(authentication.password, user.password)) throw Error('Incorrect password')
  }

  public matchPassword = async (password: string, cryptPassword: string) => {
    return await compare(password, cryptPassword)
  }
}
