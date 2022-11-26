// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Imovel from "App/Models/Imovel"
import ImovelValidator from "App/Validators/ImovelValidator"

export default class ImovelsController {
    index() {
        return Imovel.all()
    }
    
    async store({request}) {
        const data = await request.validate(ImovelValidator)
        return Imovel.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Imovel.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const imovel = await Imovel.findOrFail(id)
    
        return imovel.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const imovel = await Imovel.findOrFail(id)
    
        const dados = request.only([
            'tamanho', 
            'casa',
            'apartamento',
            'cobertura',
            'garagem',
            'enderecoId',
            'contratoId'
        ])
    
        imovel.merge(dados)
    
        return imovel.save()
}
}
