import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'series'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome',100).notNullable()
      table.string('duracao',45).notNullable()
      table.string('classificacao',45)
      table.integer('ano').notNullable()
      table.integer('genero_id').unsigned().references('id').inTable('generos').notNullable()

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
