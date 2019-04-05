'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const CouponTransformer = use('App/Transformers/Admin/CouponTransformer')
/**
 * DiscountTransformer class
 *
 * @class DiscountTransformer
 * @constructor
 */
class DiscountTransformer extends TransformerAbstract {
  defaultInclude() {
    return ['coupon']
  }

  /**
   * This method is used to transform the data.
   */
  transform(model) {
    return {
      id: model.id,
      amount: model.discount
    }
  }

  includeCoupon(discount) {
    return this.item(discount.getRelated('coupon'), CouponTransformer)
  }
}

module.exports = DiscountTransformer
