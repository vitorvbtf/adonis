import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsuarioSerieValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    usuarioId: schema.number([
      rules.exists({ table: 'usuarios', column: 'id'})
    ]),

    serieId: schema.number([
      rules.exists({ table: 'series', column: 'id'})
    ])
  })

  
  public messages: CustomMessages = {}
}
