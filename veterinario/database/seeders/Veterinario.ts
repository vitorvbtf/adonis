import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Veterinario from 'App/Models/Veterinario'

export default class extends BaseSeeder {
  public async run () {
    await Veterinario.createMany([
      {
        nome:'Arthur', cpf:'672.978.500-47', especialidade:'endocrinologia', sexo:'m'
      },
      {
        nome:'Lucas', cpf:'176.521.270-76', especialidade:'demartologia', sexo:'m'
      },
      {
        nome:'Yan', cpf:'933.394.910-03', especialidade:'homeopatia', sexo:'m'
      },
    ])
  }
}
