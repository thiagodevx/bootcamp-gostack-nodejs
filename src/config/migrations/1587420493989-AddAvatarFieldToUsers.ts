import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions'

const tableName = 'users'
const newColumnOptions: TableColumnOptions = {
  name: 'avatar',
  type: 'varchar',
  isNullable: true
}

const newColumn: TableColumn = new TableColumn(newColumnOptions)

export default class AddAvatarFieldToUsers1587420493989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn(tableName, newColumn)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn(tableName, newColumn)
  }
}
