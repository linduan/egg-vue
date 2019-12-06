import $http from '@/utils/http'
class Category {
  getCategoryList (data) {
    return $http.get(`/category/list`, data)
  }
  getCategoryDetail (data) {
    return $http.get(`/category/detail`, data)
  }
  addCategory (data) {
    return $http.post(`/category/add`, data)
  }
  delCategory (data) {
    return $http.post(`/category/del`, data)
  }
}
export default new Category()