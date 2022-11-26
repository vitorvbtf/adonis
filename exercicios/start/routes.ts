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

Route.get('/teste', async () => {
  return { hello: 'ola mundo' }
})

Route.post('/teste/ex1', 'Lista2sController.ex1')

Route.post('/teste/ex2', 'Lista2sController.ex2')

Route.post('/teste/ex3', 'Lista2sController.ex3')

Route.post('/teste/ex4', 'Lista2sController.ex4')

Route.post('/teste/ex5', 'Lista2sController.ex5')

Route.post('/teste/ex6', 'Lista2sController.ex6') 

Route.post('/teste/ex7', 'Lista2sController.ex7')

Route.post('/teste/ex8', 'Lista2sController.ex8')

Route.post('/teste/ex9', 'Lista2sController.ex9')

Route.post('/teste/ex10', 'Lista2sController.ex10')