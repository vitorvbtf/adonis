import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Plano from 'App/Models/Plano'

export default class extends BaseSeeder {
  public async run () {
    await Plano.createMany([
      {
        duracao:'2 anos',
        preco:285.25
      },
      {
        duracao:'1 ano',
        preco:185.25
      },
      {
        duracao:'3 anos',
        preco:385.25
      }
    ])
  }
}
