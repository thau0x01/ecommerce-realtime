'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const ProductTransformer = use('App/Transformers/Admin/ProductTransformer')
/**
 * OrderItemTransformer class
 *
 * @class OrderItemTransformer
 * @constructor
 */
class OrderItemTransformer extends TransformerAbstract {
  defaultInclude() {
    return ['product']
  }
  /**
   * This method is used to transform the data.
   */
  transform(model) {
    return {
      id: model.id,
      subtotal: model.subtotal,
      quantity: model.quantity
    }
  }

  includeProduct(orderItem) {
    return this.item(orderItem.getRelated('product'), ProductTransformer)
  }
}

module.exports = OrderItemTransformer
