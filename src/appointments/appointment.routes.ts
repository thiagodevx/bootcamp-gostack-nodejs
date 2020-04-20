import { Router } from 'express'
import AppointmentsService from './appointments.service'
import ensureAuthenticated from '../security/ensureAuthenticated.route'

const appointmentsRouter = Router()
appointmentsRouter.use(ensureAuthenticated)
const service = new AppointmentsService()

appointmentsRouter.get('/', async (request, response) => {
  const appointments = await service.listAppointments()
  response.json(appointments)
})

appointmentsRouter.post('/', async (request, response) => {
  const { providerId, date } = request.body
  const savedAppointment = await service.createAppointment(providerId, date)
  response.json(savedAppointment)
})

export default appointmentsRouter
