import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aula from 'App/Models/Aula'

export default class extends BaseSeeder {
  public async run () {
    await Aula.createMany([ {data: new Date(12-12-2022), conteudo: 'matematica', turmaId:1}, {data: new Date(12-12-2022), conteudo: 'ciência', turmaId:2}, {data: new Date(12-12-2022), conteudo: 'Português', turmaId:3} ])
  }
}
