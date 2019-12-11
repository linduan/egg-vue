import $http from '@/utils/http'
class Note {
  getNoteList (data) {
    return $http.get(`/record/list`, data, '获取账目列表失败!')
  }
  addNote (data) {
    return $http.post(`/record/add`, data, '添加账目失败!')
  }
  updateNoteList (data) {
    let {id} = data
    return $http.get(`/record/update/${id}`, data, '更新账目列表失败!')
  }
  getNoteDetail (data) {
    return $http.get(`/record/detail`, data, '获取账目详情失败!')
  }
  delNote (data) {
    let {id} = data
    return $http.post(`/record/remove/${id}`, data, '删除账目失败!')
  }
}
export default new Note()