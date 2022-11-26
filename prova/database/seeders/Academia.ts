import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Academia from 'App/Models/Academia'

export default class extends BaseSeeder {
  public async run () {
    await Academia.createMany([
      {professores:'Paulo', aluno:'Felipe', matricula:25644555, inicio: new Date(2022,12,12)},

      {professores:'Paulo', aluno:'Felipe', matricula:25644555, inicio: new Date(2022,12,12)},

      {professores:'vitor', aluno:'leandro', matricula:25644555, inicio: new Date(2022,12,12)},

      {professores:'felipe', aluno:'tiago', matricula:25644555, inicio: new Date(2022,12,12)},

      {professores:'arthur', aluno:'moacir', matricula:25644555, inicio: new Date(2022,12,12)}
    ])
}
}
