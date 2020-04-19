import { Router } from 'express'
import AppointmentsService from './appointments.service'

const appointmentsRouter = Router()
const service = new AppointmentsService()

appointmentsRouter.get('/', (request, response) => {
  response.json(service.listAppointments())
})

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body
    const savedAppointment = service.createAppointment(provider, date)
    response.json(savedAppointment)
  } catch (e) {
    response.status(400).json({ message: e.message })
  }
})

export default appointmentsRouter
