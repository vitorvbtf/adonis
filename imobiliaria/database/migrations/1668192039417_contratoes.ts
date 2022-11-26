import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'contratoes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('preco', 45).notNullable()
      table.string('duracao_meses', 100)
      table.string('parcelas', 45)
      table.timestamp('data_inicio').notNullable()
      table.timestamp('data_fim')
      table.integer('finalidade_id').unsigned().references('id').inTable('finalidades').notNullable()

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
