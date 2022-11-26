import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Conta extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipo: string

  @column()
  public banco: number

  @column()
  public agencia: string

  @column()
  public saldo: number

  @column()
  public dataCriacao: Date

  @column()
  public clienteId: Number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
