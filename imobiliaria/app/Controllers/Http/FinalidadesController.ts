// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Finalidade from "App/Models/Finalidade"
import FinalidadeValidator from "App/Validators/FinalidadeValidator"

export default class FinalidadesController {
    index() {
        return Finalidade.all()
    }
    
    async store({request}) {
        const data = await request.validate(FinalidadeValidator)
        return Finalidade.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Finalidade.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const finalidade = await Finalidade.findOrFail(id)
    
        return finalidade.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const finalidade = await Finalidade.findOrFail(id)
    
        const dados = request.only([
            'locacacao', 
            'venda'])
    
        finalidade.merge(dados)
    
        return finalidade.save()
}
}
