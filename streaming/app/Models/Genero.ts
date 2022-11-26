import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public drama: string

  @column()
  public comedia: string

  @column()
  public romance: string

  @column()
  public terror: string

  @column()
  public suspense: string

  @column()
  public acao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
