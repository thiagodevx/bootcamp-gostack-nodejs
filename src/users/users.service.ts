import { getRepository } from 'typeorm'
import User from './user.model'
import fs from 'fs'
import path from 'path'
import { hash } from 'bcryptjs'
import multerConfiguration from '../config/multerConfiguration'
import AppError from '../shared/AppError.model'

export default class UsersService {
  public create = async (user: User) => {
    const userRepository = getRepository(User)
    this.treatUserPassword(user)
    const foundUserWithSameEmail = await userRepository.findOne({ where: { email: user.email } })
    if (foundUserWithSameEmail) throw new AppError('There is already an user with that same email')
    return await userRepository.save(user)
  }
  private treatUserPassword = async (user: User) => {
    if (user.password) {
      const newPassword = await hash(user.password, 8)
      user.password = newPassword
    }
  }

  public updateUserAvatar = async (userId: string, filename: string): Promise<User> => {
    const repository = getRepository(User)
    const user = await repository.findOne({ where: { id: userId } })
    if (!user) throw new AppError('User not found, try to log back into the application', 401)
    if (user.avatar) this.deleteOldAvatarImage(user.avatar)
    user.avatar = filename
    return await repository.save(user)
  }

  private deleteOldAvatarImage = async (avatar: string) => {
    const folder = multerConfiguration.avatarFolter
    const file = path.join(folder, avatar)
    const fileExists = await fs.promises.stat(file)
    if (fileExists) await fs.promises.unlink(file)
  }
}
