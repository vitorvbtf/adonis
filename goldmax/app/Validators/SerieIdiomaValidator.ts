import { schema, rules,CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SerieIdiomaValidator {
  constructor(protected ctx: HttpContextContract) {}

  
  public schema = schema.create({
    serieId: schema.number([
      rules.exists({ table: 'series', column: 'id'})
    ]),

    idiomaId: schema.number([
      rules.exists({ table: 'idiomas', column: 'id'})
    ])
  })

 
  public messages: CustomMessages = {}
}
