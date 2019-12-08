import $http from '@/utils/http'
class Note {
  getNoteList (data) {
    return $http.get(`/note/list`, data, '获取账目列表失败!')
  }
  getNoteDetail (data) {
    return $http.get(`/note/detail`, data, '获取账目详情失败!')
  }
  addNote (data) {
    return $http.post(`/note/add`, data, '添加账目失败!')
  }
  delNote (data) {
    return $http.post(`/note/del`, data, '删除账目失败!')
  }
}
export default new Note()