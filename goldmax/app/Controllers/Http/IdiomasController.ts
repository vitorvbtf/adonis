// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Idioma from "App/Models/Idioma"
import IdiomaValidator from "App/Validators/IdiomaValidator"

export default class IdiomasController {
    index() {
        return Idioma.query().preload("filmes").preload("series")
    }

   async store({request}) {
        const data = await request.validate(IdiomaValidator)
        return Idioma.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Idioma.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const idioma = await Idioma.findOrFail(id)

        return idioma.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const idioma = await Idioma.findOrFail(id)

        const dados = request.only([
            'portugues',
            'ingles',
            'espanhol',
            'frances'
        ])

        idioma.merge(dados)

        return idioma.save()

    }
}
