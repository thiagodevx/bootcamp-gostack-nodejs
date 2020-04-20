import { Router } from 'express'
import UsersService from './users.service'

const usersRouter = Router()
const service = new UsersService()

usersRouter.post('/', async (request, response) => {
  response.json({})
})

export default usersRouter
