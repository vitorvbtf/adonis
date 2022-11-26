import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Endereco from './Endereco'
import Contrato from './Contrato'

export default class Imovel extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tamanho: string

  @column()
  public casa: string

  @column()
  public apartamento: string

  @column()
  public cobertura: string

  @column()
  public garagem: string

  @column()
  public enderecoId: number

  @column()
  public contratoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Endereco)
  public Endereco: BelongsTo<typeof Endereco>

  @belongsTo (() => Contrato)
  public Contrato: BelongsTo<typeof Contrato>
}
