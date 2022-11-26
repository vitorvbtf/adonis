import { schema,rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FilmeIdiomaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  
  public schema = schema.create({
    filmeId: schema.number([
      rules.exists({ table: 'filmes', column: 'id'})
    ]),

    idiomaId:  schema.number([
      rules.exists({ table: 'idiomas', column: 'id'})
      
      
    ])
  })

  
  public messages: CustomMessages = {}
}
