import { Router } from 'express'
import UsersService from './users.service'
import User from './user.model'

const usersRouter = Router()
const service = new UsersService()

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body
    const user: User = { name, email, password }
    const savedUser = await service.create(user)
    delete savedUser.password
    response.json(savedUser)
  } catch (e) {
    response.status(400).json({ message: e.message })
  }
})

export default usersRouter
