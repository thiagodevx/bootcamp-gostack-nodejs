import Authentication from './authentication.model'
import { getRepository } from 'typeorm'
import User from '../users/user.model'
import { sign, verify } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

export const secretkey = 'gostacksecretkey'

export default class AuthenticationService {
  public authenticate = async (authentication: Authentication): Promise<String> => {
    const usersRepository = getRepository(User)
    const user = await usersRepository.findOne({ where: { email: authentication.email } })
    if (!user) throw Error('Incorrect email')
    const passwordMatches = await this.matchPassword(authentication.password, user.password)
    if (!passwordMatches) throw Error('Incorrect password')

    const token = sign({ name: user.name }, secretkey, { subject: user.id, expiresIn: '7d' })
    return token
  }

  private matchPassword = async (password: string, cryptPassword: string) => {
    return await compare(password, cryptPassword)
  }

  public checkToken(authHeader: string | undefined) {
    if (!authHeader) throw Error('JWT Token is Missing')
    const [type, token] = authHeader.split(' ')
    if (type !== 'Bearer') throw Error('Are you use the JWT is following the format: Bearer -> Token?')
    const decoded = this.decodeToken(token)
  }

  private decodeToken(token: string) {
    try {
      return verify(token, secretkey)
    } catch {
      throw Error('Invalid token, try to log into the application again!')
    }
  }
}
