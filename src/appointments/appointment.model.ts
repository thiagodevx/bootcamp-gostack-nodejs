import { uuid } from 'uuidv4'

export default class Appointment {
  id: string
  constructor(public provider: string, public date: Date) {
    this.id = uuid()
  }
}
