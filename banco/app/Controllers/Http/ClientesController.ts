// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"

export default class ClientesController {
    index() {
        return Cliente.all()
      }
    
      store(){
        let dados = 
        {
          nome:'nome', telefone:'telefone', cep:'cep',  endereco:'endereco', cpf:'cpf', salario:1000, data_nascimento:(2022-10-10)
        }
        return Cliente.create(dados)
      }
}
