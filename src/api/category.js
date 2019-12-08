import $http from '@/utils/http'
class Category {
  getCategoryList (data) {
    return $http.get(`/category/list`, data, '获取分类列表失败!')
  }
  getCategoryDetail (data) {
    return $http.get(`/category/detail`, data, '获取分类详情失败!')
  }
  addCategory (data) {
    return $http.post(`/category/add`, data, '添加分类失败!')
  }
  delCategory (data) {
    return $http.post(`/category/del`, data, '删除分类失败!')
  }
}
export default new Category()