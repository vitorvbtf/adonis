import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Professor from './Professor'
import Aluno from './Aluno'

export default class Turma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public professorId: number

  @column()
  public alunoId: number

  @column()
  public turno: string

  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Professor)
  public Professor: BelongsTo<typeof Professor>

  @belongsTo(() => Aluno)
  public Aluno: BelongsTo<typeof Aluno>

  

}
