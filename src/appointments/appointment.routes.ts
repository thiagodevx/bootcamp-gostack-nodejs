import { Router } from 'express'
import AppointmentsService from './appointments.service'

const appointmentsRouter = Router()
const service = new AppointmentsService()

appointmentsRouter.get('/', async (request, response) => {
  const appointments = await service.listAppointments()
  response.json(appointments)
})

appointmentsRouter.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body
    const savedAppointment = await service.createAppointment(provider, date)
    response.json(savedAppointment)
  } catch (e) {
    response.status(400).json({ message: e.message })
  }
})

export default appointmentsRouter
