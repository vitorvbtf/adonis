import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Finalidade from 'App/Models/Finalidade'

export default class extends BaseSeeder {
  public async run () {
    await Finalidade.createMany([
      {
      locacao:'sim',
      venda:'não',
      },
      {
        locacao:'sim',
        venda:'não',
      },
      {
        locacao:'não',
        venda:'sim',
      },
    ])
  }
}
