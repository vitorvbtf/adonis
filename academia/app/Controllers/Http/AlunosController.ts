// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from "App/Models/Aluno";
import AlunoValidator from "App/Validators/AlunoValidator";

export default class AlunosController {
    index() {
        return Aluno.all()
    }

    async store({request}) {
        const data = await request.validate(AlunoValidator)
        return Aluno.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Aluno.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        return aluno.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const aluno = await Aluno.findOrFail(id)

        const dados = request.only([
            'nome', 
            'cpf', 
            'statuId',
            'matricula',
            'cep',
            'telefone',
            'email',
        ])

        aluno.merge(dados)

        return aluno.save()

    }
}
