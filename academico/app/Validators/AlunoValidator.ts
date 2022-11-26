import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AlunoValidator {
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
    nome: schema.string(),

    cpf: schema.string.optional([
      rules.minLength(15),
      rules.maxLength(15)
    ]),

    matricula: schema.string([
      rules.minLength(1),
      rules.maxLength(20)
    ]),
    
    email: schema.string.optional({}, [
      rules.email(),
      rules.maxLength(100),
    ]),

    telefone: schema.string.optional([
      rules.minLength(15),
      rules.maxLength(15)
    ]),
    cep: schema.number.optional(),
    logradouro: schema.string.optional([
      rules.minLength(0),
      rules.maxLength(100)
    ]),
    complemento: schema.string.optional([
      rules.minLength(0),
      rules.maxLength(100)
    ]),
    numero: schema.string.optional([
      rules.minLength(0),
      rules.maxLength(120)
    ]),
    bairro: schema.string.optional([
      rules.minLength(0),
      rules.maxLength(100)
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
  public messages: CustomMessages = {
    required: 'O campo {{field}} é obrigatório',
    unique: 'Já existe um registro com o mesmo valor',
    maxLength: 'Tamanho máximo atingido',
    minLength: 'Tamanho mínimo atingido',
    exists: 'Não existe esse valor na tabela',
  }
}
