// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Vacinacao from "App/Models/Vacinacao"
import VacinacaoValidator from "App/Validators/VacinacaoValidator"

export default class VacinacaosController {
    index() {
        return Vacinacao.all()
    }
    
    async store({request}) {
        const data = await request.validate(VacinacaoValidator)
        return Vacinacao.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Vacinacao.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const vacinacao = await Vacinacao.findOrFail(id)
    
        return vacinacao.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const vacinacao = await Vacinacao.findOrFail(id)
    
        const dados = request.only([
            'tipoVacina',
            'dataVacinacao',
            'doses',
            'veterinario',
            'cadastroId'
        ])
    
        vacinacao.merge(dados)
    
        return vacinacao.save()
    
    }
}
