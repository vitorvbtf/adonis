// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cadastro from "App/Models/Cadastro"
import CadastroValidator from "App/Validators/CadastroValidator"

export default class CadastrosController {
    index() {
        return Cadastro.all()
    }
    
    async store({request}) {
        const data = await request.validate(CadastroValidator)
        return Cadastro.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Cadastro.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const cadastro = await Cadastro.findOrFail(id)
    
        return cadastro.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const cadastro = await Cadastro.findOrFail(id)
    
        const dados = request.only([
            'nome',
            'raça',
            'idade',
            'tamanho',
            'clienteId'
        ])
    
        cadastro.merge(dados)
    
        return cadastro.save()
    
    }    
}
