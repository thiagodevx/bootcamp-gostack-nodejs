import { Router } from 'express'
import appointmentsRouter from '../appointments/appointment.routes'
import usersRouter from '../users/user.routes'

const routes = Router()
routes.use('/appointments', appointmentsRouter)
routes.use('/users', usersRouter)

export default routes
