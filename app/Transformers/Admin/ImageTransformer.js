'use strict'

const TransformerAbstract = use('Adonis/Addons/Bumblebee/TransformerAbstract')

/**
 * ImageTransformer class
 *
 * @class ImageTransformer
 * @constructor
 */
class ImageTransformer extends TransformerAbstract {
  /**
   * This method is used to transform the data.
   */
  transform(image) {
    // toJSON
    image = image.toJSON()
    return {
      id: image.id,
      url: image.url
    }
  }
}

module.exports = ImageTransformer
