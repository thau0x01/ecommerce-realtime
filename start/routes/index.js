'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Retorna o usuário logado atualmente
 */
Route.get('v1/me', 'UserController.me')
  .as('me')
  .middleware('auth')
/**
 * Importa as rotas de autenticação
 */
require('./auth')

/**
 * Importa as rotas de Admin
 */
require('./admin')

/**
 * Importa as rotas de Clientes
 */
require('./client')
