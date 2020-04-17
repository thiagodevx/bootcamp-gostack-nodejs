import { Router } from 'express'
import { startOfHour, parseISO, isEqual } from 'date-fns'
import Appointment from './appointment.model'

const appointmentsRouter = Router()
const appointments: Appointment[] = []

appointmentsRouter.get('/', (request, response) => {
  response.json(appointments)
})

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body
  const formatedDate = formatDate(date)
  if (validateAppointmentDate(formatedDate)) {
    const appointment = new Appointment(provider, formatedDate)
    appointments.push(appointment)
    response.json(appointment)
  } else {
    response.status(400).json({ message: 'Invalid Schedule' })
  }
})

const formatDate = (dateAsText: string) => {
  return startOfHour(parseISO(dateAsText))
}
const validateAppointmentDate = (date: Date) => {
  const result = appointments.find(savedAppointment =>
    isEqual(savedAppointment.date, date)
  )
  return !result
}
export default appointmentsRouter
