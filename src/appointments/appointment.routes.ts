import { Router } from 'express'
import { uuid } from 'uuidv4'
import { startOfHour, parseISO, isEqual } from 'date-fns'

const appointmentsRouter = Router()
const appointments: Appointment[] = []

appointmentsRouter.get('/', (request, response) => {
  response.json({ teste: 'funcionando' })
})

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body
  const formatedDate = formatDate(date)
  if (validateAppointmentDate(formatedDate)) {
    const appointment: Appointment = {
      id: uuid(),
      provider,
      date: formatedDate
    }
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
