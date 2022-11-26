import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Genero from './Genero'
import Idioma from './Idioma'
import Usuario from './Usuario'

export default class Filme extends BaseModel {
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

  @manyToMany(()=> Idioma, {pivotTable: 'filme_idiomas'})
  public idiomas: ManyToMany<typeof Idioma>

  @manyToMany(()=> Usuario, {pivotTable: 'usuario_filmes'})
  public usuarios: ManyToMany<typeof Usuario>
}
