import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Idioma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public portugues: string

  @column()
  public ingles: string

  @column()
  public espanhol: string

  @column()
  public frances: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
