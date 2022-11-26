import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Statu from "App/Models/Statu";


export default class extends BaseSeeder {
  public async run() {
    await Statu.createMany([
      {
        situacao_status:'aprovado'
      },
      {
        situacao_status:'reprovado'
      },
      {
        situacao_status:'aprovado'
      }
    ]);
  }
}
