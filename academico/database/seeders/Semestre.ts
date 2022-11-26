import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Semestre from 'App/Models/Semestre'

export default class extends BaseSeeder { 
  public async run () {
    await Semestre.createMany([
    {nome:'6 semestres', dataInicio: new Date(2022-12-12), dataFim: new Date(2025-12-12)},
    {nome:'5 semestres', dataInicio: new Date(2022-12-12), dataFim: new Date(2025-12-12)},
    {nome:'8 semestres', dataInicio: new Date(2022-12-12), dataFim: new Date(2027-12-12)},

    ])
   
  }
}
