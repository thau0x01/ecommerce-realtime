'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const ProductTransformer = use('App/Transformers/Admin/ProductTransformer')
const UserTransformer = use('App/Transformers/Admin/UserTransformer')
const OrderTransformer = use('App/Transformers/Admin/OrderTransformer')
/**
 * CouponTransformer class
 *
 * @class CouponTransformer
 * @constructor
 */
class CouponTransformer extends TransformerAbstract {
  availableIncludes() {
    return ['users', 'products', 'orders']
  }
  /**
   * This method is used to transform the data.
   */
  transform(coupon) {
    coupon = coupon.toJSON()
    delete coupon.created_at
    delete coupon.updated_at
    return coupon
  }

  includeUsers(coupon) {
    return this.collection(coupon.getRelated('users'), UserTransformer)
  }

  includeProducts(coupon) {
    return this.collection(coupon.getRelated('products'), ProductTransformer)
  }

  includeOrders(coupon) {
    return this.collection(coupon.getRelated('orders'), OrderTransformer)
  }
}

module.exports = CouponTransformer
