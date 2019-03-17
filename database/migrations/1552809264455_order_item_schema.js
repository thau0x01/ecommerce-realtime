'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderItemSchema extends Schema {
  up() {
    this.create('order_items', table => {
      table.increments()
      table.integer('product_id').unsigned()
      table.integer('quantity').unsigned()
      table.decimal('subtotal', 12, 2)
      table.integer('order_id').unsigned()

      table
        .foreign('product_id')
        .references('id')
        .inTable('products')
        .onDelete('cascade')
      table
        .foreign('order_id')
        .references('id')
        .inTable('orders')
        .onDelete('cascade')
    })
  }

  down() {
    this.drop('order_items')
  }
}

module.exports = OrderItemSchema
