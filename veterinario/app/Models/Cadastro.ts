import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'
import Cliente from './Cliente'
import Vacinacao from './Vacinacao'

export default class Cadastro extends BaseModel {
  
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public raca: string

  @column()
  public idade: string

  @column()
  public tamanho: string

  @column()
  public clienteId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Atendimento)
  public Atendimentos: HasMany<typeof Atendimento>

  @belongsTo(() => Cliente)
  public Cliente: BelongsTo<typeof Cliente>

  @hasMany(() => Vacinacao)
  public Vacianacaos: HasMany<typeof Vacinacao>
}
