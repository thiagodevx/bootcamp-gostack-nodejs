import Appointment from './appointment.model'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Appointment)
export default class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const appointment = await this.findOne({
      where: { date }
    })
    return appointment
  }
}
