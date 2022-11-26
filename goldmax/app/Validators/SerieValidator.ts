import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SerieValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({

    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(100),
      rules.alphaNum({
        allow: ['space']
      })
    ]),

    duraçao: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(15),
      rules.alphaNum({
        allow: ['space']
      })
    ]),

    classificacao: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(15),
      rules.alphaNum({
        allow: ['space']
      })
    ]),

    ano: schema.number([
      rules.unsigned(),
      rules.range(1900,2022),  
    ]),

    generoId: schema.number([
      rules.exists({ table: 'generos', column: 'id'})
    ])

  })

  
  public messages: CustomMessages = {}
}
