import AppointmentsRepository from './appointments.repository'
import { startOfHour, parseISO } from 'date-fns'
import Appointment from './appointment.model'

export default class AppointmentsService {
  private repository = new AppointmentsRepository()

  public createAppointment = (provider: string, date: string) => {
    const formatedDate = this.formatDate(date)
    if (this.validateAppointmentDate(formatedDate)) {
      const appointment = new Appointment(provider, formatedDate)
      const savedAppointment = this.repository.create(appointment)
      return savedAppointment
    } else {
      throw new Error('invalid appointment date')
    }
  }

  public listAppointments = () => {
    return this.repository.findAll()
  }

  private formatDate = (dateAsText: string) => {
    return startOfHour(parseISO(dateAsText))
  }

  private validateAppointmentDate = (date: Date) => {
    const result = this.repository.findByDate(date)
    return !result
  }
}
