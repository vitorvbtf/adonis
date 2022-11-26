import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pagamento from 'App/Models/Pagamento'

export default class extends BaseSeeder {
  public async run () {
    await Pagamento.createMany([
      {
        pix:'sim',
        debito:'não',
        credito:'não',
        planoId:1
      },
      {
        pix:'não',
        debito:'sim',
        credito:'não',
        planoId:2
      },
      {
        pix:'sim',
        debito:'não',
        credito:'não',
        planoId:3
      }
    ])
  }
}
