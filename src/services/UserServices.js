import $api from '../http'

export default class UserService {
  static async fetchUsers (email, password) {
    return $api.get('/login', {email, password})
  }
}
