import { Router } from 'express'
import appointmentsRouter from '../appointments/appointment.routes'
import usersRouter from '../users/user.routes'
import sessionRouter from '../security/session.routes'

const routes = Router()
routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)
routes.use('/session', sessionRouter)
export default routes
