import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SerieIdioma from 'App/Models/SerieIdioma'

export default class extends BaseSeeder {
  public async run () {
    await SerieIdioma.createMany([
      {
        serieId:1,
        idiomaId:1
      },
      {
        serieId:2,
        idiomaId:2
      },
      {
        serieId:3,
        idiomaId:3
      },
    ])
  }
}
