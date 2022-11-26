// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UsuarioFilme from "App/Models/UsuarioFilme"
import UsuarioFilmeValidator from "App/Validators/UsuarioFilmeValidator"

export default class UsuarioFilmesController {
    index() {
        return UsuarioFilme.query()
    }

   async store({request}) {
        const data = await request.validate(UsuarioFilmeValidator)
        return UsuarioFilme.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return UsuarioFilme.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const usuarioFilme = await UsuarioFilme.findOrFail(id)

        return usuarioFilme.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const usuarioFilme = await UsuarioFilme.findOrFail(id)

        const dados = request.only([
            'usuarioId',
            'filmeId'
        ])

        usuarioFilme.merge(dados)

        return usuarioFilme.save()

    }
}
