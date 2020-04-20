import { EntityRepository, Repository } from 'typeorm'
import User from './user.model'

@EntityRepository(User)
export default class AppointmentsRepository extends Repository<User> {}
