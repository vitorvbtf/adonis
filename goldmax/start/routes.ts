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

Route.resource('/filmes','FilmesController').apiOnly()
Route.resource('/filmeIdiomas','FilmeIdiomasController').apiOnly()
Route.resource('/generos','GenerosController').apiOnly()
Route.resource('/idiomas','IdiomasController').apiOnly()
Route.resource('/pagamentos','PagamentosController').apiOnly()
Route.resource('/planos','PlanosController').apiOnly()
Route.resource('/series','SeriesController').apiOnly()
Route.resource('/serieIdiomas','SerieIdiomasController').apiOnly()
Route.resource('/usuarios','UsuariosController').apiOnly()
Route.resource('/usuarioFilmes','UsuarioFilmesController').apiOnly()
Route.resource('/usuarioSeries','UsuarioSeriesController').apiOnly()
