import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'vacinacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tipo_vacina', 45).notNullable()
      table.timestamp('data_vacinacao').notNullable()
      table.string('doses', 2).notNullable()
      table.integer('veterinario_id').unsigned().references('id').inTable('veterinarios').notNullable()
      table.integer('cadastro_id').unsigned().references('id').inTable('cadastros').notNullable()

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
