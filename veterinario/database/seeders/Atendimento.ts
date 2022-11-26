import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atendimento from 'App/Models/Atendimento'

export default class extends BaseSeeder {
  public async run () {
    await Atendimento.createMany([
      {
        especialidade:'homeopatia', medicamento:'piroxicam', cadastroId:1
      },
      {
        especialidade:'endocrinologia', medicamento:'paracetamol', cadastroId:2
      },
      {
        especialidade:'demartologia', medicamento:'sepuriun', cadastroId:3
      }
    ])
  }
}
