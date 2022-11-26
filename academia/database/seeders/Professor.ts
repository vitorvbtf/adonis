import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {
        cpf:26845876589, nome:'guilherme', cep:49042300, email:'guilherme@gmail.com', 
      },
      {
        cpf:46681318453, nome:'micael', cep:72225015, email:'micael@gmail.com', 
      },
      {
        cpf:33992905462, nome:'lucas', cep:72015515, email:'lucas@gmail.com'
      },
      
    ])
  }
}
