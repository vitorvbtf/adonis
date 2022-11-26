import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Professor from 'App/Models/Professor'

export default class extends BaseSeeder {
  public async run () {
    await Professor.createMany([
      {nome:'Vitor', cpf:1248565412,  matricula: 21214290027, salario: 1300, email:'email@gmail.com', telefone:61918941234, cep:12155678, logradouro:'qnl', complemento:'casa', numero:1, bairro:'ceilandia'},
      
      {nome:'jose', cpf:12345674812,  matricula: 21214290467, salario: 1200, email:'email@gmail.com', telefone:61912351894, cep:12342478, logradouro:'qnl', complemento:'casa', numero:1, bairro:'ceilandia' },
      
      {nome:'joao', cpf:12345498912,  matricula: 21214298427, salario: 1200, email:'email@gmail.com', telefone:61912341234, cep:32345678, logradouro:'qnl', complemento:'casa', numero:1, bairro:'ceilandia' },
      
      {nome:'gael', cpf:12385678912,  matricula: 21314290027, salario: 1200, email:'email@gmail.com', telefone:61992341234, cep:12335678, logradouro:'qnl', complemento:'casa', numero:1, bairro:'ceilandia' },
      
      {nome:'pedro', cpf:12345678912,  matricula: 21214290027, salario: 1200, email:'email@gmail.com', telefone:61912341234, cep:12345678, logradouro:'qnl', complemento:'casa', numero:1, bairro:'ceilandia' },
      
      {nome:'felipe', cpf:12345678912,  matricula: 21214290027, salario: 1200, email:'email@gmail.com', telefone:61912341234, cep:12345678, logradouro:'qnl', complemento:'casa', numero:1, bairro:'ceilandia' }

      ])
  }
}
