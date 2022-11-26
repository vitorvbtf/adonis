// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Plano from "App/Models/Plano"
import PlanoValidator from "App/Validators/PlanoValidator"

export default class PlanosController {
    index() {
        return Plano.all()
    }

   async store({request}) {
        const data = await request.validate(PlanoValidator)
        return Plano.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Plano.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const plano = await Plano.findOrFail(id)

        return plano.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const plano = await Plano.findOrFail(id)

        const dados = request.only([
            'duracao',
            'preco',
        ])

        plano.merge(dados)

        return plano.save()

    }
}
