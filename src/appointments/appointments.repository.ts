import Appointment from './appointment.model'
import { uuid } from 'uuidv4'
import { isEqual } from 'date-fns'

export default class AppointmentsRepository {
  private appointments: Appointment[] = []

  public create(appointment: Appointment) {
    const savedAppointment = { id: uuid(), ...appointment }
    this.appointments.push(savedAppointment)
    return savedAppointment
  }
  public findAll() {
    return [...this.appointments]
  }
  public findByDate(date: Date) {
    return this.appointments.find(appointment =>
      isEqual(appointment.date, date)
    )
  }
}
