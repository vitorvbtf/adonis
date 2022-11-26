import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Finalidade from './Finalidade'
import Cliente from './Cliente'
import Imovel from './Imovel'
import Corretor from './Corretor'

export default class Contrato extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public preco: string

  @column()
  public duracaoMeses: string

  @column()
  public parcelas: string

  @column()
  public dataInicio: Date

  @column()
  public dataFim: Date

  @column()
  public finalidadeId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo (() => Finalidade)
  public Finalidade: BelongsTo<typeof Finalidade>

  @hasMany(() => Cliente)
  public Clientes: HasMany<typeof Cliente>

  @hasMany(() => Imovel)
  public Imovels: HasMany<typeof Imovel>

  @hasMany(() => Corretor)
  public Corretors: HasMany<typeof Corretor>
}
