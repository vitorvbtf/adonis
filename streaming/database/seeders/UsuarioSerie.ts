import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UsuarioSerie from 'App/Models/UsuarioSerie'

export default class extends BaseSeeder {
  public async run () {
    await UsuarioSerie.createMany([
      {
        usuarioId:1,
        serieId:1
      },
      {
        usuarioId:2,
        serieId:2
      },
      {
        usuarioId:3,
        serieId:3
      },
    ])
  }
}
