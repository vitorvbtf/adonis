import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Academia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public aluno: string
  
  @column()
  public professores: string

  @column()
  public matricula: number

  @column()
  public inicio: Date



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
