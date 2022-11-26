// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Genero from "App/Models/Genero"
import GeneroValidator from "App/Validators/GeneroValidator"

export default class GenerosController {
    index() {
        return Genero.all()
    }

   async store({request}) {
        const data = await request.validate(GeneroValidator)
        return Genero.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Genero.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const genero = await Genero.findOrFail(id)

        return genero.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const genero = await Genero.findOrFail(id)

        const dados = request.only([
            'drama',
            'comedia',
            'romance',
            'terror',
            'suspense',
            'acao'
        ])

        genero.merge(dados)

        return genero.save()

    }
}
