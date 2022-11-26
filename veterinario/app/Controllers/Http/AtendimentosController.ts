// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Atendimento from "App/Models/Atendimento"
import AtendimentoValidator from "App/Validators/AtendimentoValidator"

export default class AtendimentosController {
    index() {
    return Atendimento.all()
}

async store({request}) {
    const data = await request.validate(AtendimentoValidator)
    return Atendimento.create(data)
}

show({request}) {
    const id = request.param('id')
    return Atendimento.findOrFail(id)
}

async destroy({request}) {
    const id = request.param('id')
    const atendimento = await Atendimento.findOrFail(id)

    return atendimento.delete()
}

async update( {request} ) {
    const id = request.param('id')
    const aluno = await Atendimento.findOrFail(id)

    const dados = request.only([
        'especialidade',
        'medicamento',
        'cadastroId'
    ])

    aluno.merge(dados)

    return aluno.save()

}
}
