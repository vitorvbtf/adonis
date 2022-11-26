import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'alunos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('cpf').notNullable()
      table.string('nome', 100).notNullable()
      table.string('matricula', 20).notNullable
      table.integer('cep')
      table.string('telefone', 11)
      table.string('email', 100)
      table.integer('statu_id').unsigned().references('id').inTable('status').notNullable()
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
