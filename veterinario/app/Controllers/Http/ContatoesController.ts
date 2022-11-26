// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Contato from "App/Models/Contato"
import ContatoValidator from "App/Validators/ContatoValidator"

export default class ContatoesController {
    index() {
        return Contato.all()
    }
    
    async store({request}) {
        const data = await request.validate(ContatoValidator)
        return Contato.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Contato.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const contato = await Contato.findOrFail(id)
    
        return contato.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const contato = await Contato.findOrFail(id)
    
        const dados = request.only([
            'telefone',
            'email',
            'clienteId'
        ])
    
        contato.merge(dados)
    
        return contato.save()
    
    }
}
