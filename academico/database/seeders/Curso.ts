import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Curso from 'App/Models/Curso'

export default class extends BaseSeeder {
  public async run () {
    await Curso.createMany([
      {nome: 'ADS', duracao: 5, modalidade: 'P'},
      {nome: 'Ciencia da computção', duracao: 5, modalidade: 'P'},
      {nome: 'Direito', duracao: 10, modalidade: 'P'},
      {nome: 'Medicina', duracao: 10, modalidade: 'P'},
      {nome: 'Enfermagem', duracao: 8, modalidade: 'P'},
      {nome: 'Administração', duracao: 8, modalidade: 'P'},
      {nome: 'Astronomia', duracao: 5, modalidade: 'E'},
      {nome: 'Psicologia', duracao: 8, modalidade: 'H'},
      {nome: 'Gastronomia', duracao: 5, modalidade: 'P'},
      {nome: 'Historia', duracao: 5, modalidade: 'E'},
      {nome: 'Pedagogia', duracao: 5, modalidade: 'E'},
    ])
  }
}
