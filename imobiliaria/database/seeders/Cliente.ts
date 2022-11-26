import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
       nome:'Felipe',
       cpf:'552.911.570-54',
       telefone:'(61) 3410-3528',
       contratoId:1
      },
      {
        nome:'Vítor',
        cpf:'603.364.850-18',
        telefone:'(67) 2330-5752',
        contratoId:2
       },
       {
        nome:'João',
        cpf:'885.578.940-66',
        telefone:'(73) 3482-6134',
        contratoId:3
       }
    ])
    }
}
