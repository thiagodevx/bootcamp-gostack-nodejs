import { getRepository } from 'typeorm'
import User from './user.model'
import { hash } from 'bcryptjs'
export default class UsersService {
  public create = async (user: User) => {
    const userRepository = getRepository(User)
    this.treatUserPassword(user)
    const foundUserWithSameEmail = await userRepository.findOne({ where: { email: user.email } })
    if (foundUserWithSameEmail) throw Error('There is already an user with that same email')
    return await userRepository.save(user)
  }
  private treatUserPassword = async (user: User) => {
    if (user.password) {
      const newPassword = await hash(user.password, 8)
      user.password = newPassword
    }
  }
}
