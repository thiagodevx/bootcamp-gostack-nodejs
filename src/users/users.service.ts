import { getRepository } from 'typeorm'
import User from './user.model'

export default class UsersService {
  public create = async (user: User) => {
    const userRepository = getRepository(User)
    const foundUserWithSameEmail = await userRepository.findOne({ where: { email: user.email } })
    if (foundUserWithSameEmail) throw Error('There is already an user with that same email')
    return await userRepository.save(user)
  }
}
