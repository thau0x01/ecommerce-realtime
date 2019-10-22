'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserImageFkSchema extends Schema {
  up() {
    this.table('users', table => {
      // alter table
      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade')
    })
  }

  down() {
    this.table('users', table => {
      // reverse alternations
      table.dropForeign('image_id')
    })
  }
}

module.exports = UserImageFkSchema
