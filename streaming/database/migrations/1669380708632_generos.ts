import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'generos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('drama',3).notNullable()
      table.string('comedia',3).notNullable()
      table.string('romance',3).notNullable()
      table.string('terror',3).notNullable()
      table.string('suspense',3).notNullable()
      table.string('acao',3).notNullable()
      
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
