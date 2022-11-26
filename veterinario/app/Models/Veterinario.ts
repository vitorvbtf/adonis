import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Vacinacao from './Vacinacao'
import Atendimento from './Atendimento'

export default class Veterinario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public especialidade: string

  @column()
  public sexo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Vacinacao)
  public Vacinacaos: HasMany<typeof Vacinacao>

  @manyToMany(() => Atendimento)
  public Atendimentos: ManyToMany<typeof Atendimento>
}
