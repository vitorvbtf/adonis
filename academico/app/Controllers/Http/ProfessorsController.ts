// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Professor from "App/Models/Professor"
import ProfessorValidator from "App/Validators/ProfessorValidator"

export default class ProfessorsController {
    index() {
        return Professor.all()
    }

    async store({request}) {
         const data = await request.validate(ProfessorValidator)
        return Professor.create(data)
    }

    show({request}) {
        const id = request.param('id')
        return Professor.findOrFail(id)
    }

    async destroy({request}) {
        const id = request.param('id')
        const professor = await Professor.findOrFail(id)

        return professor.delete()
    }

    async update( {request} ) {
        const id = request.param('id')
        const professor = await Professor.findOrFail(id)

        const dados = request.only([
            'nome', 
            'cpf', 
            'matricula', 
            'salario', 
            'email', 
            'telefone', 
            'cep', 
            'logradouro', 
            'complemento', 
            'numero', 
            'bairro'
        ])

        professor.merge(dados)

        return professor.save()
    }
}
