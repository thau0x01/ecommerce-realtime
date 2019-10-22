'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * Auth Routes
 */
Route.group(() => {
  Route.post('register', 'AuthController.register')
    .as('auth.register')
    .middleware(['guest'])
    .validator('Auth/Register')

  Route.post('login', 'AuthController.login')
    .as('auth.login')
    .middleware(['guest'])
    .validator('Auth/Login')

  Route.post('refresh', 'AuthController.refresh')
    .as('auth.refresh')
    .middleware(['guest'])

  Route.post('logout', 'AuthController.logout')
    .as('auth.logout')
    .middleware(['auth'])

  // restore password routes
  Route.post('reset-password', 'AuthController.forgot')
    .as('auth.forgot')
    .middleware(['guest'])

  Route.get('reset-password', 'AuthController.remember')
    .as('auth.remember')
    .middleware(['guest'])

  Route.put('reset-password', 'AuthController.reset')
    .as('auth.reset')
    .middleware(['guest'])
})
  .prefix('v1/auth')
  .namespace('Auth')
