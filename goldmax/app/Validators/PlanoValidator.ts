import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PlanoValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    duracao: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(15),
      rules.alphaNum({
        allow: ['space']
      }),
    ]),

    preco: schema.number([
    rules.unsigned(),
    rules.range(0.1,1000),
  
    ]),

  })

  public messages: CustomMessages = {}
}
