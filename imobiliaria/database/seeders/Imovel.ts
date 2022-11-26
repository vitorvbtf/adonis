import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Imovel from "App/Models/Imovel";

export default class extends BaseSeeder {
  public async run() {
    await Imovel.createMany([
      {
        tamanho: "100 m²",
        casa: "sim",
        apartamento: "não",
        cobertura: "não",
        garagem: "sim",
        enderecoId: 1,
        contratoId:1
      },
      {
        tamanho: "150 m²",
        casa: "não",
        apartamento: "sim",
        cobertura: "sim",
        garagem: "sim",
        enderecoId: 2,
        contratoId:2
      },
      {
        tamanho: "70 m²",
        casa: "não",
        apartamento: "sim",
        cobertura: "não",
        garagem: "sim",
        enderecoId: 3,
        contratoId:3
      },
    ]);
  }
}
