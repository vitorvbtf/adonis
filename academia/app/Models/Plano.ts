import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Aluno from './Aluno'

export default class Plano extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public alunoId: number

  @column()
  public preco: number

  @column()
  public duracao_meses: number

  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Aluno)
  public Aluno: BelongsTo<typeof Aluno>
}
