import AppointmentsRepository from './appointments.repository'
import { startOfHour, parseISO } from 'date-fns'
import { getCustomRepository } from 'typeorm'
import Appointment from './appointment.model'

export default class AppointmentsService {
  public createAppointment = async (provider: string, date: string): Promise<Appointment> => {
    const repository: AppointmentsRepository = getCustomRepository(AppointmentsRepository)
    const formatedDate = this.formatDate(date)
    const validated = await this.itWasAlreadyMarked(formatedDate)

    if (validated) {
      const appointment = repository.create({ provider, date: formatedDate })
      const savedAppointment = repository.save(appointment)
      return savedAppointment
    } else {
      throw Error('Invalid appointment date')
    }
  }

  public listAppointments = (): Promise<Appointment[]> => {
    const repository: AppointmentsRepository = getCustomRepository(AppointmentsRepository)
    return repository.find()
  }

  private formatDate = (dateAsText: string): Date => {
    return startOfHour(parseISO(dateAsText))
  }

  private itWasAlreadyMarked = (date: Date): Promise<Boolean> => {
    const repository: AppointmentsRepository = getCustomRepository(AppointmentsRepository)
    return repository.findByDate(date)
  }
}
