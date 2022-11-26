import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Imovel from './Imovel'

export default class Endereco extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cep: string

  @column()
  public rua: string

  @column()
  public cidade: string

  @column()
  public bairro: string

  @column()
  public numero: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Imovel)
  public Imovels: HasMany<typeof Imovel>
}
