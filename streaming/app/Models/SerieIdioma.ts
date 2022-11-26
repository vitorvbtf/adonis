import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class SerieIdioma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public serieId: number

  @column()
  public idiomaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
