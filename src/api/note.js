import $http from '@/utils/http'
class Note {
  getNoteList (data) {
    return $http.get(`/note/list`, data)
  }
  getNoteDetail (data) {
    return $http.get(`/note/detail`, data)
  }
  addNote (data) {
    return $http.post(`/note/add`, data)
  }
  delNote (data) {
    return $http.post(`/note/del`, data)
  }
}
export default new Note()