import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Usuario from 'App/Models/Usuario'

export default class extends BaseSeeder {
  public async run () {
    await Usuario.createMany([
      { 
        nome:'felipe',
        cpf:'123.456.789-12',
        email:'felipe@gmail.com',
        telefone:'(61)99456-5648',
        pagamentoId:1
      },
      {
        nome:'lucas',
        cpf:'123.466.789-12',
        email:'lucas@gmail.com',
        telefone:'(61)99456-5649',
        pagamentoId:2
      },
      {
        nome:'vitor',
        cpf:'123.446.789-12',
        email:'vitor@gmail.com',
        telefone:'(62)99356-5648',
        pagamentoId:3
      }
    ])
  }
}
