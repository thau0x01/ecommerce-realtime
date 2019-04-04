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
      url: image.url,
      size: image.size,
      original_name: image.original_name,
      extension: image.extension
    }
  }
}

module.exports = ImageTransformer
