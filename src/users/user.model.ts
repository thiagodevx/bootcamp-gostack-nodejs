import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date

  @Column()
  avatar?: string

  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
  }
}

export default User
