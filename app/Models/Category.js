'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  /**
   * Relacionamento entre Categoria e Imagem de destaque
   */
  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
   * Relacionamento entre Categoria e Produtos
   */
  products() {
    return this.belongsToMany('App/Models/Product')
  }
}

module.exports = Category
