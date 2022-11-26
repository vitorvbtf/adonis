import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Filme from './Filme'
import Serie from './Serie'

export default class Idioma extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public portugues: string

  @column()
  public ingles: string

  @column()
  public espanhol: string

  @column()
  public frances: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=> Filme,{pivotTable:'filme_idiomas'})
  public filmes: ManyToMany<typeof Filme>

  @manyToMany(()=> Serie,{pivotTable:'serie_idiomas'})
  public series: ManyToMany<typeof Serie>
}
