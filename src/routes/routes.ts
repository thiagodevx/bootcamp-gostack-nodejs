import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) =>
  response.json({ message: 'Hello world' })
)

routes.post('/users', (request, response) => {
  const user = request.body
  return response.json(user)
})
export default routes
