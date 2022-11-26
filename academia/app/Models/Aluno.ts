import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Plano from './Plano'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public statuId: number

  @column()
  public matricula: string

  @column()
  public cep: number

  @column()
  public telefone:number

  @column()
  public email: string
  

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Plano)
  public Planos: HasMany<typeof Plano>
}
