// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import FilmeIdioma from "App/Models/FilmeIdioma"
import FilmeIdiomaValidator from "App/Validators/FilmeIdiomaValidator"

export default class FilmeIdiomasController {
    index() {
        return FilmeIdioma.all()
    }

   async store({request}) {
        const data = await request.validate(FilmeIdiomaValidator)
        return FilmeIdioma.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return FilmeIdioma.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const filmeIdioma = await FilmeIdioma.findOrFail(id)

        return filmeIdioma.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const filmeIdioma = await FilmeIdioma.findOrFail(id)

        const dados = request.only([
            'filmeId',
            'idiomaId'
        ])

        filmeIdioma.merge(dados)

        return filmeIdioma.save()

    }
}
