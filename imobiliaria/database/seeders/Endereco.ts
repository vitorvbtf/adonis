import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Endereco from 'App/Models/Endereco'

export default class extends BaseSeeder {
  public async run () {
    await Endereco.createMany([
      {
       cep:'13330-700',
       rua:'8',
       cidade:'Indaiatuba',
       bairro:'Vila Lopes',
       numero:42
      },
      {
        cep:'60822-915',
        rua:'General Afonso Albuquerque Lima',
        cidade:'Fortaleza',
        bairro:'Cambeba',
        numero:30
       },
       {
        cep:'85603-430',
        rua:'Rua Gravataí',
        cidade:'Francisco Beltrão',
        bairro:'Jardim Floresta',
        numero:30
       },
       
    ])
  }
}
