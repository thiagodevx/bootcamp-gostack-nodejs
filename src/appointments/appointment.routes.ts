import { Router } from 'express'
import { startOfHour, parseISO, isEqual } from 'date-fns'
import Appointment from './appointment.model'
import AppointmentsRepository from './appointments.repository'

const appointmentsRouter = Router()
const repository = new AppointmentsRepository()

appointmentsRouter.get('/', (request, response) => {
  response.json(repository.findAll())
})

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body
  const formatedDate = formatDate(date)
  if (validateAppointmentDate(formatedDate)) {
    const appointment = new Appointment(provider, formatedDate)
    const savedAppointment = repository.create(appointment)
    response.json(savedAppointment)
  } else {
    response.status(400).json({ message: 'Invalid Schedule' })
  }
})

const formatDate = (dateAsText: string) => {
  return startOfHour(parseISO(dateAsText))
}

const validateAppointmentDate = (date: Date) => {
  const result = repository.findByDate(date)
  return !result
}

export default appointmentsRouter
