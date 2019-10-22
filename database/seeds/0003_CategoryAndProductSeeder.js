'use strict'

/*
|--------------------------------------------------------------------------
| CategoryAndProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategoryAndProductSeeder {
  async run() {
    const categories = await Factory.model('App/Models/Category').createMany(10)

    await Promise.all(
      categories.map(async category => {
        const products = await Factory.model('App/Models/Product').createMany(5)
        await Promise.all(
          products.map(async product => {
            await product.categories().attach([category.id])
          })
        )
      })
    )
  }
}

module.exports = CategoryAndProductSeeder
