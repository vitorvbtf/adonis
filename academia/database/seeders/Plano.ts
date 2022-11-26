import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Plano from 'App/Models/Plano'

export default class extends BaseSeeder {
  public async run () {
    await Plano.createMany([
      {
        preco:100, duracao_meses:3, alunoId:1
      },
      {
        preco:130, duracao_meses:2, alunoId:2
      },
      {
        preco:160, duracao_meses:1, alunoId:3
      },
      
    ])
  }
}
