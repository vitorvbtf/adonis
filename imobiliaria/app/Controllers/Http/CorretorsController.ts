// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Corretor from "App/Models/Corretor"
import CorretorValidator from "App/Validators/CorretorValidator"

export default class CorretorsController {
    index() {
        return Corretor.all()
    }
    
    async store({request}) {
        const data = await request.validate(CorretorValidator)
        return Corretor.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Corretor.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const corretor = await Corretor.findOrFail(id)
    
        return corretor.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const corretor = await Corretor.findOrFail(id)
    
        const dados = request.only([
            'nome', 
            'cpf',
            'telefone',
            'email',
            'contratoId'
        ])
    
        corretor.merge(dados)
    
        return corretor.save()
}
}
