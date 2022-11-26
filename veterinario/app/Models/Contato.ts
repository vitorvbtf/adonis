import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Contato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public clienteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Cliente)
  public Cliente: BelongsTo<typeof Cliente>
}
