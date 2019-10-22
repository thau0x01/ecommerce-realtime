'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')
const ImageTransformer = use('App/Transformers/Admin/ImageTransformer')
/**
 * CategoryTransformer class
 *
 * @class CategoryTransformer
 * @constructor
 */
class CategoryTransformer extends TransformerAbstract {
  defaultInclude() {
    return ['image']
  }

  /**
   * This method is used to transform the data.
   */
  transform(model) {
    return {
      id: model.id,
      title: model.title,
      description: model.description
    }
  }

  includeImage(model) {
    return this.item(model.getRelated('image'), ImageTransformer)
  }
}

module.exports = CategoryTransformer
