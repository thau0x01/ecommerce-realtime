'use strict'

class AdminStoreUser {
  get rules() {
    let userID = this.ctx.params.id
    let rule = ''
    // significa que o usuário tá atualizando
    if (userID) {
      rule = `unique:users,email,id,${userID}`
    } else {
      rule = 'unique:users,email|required'
    }

    return {
      // validation rules
      email: rule,
      image_id: 'exists:images,id'
    }
  }
}

module.exports = AdminStoreUser
