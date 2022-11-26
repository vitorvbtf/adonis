import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UsuarioFilme from 'App/Models/UsuarioFilme'

export default class extends BaseSeeder {
  public async run () {
    await UsuarioFilme.createMany([
      {
        filmeId:1,
        usuarioId:1
      },
      {
        filmeId:2,
        usuarioId:2
      },
      {
        filmeId:3,
        usuarioId:3
      },
    ])
  }
}
