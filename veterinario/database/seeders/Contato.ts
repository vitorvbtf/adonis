import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Contato from 'App/Models/Contato'

export default class extends BaseSeeder {
  public async run () {
    await Contato.createMany([
      {
        telefone:'(11) 68530-7341', email:'elisia6237@uorak.com', clienteId: 1
      },
      {
        telefone:'(11) 44097-0430', email:'glenna69@yahoo.com', clienteId: 2
      },
      {
        telefone:'(11) 77582-3093', email:'alverta_bergnaum58@hotmail.com', clienteId: 3
      }
    ])
  }
}
