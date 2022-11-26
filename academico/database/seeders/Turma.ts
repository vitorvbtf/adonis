import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma'

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {nome:'1a', professorId:1, semestreId: 1, disciplinaId: 1, salaId:1, turno:'n'},
      {nome:'2a', professorId:2, semestreId: 2, disciplinaId: 2, salaId:2, turno:'m'},
      {nome:'3a', professorId:3, semestreId:3, disciplinaId: 3, salaId:3, turno:'m'}
    ])
  }
}
