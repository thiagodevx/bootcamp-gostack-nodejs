import AppointmentsRepository from './appointments.repository'
import { startOfHour, parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import Appointment from './appointment.model'

export default class AppointmentsService {
  private repository: AppointmentsRepository = getCustomRepository(AppointmentsRepository)

  public createAppointment = async (provider: string, date: string): Promise<Appointment> => {
    const formatedDate = this.formatDate(date)
    const validated = await this.itWasAlreadyMarked(formatedDate)

    if (validated) {
      const appointment = new Appointment(provider, formatedDate)
      const savedAppointment = this.repository.create(appointment)
      return savedAppointment
    } else {
      throw Error('Invalid appointment date')
    }
  }

  public listAppointments = (): Appointment[] => {
    return []
  }

  private formatDate = (dateAsText: string): Date => {
    return startOfHour(parseISO(dateAsText))
  }

  private itWasAlreadyMarked = (date: Date): Promise<Boolean> => {
    return this.repository.findByDate(date)
  }
}
