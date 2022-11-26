// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Statu from "App/Models/Statu"
import StatuValidator from "App/Validators/StatuValidator"

export default class StatusController {
    index() {
        return Statu.all()
    }

    async store({request}) {
        const data = await request.validate(StatuValidator)
        return Statu.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Statu.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const statu = await Statu.findOrFail(id)

        return statu.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const statu = await Statu.findOrFail(id)

        const dados = request.only([
            'situacao_status',
        ])

        statu.merge(dados)

        return statu.save()

    }
}
