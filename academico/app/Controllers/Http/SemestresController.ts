// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Semestre from "App/Models/Semestre"

export default class SemestresController {
    index() {
        return Semestre.all()
    }

    async store({request}) {
        const data = await request.validate()
        return Semestre.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Semestre.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)

        return semestre.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const semestre = await Semestre.findOrFail(id)

        const dados = request.only([
            'nome', 
            'dataInicio', 
            'dataFim'])

        semestre.merge(dados)

        return semestre.save()

    }
}
