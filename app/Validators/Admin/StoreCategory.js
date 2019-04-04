'use strict'

class AdminStoreCategory {
  get rules() {
    return {
      // validation rules
      title: 'required',
      description: 'description'
    }
  }
}

module.exports = AdminStoreCategory
