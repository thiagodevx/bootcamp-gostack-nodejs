import AppointmentsRepository from './appointments.repository'
import { startOfHour, parseISO } from 'date-fns'
import Appointment from './appointment.model'

export default class AppointmentsService {
  private repository = new AppointmentsRepository()

  public createAppointment = (provider: string, date: string): Appointment => {
    const formatedDate = this.formatDate(date)
    if (this.validateAppointmentDate(formatedDate)) {
      const appointment = new Appointment(provider, formatedDate)
      const savedAppointment = this.repository.create(appointment)
      return savedAppointment
    } else {
      throw Error('Invalid appointment date')
    }
  }

  public listAppointments = (): Appointment[] => {
    return this.repository.findAll()
  }

  private formatDate = (dateAsText: string): Date => {
    return startOfHour(parseISO(dateAsText))
  }

  private validateAppointmentDate = (date: Date): Boolean => {
    const found = this.repository.findByDate(date)
    return !found
  }
}
