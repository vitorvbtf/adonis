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
Route.post('/ex1', 'ExerciciosController.ex1')
Route.post('/ex2', 'ExerciciosController.ex2')
Route.post('/ex3', 'ExerciciosController.ex3')
Route.post('/ex4', 'ExerciciosController.ex4')
Route.post('/ex5', 'ExerciciosController.ex5')
Route.post('/ex6', 'ExerciciosController.ex6')
Route.post('/ex7', 'ExerciciosController.ex7')
Route.post('/ex8', 'ExerciciosController.ex8')