'use strict'

class AuthRegister {
  get rules() {
    return {
      name: 'required',
      surname: 'required',
      email: 'required|email|unique:users,email',
      password: 'required|confirmed'
    }
  }

  get messages() {
    return {
      'name.required': 'O nome é obrigatório!',
      'surname.required': 'O sobrenome é Obrigatório!',
      'email.required': 'O e-mail é obrigatório!',
      'email.email': 'E-mail inválido!',
      'email.unique': 'Este E-mail já existe!',
      'password.required': 'A senha é obrigatória!',
      'password.confirmed': 'As senhas não são iguais!'
    }
  }
}

module.exports = AuthRegister
