import { Router } from 'express'
import UsersService from './users.service'
import User from './user.model'

const usersRouter = Router()
const service = new UsersService()

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body
  const user: User = { name, email, password }
  const savedUser = service.create(user)
  response.json(savedUser)
})

export default usersRouter
