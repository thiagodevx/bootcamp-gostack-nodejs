import { Router } from 'express'
import UsersService from './users.service'
import User from './user.model'
import ensureAuthenticated from '../security/ensureAuthenticated.route'
import multer from 'multer'
import multerConfiguration from '../config/multerConfiguration'

const upload = multer(multerConfiguration)

const usersRouter = Router()
const service = new UsersService()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body
  const user: User = { name, email, password }
  const savedUser = await service.create(user)
  delete savedUser.password
  response.json(savedUser)
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
  const file = request.file
  const userId = request.user.id
  const savedUser = await service.updateUserAvatar(userId, file.filename)
  delete savedUser.password
  response.json(savedUser)
})

export default usersRouter
