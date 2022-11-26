import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Filme from './Filme'
import Serie from './Serie'

export default class Genero extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public drama: string

  @column()
  public comedia: string

  @column()
  public romance: string

  @column()
  public terror: string

  @column()
  public suspense: string

  @column()
  public acao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Filme)
  public filmes: HasMany<typeof Filme>

  @hasMany(()=> Serie)
  public series: HasMany<typeof Serie>
}
