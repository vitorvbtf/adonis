import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Genero from 'App/Models/Genero'

export default class extends BaseSeeder {
  public async run () {
    await Genero.createMany([
      {
        drama:'sim',
        comedia:'não',
        romance:'não',
        terror:'não',
        suspense:'não',
        acao:'sim'
      },
      {
        drama:'sim',
        comedia:'não',
        romance:'não',
        terror:'não',
        suspense:'não',
        acao:'não'
      },
      {
        drama:'sim',
        comedia:'não',
        romance:'não',
        terror:'não',
        suspense:'não',
        acao:'não'
      },
    ])
  }
}
