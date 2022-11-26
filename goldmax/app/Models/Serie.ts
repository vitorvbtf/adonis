import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Idioma from './Idioma'
import Usuario from './Usuario'
import Genero from './Genero'

export default class Serie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public duracao: string

  @column()
  public classificacao: string

  @column()
  public ano: number

  @column()
  public generoId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Genero)
  public genero: BelongsTo<typeof Genero>

  @manyToMany(()=> Idioma,{pivotTable:'serie_idiomas'})
  public idiomas: ManyToMany<typeof Idioma>

  @manyToMany(()=> Usuario,{pivotTable:'usuario_series'})
  public usuarios: ManyToMany<typeof Usuario>
}
