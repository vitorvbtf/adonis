import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Corretor from 'App/Models/Corretor'

export default class extends BaseSeeder {
  public async run () {
    await Corretor.createMany([
      {
       nome:'Luciano',
       cpf:'354.929.080-22',
       telefone:'(42) 3222-9878',
       email:'luciano@gmail.com',
       contratoId:1
      },
      {
        nome:'Luis',
        cpf:'978.493.180-05',
        telefone:'(91) 3139-2471',
        email:'luis@gmail.com',
        contratoId:2
       },
       {
        nome:'Manoel',
        cpf:'387.764.620-48',
        telefone:'(81) 2569-5308',
        email:'manoel@gmail.com',
        contratoId:3
       },
    ])
  }
}
