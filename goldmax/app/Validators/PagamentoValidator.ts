import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PagamentoValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    pix: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    debito: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    credito: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    planoId: schema.number([
      rules.exists({ table: 'planos', column: 'id'})
    ])
  })

  
  public messages: CustomMessages = {}
}
