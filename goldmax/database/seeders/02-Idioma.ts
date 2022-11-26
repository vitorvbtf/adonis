import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Idioma from 'App/Models/Idioma'

export default class extends BaseSeeder {
  public async run () {
    await Idioma.createMany([
      {
        portugues:'sim',
        ingles:'sim',
        espanhol:'sim',
        frances:'não'
      },
      {
        portugues:'sim',
        ingles:'sim',
        espanhol:'não',
        frances:'não'
      },
      {
        portugues:'sim',
        ingles:'sim',
        espanhol:'sim',
        frances:'não'
      },
    
    ])
  }
}
