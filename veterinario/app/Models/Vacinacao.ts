import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Veterinario from './Veterinario'
import Cadastro from './Cadastro'

export default class Vacinacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipoVacina: string

  @column()
  public dataVacinacao: Date

  @column()
  public doses: string

  @column()
  public veterinarioId: number

  @column()
  public cadastroID: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Veterinario)
  public Veterinario: BelongsTo<typeof Veterinario>

  @belongsTo(() => Cadastro)
  public Cadastro: BelongsTo<typeof Cadastro>
}
