import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cadastro from './Cadastro'
import Contato from './Contato'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public estado: string

  @column()
  public cidade: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Cadastro)
  public cadastros: HasMany<typeof Cadastro>

  @hasMany(() => Contato)
  public Contatos: HasMany<typeof Contato>
}
