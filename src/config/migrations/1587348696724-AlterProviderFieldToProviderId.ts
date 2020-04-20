import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm'
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions'
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions'

const tableName = 'appointments'
const newColumnOptions: TableColumnOptions = {
  name: 'provider_id',
  type: 'uuid',
  isNullable: true
}
const oldColumnOptions: TableColumnOptions = {
  name: 'provider',
  type: 'varchar'
}
const newColumnForeignKeyOptions: TableForeignKeyOptions = {
  columnNames: ['provider_id'],
  referencedColumnNames: ['id'],
  referencedTableName: 'users',
  onDelete: 'SET NULL',
  onUpdate: 'CASCADE',
  name: 'fk_provider_id'
}

const newColumn: TableColumn = new TableColumn(newColumnOptions)
const oldColumn: TableColumn = new TableColumn(oldColumnOptions)
const newForeignKey: TableForeignKey = new TableForeignKey(newColumnForeignKeyOptions)

export default class AlterProviderFieldToProviderId1587348696724 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn(tableName, oldColumn)
    await queryRunner.addColumn(tableName, newColumn)
    await queryRunner.createForeignKey(tableName, newForeignKey)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey(tableName, newForeignKey)
    await queryRunner.dropColumn(tableName, newColumn)
    await queryRunner.addColumn(tableName, oldColumn)
  }
}
