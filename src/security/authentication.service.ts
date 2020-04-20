import Authentication from './authentication.model'
import { getRepository } from 'typeorm'
import User from '../users/user.model'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

export default class AuthenticationService {
  public authenticate = async (authentication: Authentication): Promise<String> => {
    const usersRepository = getRepository(User)
    const user = await usersRepository.findOne({ where: { email: authentication.email } })
    if (!user) throw Error('Incorrect email')
    const passwordMatches = await this.matchPassword(authentication.password, user.password)
    if (!passwordMatches) throw Error('Incorrect password')

    const token = sign({ name: user.name }, 'gostacksecretkey', { subject: user.id, expiresIn: '7d' })
    return token
  }

  public matchPassword = async (password: string, cryptPassword: string) => {
    return await compare(password, cryptPassword)
  }
}
