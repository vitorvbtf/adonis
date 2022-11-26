/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource("/clientes", "ClientesController").apiOnly();
Route.resource("/contratos", "ContratoesController").apiOnly();
Route.resource("/corretores", "CorretorsController").apiOnly();
Route.resource("/enderecos", "EnderecosController").apiOnly();
Route.resource("/finalidades", "FinalidadesController").apiOnly();
Route.resource(
  "/imoveis",
  "ImovelsController"
).apiOnly();

