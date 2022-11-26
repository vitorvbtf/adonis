import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Disciplina from 'App/Models/Disciplina'


export default class extends BaseSeeder {
  public async run () {
    await Disciplina.createMany([
    {
      nome: 'Construção de back-end', cursoId: 1
    },
    {
      nome: 'Anatomia', cursoId: 4
    },
    {
      nome: 'Fisiologia', cursoId: 5
    },{
      nome: 'Direito penal', cursoId: 3
    },{
      nome: 'Empreendedorismo', cursoId: 6
    },{
      nome: 'História da Psicologia', cursoId: 8
    },{
      nome: 'Calculo 1', cursoId: 2
    },{
      nome: 'Feudalismo', cursoId: 10
    },{
      nome: 'Higiene e Controle de Alimento', cursoId: 9
    },{
      nome: 'Álgebra Linear', cursoId: 7
    },
    {
      nome: 'Didática', cursoId: 11
    },
  ])
  }
}
