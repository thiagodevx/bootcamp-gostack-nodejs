import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('appointments')
export default class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column()
  provider: string

  @Column('timestamp with time zone')
  date: Date

  constructor(provider: string, date: Date) {
    this.provider = provider
    this.date = date
  }
}
