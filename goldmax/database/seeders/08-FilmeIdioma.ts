import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FilmeIdioma from 'App/Models/FilmeIdioma'

export default class extends BaseSeeder {
  public async run () {
    await FilmeIdioma.createMany([
      {
        filmeId:1,
        idiomaId:1
      },
      {
        filmeId:2,
        idiomaId:2
      },
      {
        filmeId:3,
        idiomaId:3
      }
    ])
  }
}
