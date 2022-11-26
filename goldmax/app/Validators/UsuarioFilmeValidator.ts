import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsuarioFilmeValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

    usuarioId: schema.number([
      rules.exists({ table: 'usuarios', column: 'id'})
    ]),

    filmeId: schema.number([
      rules.exists({ table: 'filmes', column: 'id'})
    ])

  })

  
  public messages: CustomMessages = {}
}
