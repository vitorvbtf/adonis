import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IdiomaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    portugues: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    ingles: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    espanhol: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    frances: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),


  })

 
  public messages: CustomMessages = {}
}
