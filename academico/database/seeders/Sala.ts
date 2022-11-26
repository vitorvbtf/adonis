import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Sala from 'App/Models/Sala'

export default class extends BaseSeeder {
  public async run () {
    await Sala.createMany([
      {nome:'dbb', capacidade:60, tipo:'b'},
      {nome:'bdd', capacidade:64, tipo:'b'},
      {nome:'acc', capacidade:45, tipo:'b'}

    ])
  }
}
