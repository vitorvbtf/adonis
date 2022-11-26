import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import VeterinarioAtendimento from 'App/Models/VeterinarioAtendimento'

export default class extends BaseSeeder {
  public async run () {
    await VeterinarioAtendimento.createMany([
      {
        veterinarioId:1, atendimentoId:1
      },
      {
        veterinarioId:2, atendimentoId:2
      },
      {
        veterinarioId:3, atendimentoId:3
      },
    ])
  }
}
