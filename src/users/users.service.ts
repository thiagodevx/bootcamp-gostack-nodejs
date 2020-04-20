import { getRepository } from 'typeorm'
import User from './user.model'

export default class UsersService {
  create = async (user: User) => {
    const userRepository = getRepository(User)
    return await userRepository.save(user)
  }
}
