import Appointment from './appointment.model'
import { EntityRepository, Repository } from 'typeorm'
import { isEqual } from 'date-fns'

@EntityRepository(Appointment)
export default class AppointmentsRepository extends Repository<Appointment> {
  private appointments: Appointment[] = []

  public async findByDate(date: Date): Promise<Boolean> {
    const appointment = await this.findOne({
      where: { date }
    })
    return !!appointment
  }
}
