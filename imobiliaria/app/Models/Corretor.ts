import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Contrato from './Contrato'

export default class Corretor extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public contratoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Contrato)
  public Contrato: BelongsTo<typeof Contrato>

}
