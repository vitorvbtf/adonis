import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome:'paulo', telefone:'12345678912345',cep:'12345612', endereco: 'QNM 6 conjunto B', cpf: '54545454521', salario:1200.0, dataNascimento: new Date (2022,12,12)},

      {nome:'augusto', telefone:'12345678912345',cep:'12345612', endereco: 'QNM 6 conjunto B', cpf: '54545454521', salario:1200.0, dataNascimento: new Date (2022,12,12)},

      {nome:'pedro', telefone:'12345678912345',cep:'12345612', endereco: 'QNM 6 conjunto B', cpf: '54545454521', salario:1200.0, dataNascimento: new Date (2022,12,12)},

      {nome:'lucas', telefone:'12345678912345',cep:'12345612', endereco: 'QNM 6 conjunto B', cpf: '54545454521', salario:1200.0, dataNascimento: new Date (2022,12,12)}
    ]) 
  }
}
