import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Conta from 'App/Models/Conta'

export default class extends BaseSeeder {
  public async run () {
    await Conta.createMany([
      {tipo:'c', banco:1234,agencia:'45612', saldo: 1200.0, dataCriacao:new Date (2022,12,12) , clienteId: 1},

      {tipo:'p', banco:1234,agencia:'45612', saldo: 1200.0, dataCriacao:new Date (2022,12,12) , clienteId: 2},

      {tipo:'p', banco:1234,agencia:'45612', saldo: 1200.0, dataCriacao:new Date (2022,12,12) , clienteId: 3},
    ])
  }
}
