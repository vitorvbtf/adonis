import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Pagamento from './Pagamento'

export default class Plano extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public duracao: string

  @column()
  public preco: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Pagamento)
  public pagamentos: HasMany<typeof Pagamento>
}
