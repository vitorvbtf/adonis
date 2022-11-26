// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Turma from "App/Models/Turma"
import TurmaAlunoValidator from "App/Validators/TurmaAlunoValidator"

export default class TurmasController {
    index() {
        return Turma.all()
    }

    async store({request}) {
        const data = await request.validate(TurmaAlunoValidator)
        return Turma.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Turma.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)

        return turma.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const turma = await Turma.findOrFail(id)

        const dados = request.only([
            'nome', 
            'professorId', 
            'semestreId',
            'disciplinaId',
            'salaId',
            'turno',
        ])

        turma.merge(dados)

        return turma.save()

    }
}
