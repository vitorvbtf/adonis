// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UsuarioSerie from "App/Models/UsuarioSerie"
import UsuarioSerieValidator from "App/Validators/UsuarioSerieValidator"

export default class UsuarioSeriesController {
    index() {
        return UsuarioSerie.query()
    }

   async store({request}) {
        const data = await request.validate(UsuarioSerieValidator)
        return UsuarioSerie.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return UsuarioSerie.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const usuarioSerie = await UsuarioSerie.findOrFail(id)

        return usuarioSerie.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const usuarioSerie = await UsuarioSerie.findOrFail(id)

        const dados = request.only([
            'usuarioId',
            'serieId',
        ])

        usuarioSerie.merge(dados)

        return usuarioSerie.save()

    }
}
