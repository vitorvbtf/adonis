import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'imovels'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tamanho', 100).notNullable()
      table.string('casa', 3).notNullable()
      table.string('apartamento', 3).notNullable()
      table.string('cobertura', 3).notNullable()
      table.string('garagem', 3).notNullable()
      table.integer('endereco_id').unsigned().references('id').inTable('enderecos').notNullable()
      table.integer('contrato_id').unsigned().references('id').inTable('contratoes').notNullable()


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
