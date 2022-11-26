import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Pagamento from './Pagamento'
import Filme from './Filme'
import Serie from './Serie'

export default class Usuario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public pagamentoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Pagamento)
  public pagamento: BelongsTo<typeof Pagamento>
  
  @manyToMany(()=> Filme,{pivotTable:'usuario_filmes'})
  public filmes: ManyToMany<typeof Filme>

  @manyToMany(()=> Serie,{pivotTable:'usuario_series'})
  public series: ManyToMany<typeof Serie>
}
