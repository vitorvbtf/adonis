import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ImovelValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    tamanho: schema.string([
      rules.minLength(1), 
      rules.maxLength(100)
    ]),
    casa: schema.string([
      rules.minLength(1), 
      rules.maxLength(3)
    ]),
    apartamento: schema.string([
      rules.minLength(1), 
      rules.maxLength(3)
    ]),
    cobertura: schema.string([
      rules.minLength(1), 
      rules.maxLength(3)
    ]),
    garagem: schema.string([
      rules.minLength(1), 
      rules.maxLength(3)
    ]),
    enderecoId: schema.number([
      rules.exists({ table: "enderecos", column: "id" }),
    ]),
    contratoId: schema.number([
      rules.exists({ table: "contratoes", column: "id" }),
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
