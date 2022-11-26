import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class GeneroValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    drama:  schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    comedia:  schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    romance:  schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    terror:  schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    suspense:  schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),

    acao:  schema.string({}, [
      rules.minLength(1),
      rules.maxLength(3),
      rules.alpha(),
    ]),
  })

  
  public messages: CustomMessages = {}
}
