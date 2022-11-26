import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Turma from './Turma'

export default class Aula extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public data: Date

  @column()
  public conteudo: string

  @column()
  public turmaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Turma) 
  public Turma: BelongsTo<typeof Turma>
}