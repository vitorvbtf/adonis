// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import VeterinarioAtendimento from "App/Models/VeterinarioAtendimento"
import VeterinarioAtendimentoValidator from "App/Validators/VeterinarioAtendimentoValidator"

export default class VeterinarioAtendimentosController {
    index() {
        return VeterinarioAtendimento.all()
    }
    
    async store({request}) {
        const data = await request.validate(VeterinarioAtendimentoValidator)
        return VeterinarioAtendimento.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return VeterinarioAtendimento.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const veterinarioAtendimento = await VeterinarioAtendimento.findOrFail(id)
    
        return veterinarioAtendimento.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const veterinarioAtendimento = await VeterinarioAtendimento.findOrFail(id)
    
        const dados = request.only([
            'veterinarioId',
            'atendimentoId'
        ])
    
        veterinarioAtendimento.merge(dados)
    
        return veterinarioAtendimento.save()
    
    }
}
