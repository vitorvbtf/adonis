import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {
        cpf:26845873020, nome:'felipe', matricula: '6565623', cep:49042300, email:'felipe@gmail.com', telefone:927032671, statuId:1
      },
      {
        cpf:46681317090, nome:'vitor', matricula: '51454545', cep:72225015, email:'vitor@gmail.com', telefone:92147-6247, statuId:2
      },
      {
        cpf:33992904032, nome:'lucas', matricula: '7189851', cep:72015515, email:'lucas@gmail.com', telefone:92732-5232, statuId:3
      },
      
    ])
  }
}
