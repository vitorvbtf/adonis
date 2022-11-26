// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Endereco from "App/Models/Endereco"
import EnderecoValidator from "App/Validators/EnderecoValidator"

export default class EnderecosController {
    index() {
        return Endereco.all()
    }
    
    async store({request}) {
        const data = await request.validate(EnderecoValidator)
        return Endereco.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Endereco.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const endereco = await Endereco.findOrFail(id)
    
        return endereco.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const endereco = await Endereco.findOrFail(id)
    
        const dados = request.only([
            'cep', 
            'rua',
            'cidade',
            'bairro',
            'numero'
        ])
    
        endereco.merge(dados)
    
        return endereco.save()
}
}
