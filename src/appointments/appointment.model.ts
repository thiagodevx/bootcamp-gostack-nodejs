export default class Appointment {
  id?: string
  constructor(public provider: string, public date: Date) {}
}
