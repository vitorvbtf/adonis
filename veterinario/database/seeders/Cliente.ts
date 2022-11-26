import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        nome:'Vítor', cpf:'664.280.780-40', estado:'Minas gerais', cidade:'Belo horizonte'
      },
      {
        nome:'Felipe', cpf:'177.465.540-32', estado:'São paulo', cidade:'Itu'
      },
      {
        nome:'Luan', cpf:'733.573.950-02', estado:'Pará', cidade:'Belém'
      }
    ])
  }
}
