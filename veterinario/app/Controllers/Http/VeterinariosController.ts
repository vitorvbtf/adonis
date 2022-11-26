// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Veterinario from "App/Models/Veterinario"

export default class VeterinariosController {
    index() {
        return Veterinario.all()
    }
    
    async store({request}) {
        const data = await request.validate(VeterinariosController)
        return Veterinario.create(data)
    }
    
    show({request}) {
        const id = request.param('id')
        return Veterinario.findOrFail(id)
    }
    
    async destroy({request}) {
        const id = request.param('id')
        const veterinario = await Veterinario.findOrFail(id)
    
        return veterinario.delete()
    }
    
    async update( {request} ) {
        const id = request.param('id')
        const veterinario = await Veterinario.findOrFail(id)
    
        const dados = request.only([
            'nome',
            'cpf',
            'especialidade',
            'sexo'
        ])
    
        veterinario.merge(dados)
    
        return veterinario.save()
    
    }
}
