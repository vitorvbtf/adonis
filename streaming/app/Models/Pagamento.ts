import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pagamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public pix: string

  @column()
  public debito: string

  @column()
  public credito: string

  @column()
  public planoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
