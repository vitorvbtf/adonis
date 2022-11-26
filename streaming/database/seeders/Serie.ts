import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Serie from 'App/Models/Serie'

export default class extends BaseSeeder {
  public async run () {
    await Serie.createMany([
      {
        nome:'game of thrones',
        duracao:'5 temporadas',
        classificacao:'+18 anos',
        ano:2020,
        generoId:1
      },
      {
        nome:'breaking bad',
        duracao:'6 temporadas',
        classificacao:'+18 anos',
        ano:2020,
        generoId:2
      },
      {
        nome:'1899',
        duracao:'3 temporadas',
        classificacao:'+12 Anos',
        ano:2021,
        generoId:3
      }
    ])
  }
}
