// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Filme from "App/Models/Filme"
import FilmeValidator from "App/Validators/FilmeValidator"

export default class FilmesController {
    index() {
        return Filme.all()
    }

   async store({request}) {
        const data = await request.validate(FilmeValidator)
        return Filme.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Filme.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const filme = await Filme.findOrFail(id)

        return filme.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const filme = await Filme.findOrFail(id)

        const dados = request.only([
            'nome',
            'duracao',
            'classificacao',
            'ano',
            'generoId'
        ])

        filme.merge(dados)

        return filme.save()

    }
}
