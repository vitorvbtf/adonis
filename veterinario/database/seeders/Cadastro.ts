import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cadastro from 'App/Models/Cadastro'

export default class extends BaseSeeder {
  public async run () {
    await Cadastro.createMany([
      {
        nome:'adão', raca:'pug', idade:'2', tamanho:'55', clienteId:1
      },
      {
        nome:'thor', raca:'vira-lata', idade:'2', tamanho:'80', clienteId:2
      },
      {
        nome:'pingo', raca:'pug', idade:'3', tamanho:'60', clienteId:3
      },
    ])
  }
}
