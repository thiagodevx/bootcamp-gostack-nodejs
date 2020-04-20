import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import { TableOptions } from 'typeorm/schema-builder/options/TableOptions'

const tableInfo: TableOptions = {
  name: 'users',
  columns: [
    {
      name: 'id',
      type: 'varchar',
      isPrimary: true,
      generationStrategy: 'uuid',
      default: 'uuid_generate_v4()'
    },
    {
      name: 'name',
      type: 'varchar',
      isNullable: false
    },
    {
      name: 'email',
      type: 'varchar',
      isUnique: true,
      isNullable: false
    },
    {
      name: 'created_at',
      type: 'timestamp',
      default: 'now()'
    },
    {
      name: 'updated_at',
      type: 'timestamp',
      default: 'now()'
    }
  ]
}

export default class CreateUsers1587347417781 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table(tableInfo))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(tableInfo.name)
  }
}
