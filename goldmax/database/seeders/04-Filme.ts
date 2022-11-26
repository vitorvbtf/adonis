import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Filme from 'App/Models/Filme'

export default class extends BaseSeeder {
  public async run () {
    await Filme.createMany([
      {
        nome:'o irlandês',
        duracao:'2 horas',
        classificacao:'+18 anos',
        ano:2022,
        generoId:1
      },
      {
        nome:'Um limite entre nós',
        duracao:'1 hora e 50 minutos',
        classificacao:'+14 anos',
        ano:2020,
        generoId:2
      },
      {
        nome:'O milagre',
        duracao:'2 horas',
        classificacao:'+14 anos',
        ano:2021,
        generoId:3
      },
    ])
  }
}
