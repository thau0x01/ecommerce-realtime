'use strict'

const OrderItemHook = (exports = module.exports = {})
const Product = use('App/Models/Product')
OrderItemHook.updateSubtotal = async model => {
  let product = await Product.find(model.product_id)
  model.subtotal = model.quantity * product.price
}
