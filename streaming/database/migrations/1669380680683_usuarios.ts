import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'usuarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome',100).notNullable()
      table.string('cpf',14).notNullable()
      table.string('email',100).notNullable()
      table.string('telefone',20).notNullable()
      table.integer('pagamento_id').unsigned().references('id').inTable('pagamentos').notNullable()

      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
