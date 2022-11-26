import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany} from '@ioc:Adonis/Lucid/Orm'
import Cadastro from './Cadastro'
import Veterinario from './Veterinario'

export default class Atendimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public especialidade: string

  @column()
  public medicamento: string

  @column()
  public cadastroId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Veterinario)
  public Veterinarios: 
  ManyToMany<typeof Veterinario>

  @belongsTo(() => Cadastro)
  public Cadastro: BelongsTo<typeof Cadastro>

}
