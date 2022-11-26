// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Disciplina from "App/Models/Disciplina";
import DisciplinaValidator from "App/Validators/DisciplinaValidator";

export default class   DisciplinasController {
  index() {
    return Disciplina.all()
}

async store({request}) {
    const data = await request.validate(DisciplinaValidator)
    return Disciplina.create(data)
}

show({request}) {
    const id = request.param('id')
    return Disciplina.findOrFail(id)
}

async destroy({request}) {
    const id = request.param('id')
    const disciplina = await Disciplina.findOrFail(id)

    return disciplina.delete()
}

async update( {request} ) {
    const id = request.param('id')
    const disciplina = await Disciplina.findOrFail(id)

    const dados = request.only([
        'nome', 
        'cursoId'])

    disciplina.merge(dados)

    return disciplina.save()

}
}
