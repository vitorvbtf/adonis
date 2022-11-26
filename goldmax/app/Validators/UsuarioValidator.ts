import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsuarioValidator {
  constructor(protected ctx: HttpContextContract) {}

 
  public schema = schema.create({
    nome: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(100),
      rules.alpha(),
    ]),

    cpf: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(14),
      rules.unique({table: 'usuarios', column:'cpf'}),
      rules.regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)  
    ]),

    email: schema.string({}, [
      rules.email(),
      rules.minLength(1),
      rules.maxLength(100),  
    ]),

    telefone: schema.string({}, [
      rules.minLength(1),
      rules.maxLength(15),
      rules.mobile({}['pt-BR']),
 
    ]),







  })

  
  public messages: CustomMessages = {}
}
