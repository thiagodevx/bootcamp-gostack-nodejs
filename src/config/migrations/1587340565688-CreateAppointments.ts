import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions'

const tableInfo: TableOptions = {
  name: 'appointments',
  columns: [
    {
      name: 'id',
      type: 'varchar',
      isPrimary: true,
      generationStrategy: 'uuid'
    },
    {
      name: 'provider',
      type: 'varchar',
      isNullable: false
    },
    {
      name: 'date',
      type: 'timestamp with time zone',
      isNullable: false
    }
  ]
}

class CreateAppointments1587340565688 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table(tableInfo))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('appointments')
  }
}

export default CreateAppointments1587340565688
