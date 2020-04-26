import Authentication from './authentication.model'
import { getRepository } from 'typeorm'
import User from '../users/user.model'
import { sign, verify } from 'jsonwebtoken'
import { compare } from 'bcryptjs'
import Token from './token.model'
import AppError from '../shared/AppError.model'

export const secretkey = 'gostacksecretkey'

export default class AuthenticationService {
  public authenticate = async (authentication: Authentication): Promise<String> => {
    const usersRepository = getRepository(User)
    const user = await usersRepository.findOne({ where: { email: authentication.email } })
    if (!user) throw new AppError('Incorrect email', 401)
    const passwordMatches = await this.matchPassword(authentication.password, user.password)
    if (!passwordMatches) throw new AppError('Incorrect password', 401)

    const token = sign({ name: user.name }, secretkey, { subject: user.id, expiresIn: '7d' })
    return token
  }

  private matchPassword = async (password: string, cryptPassword: string) => {
    return await compare(password, cryptPassword)
  }

  public checkToken(authHeader: string | undefined) {
    if (!authHeader) throw new AppError('JWT Token is Missing')
    const [type, token] = authHeader.split(' ')
    if (type !== 'Bearer') throw new AppError('Are you use the JWT is following the format: Bearer -> Token?')
    const decoded = this.decodeToken(token)
    return decoded.sub
  }

  private decodeToken(token: string): Token {
    try {
      return verify(token, secretkey) as Token
    } catch {
      throw Error('Invalid token, try to log into the application again!')
    }
  }
}
