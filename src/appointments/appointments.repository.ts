import Appointment from './appointment.model'
import { uuid } from 'uuidv4'
import { isEqual } from 'date-fns'

export default class AppointmentsRepository {
  private appointments: Appointment[] = []

  public create(appointment: Appointment): Appointment {
    const savedAppointment = { id: uuid(), ...appointment }
    this.appointments.push(savedAppointment)
    return savedAppointment
  }
  public findAll(): Appointment[] {
    return [...this.appointments]
  }
  public findByDate(date: Date): Appointment | undefined {
    return this.appointments.find(appointment =>
      isEqual(appointment.date, date)
    )
  }
}
