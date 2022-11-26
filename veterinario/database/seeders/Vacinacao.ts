import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Vacinacao from 'App/Models/Vacinacao'

export default class extends BaseSeeder {
  public async run () {
    await Vacinacao.createMany([
      {
        tipoVacina:'A', dataVacinacao: new Date(2022-12-12), doses:'3',
        veterinarioId:1 , cadastroID:1
      },
      {
        tipoVacina:'B', dataVacinacao:new Date(2022-12-13), doses:'3',
        veterinarioId: 2, cadastroID:2
      },
      {
        tipoVacina:'C', dataVacinacao:new Date(2022-12-14), doses:'3',
        veterinarioId: 3, cadastroID:3
      }
    ])
  }
}
