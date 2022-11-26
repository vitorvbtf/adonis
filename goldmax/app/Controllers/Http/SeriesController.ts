// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Serie from "App/Models/Serie"
import SerieValidator from "App/Validators/SerieValidator"

export default class SeriesController {
    index() {
        return Serie.all()
    }

   async store({request}) {
        const data = await request.validate(SerieValidator)
        return Serie.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Serie.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const serie = await Serie.findOrFail(id)

        return serie.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const serie = await Serie.findOrFail(id)

        const dados = request.only([
            'nome',
            'duracao',
            'classificacao',
            'ano',
            'generoId'
        ])

        serie.merge(dados)

        return serie.save()

    }
}
