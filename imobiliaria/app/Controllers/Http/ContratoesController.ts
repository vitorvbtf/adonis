// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Contrato from "App/Models/Contrato"
import ContratoValidator from "App/Validators/ContratoValidator"

export default class ContratoesController {
    index() {
        return Contrato.all()
    }
    
    async store({request}) {
        const data = await request.validate(ContratoValidator)
        return Contrato.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Contrato.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const contrato = await Contrato.findOrFail(id)
    
        return contrato.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const contrato = await Contrato.findOrFail(id)
    
        const dados = request.only([
            'preco', 
            'duracaoMeses',
            'parcelas',
            'dataInicio',
            'dataFim',
            'finalidadeId'
        ])
    
        contrato.merge(dados)
    
        return contrato.save()
}
}
