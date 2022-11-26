import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Pagamento from 'App/Models/Pagamento'

export default class extends BaseSeeder {
  public async run () {
    await Pagamento.createMany([
      {
        pix:'sim',
        debito:'não',
        credito:'não'
      },
      {
        pix:'não',
        debito:'sim',
        credito:'não'
      },
      {
        pix:'sim',
        debito:'não',
        credito:'não'
      }
    ])
  }
}
