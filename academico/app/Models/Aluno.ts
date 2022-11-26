import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Aluno extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: number

  @column()
  public matricula: Number

  @column()
  public email: string

  @column()
  public telefone: Number

  @column()
  public cep: number

  @column()
  public logradouro: string

  @column()
  public complemento: string

  @column()
  public numero: Number
  
  @column()
  public bairro: Number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}