import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno' 

export default class extends BaseSeeder {
  public async run () {
    await Aluno.createMany([
      {nome:'paulo', cpf:12345678912, matricula:123456789, email:'email@gmail.com', telefone:61912345678, cep:12345612, logradouro:'qnl', complemento:'casa', numero:12, bairro:12},
      
      {nome:'otavio', cpf:12345678912, matricula:123456789, email:'email@gmail.com', telefone:61912345678, cep:12345612, logradouro:'qnl', complemento:'casa', numero:12, bairro:12},
      
      {nome:'lucas', cpf:12345678912, matricula:123456789, email:'email@gmail.com', telefone:61912345678, cep:12345612, logradouro:'qnl', complemento:'casa', numero:12, bairro:12},
      
      {nome:'yan', cpf:12345678912, matricula:123456789, email:'email@gmail.com', telefone:61912345678, cep:12345612, logradouro:'qnl', complemento:'casa', numero:12, bairro:12},
      
      {nome:'italo', cpf:12345678912, matricula:123456789, email:'email@gmail.com', telefone:61912345678, cep:12345612, logradouro:'qnl', complemento:'casa', numero:12, bairro:12}
    ])
    // Write your database queries inside the run method
  }
}
