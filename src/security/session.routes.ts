import { Router } from 'express'
import Authentication from './authentication.model'
import AuthenticationService from './authentication.service'

const sessionRouter = Router()
const service = new AuthenticationService()

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body
  const authentication = new Authentication(email, password)
  const token = await service.authenticate(authentication)
  response.json(token)
})

export default sessionRouter
