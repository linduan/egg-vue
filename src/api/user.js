import $http from '@/utils/http'
class User {
  getUserList (data) {
    return $http.get(`/user/list`, data)
  }
  getUserDetail (data) {
    return $http.get(`/user/detail`, data)
  }
  addUser (data) {
    return $http.post(`/user/add`, data)
  }
  delUser (data) {
    return $http.post(`/user/del`, data)
  }
}
export default new User()