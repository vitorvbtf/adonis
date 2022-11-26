// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import SerieIdioma from "App/Models/SerieIdioma"
import SerieIdiomaValidator from "App/Validators/SerieIdiomaValidator"

export default class SerieIdiomasController {
    index() {
        return SerieIdioma.query()
    }

   async store({request}) {
        const data = await request.validate(SerieIdiomaValidator)
        return SerieIdioma.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return SerieIdioma.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const serieIdioma = await SerieIdioma.findOrFail(id)

        return serieIdioma.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const serieIdioma = await SerieIdioma.findOrFail(id)

        const dados = request.only([
            'serieId',
            'idiomaId'
        ])

        serieIdioma.merge(dados)

        return serieIdioma.save()

    }
}
