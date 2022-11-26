// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Usuario from "App/Models/Usuario"
import UsuarioValidator from "App/Validators/UsuarioValidator"

export default class UsuariosController {
    index() {
        return Usuario.query()
    }

   async store({request}) {
        const data = await request.validate(UsuarioValidator)
        return Usuario.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Usuario.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const usuario = await Usuario.findOrFail(id)

        return usuario.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const usuario = await Usuario.findOrFail(id)

        const dados = request.only([
            'nome',
            'cpf',
            'email',
            'telefone',
            'pagamentoId'
        ])

        usuario.merge(dados)

        return usuario.save()

    }
}
