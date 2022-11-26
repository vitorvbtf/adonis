import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Contrato from 'App/Models/Contrato'

export default class extends BaseSeeder {
  public async run () {
    await Contrato.createMany([
      {
       preco:'R$100.000,00',
       duracaoMeses:'4 meses',
       parcelas:'15x',
       dataInicio:new Date(2022-12-13),
        dataFim:new Date(2028-12-13),
       finalidadeId:1
      },
      {
        preco:'R$130.000,00',
        duracaoMeses:'8 meses',
        parcelas:'10x',
        dataInicio:new Date(2022-12-13),
        dataFim:new Date(2025-12-13),
        finalidadeId:2
       },
       {
        preco:'R$106.000,00',
        duracaoMeses:'1 meses',
        parcelas:'1x',
        dataInicio:new Date(2022-12-13),
        finalidadeId:3
       },
    ])
  }
}
