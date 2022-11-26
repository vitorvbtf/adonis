import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Turma from 'App/Models/Turma';

export default class extends BaseSeeder {
  public async run () {
    await Turma.createMany([
      {
        nome: "A1",
        turno: "M",
        professorId: 1,
        alunoId: 1,
      },
      {
        nome: "A2",
        turno: "M",
        professorId: 2,
        alunoId: 2,
      },
      {
        nome: "A3",
        turno: "V",
        professorId: 3,
        alunoId: 3,
      },
    ]);
  }
}
