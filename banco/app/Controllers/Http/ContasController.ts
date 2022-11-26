// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Conta from "App/Models/Conta"

export default class ContasController {
    index() {
    return Conta.all()
  }

  store(){
    const dados_2 = {tipo: 'tipo', banco:153, agencia:'agencia',  saldo: 1200,data_criacao:1, cliente_id:1}
    return Conta.create(dados_2)
  }
  
}
