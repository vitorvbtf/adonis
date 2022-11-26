import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma'

export default class Statu extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public situacao_status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Turma)
  public Turmas: HasMany<typeof Turma>
}
