import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Contrato from './Contrato'

export default class Finalidade extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public locacao: string

  @column()
  public venda: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Contrato)
  public Contratoes: HasMany<typeof Contrato>
}
