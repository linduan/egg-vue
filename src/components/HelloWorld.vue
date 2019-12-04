<template>
  <div class="demo">
    <div class="btns">
      <button @click="getUserList">getUserList</button>
      <button @click="getUserDetail">getUserDetail</button>
      <button @click="addUser">addUser</button>
      <button @click="delUser">delUser</button>

      <button @click="getNoteList">getNoteList</button>
      <button @click="getNoteDetail">getNoteDetail</button>
      <button @click="addNote">addNote</button>
      <button @click="delNote">delNote</button>
    </div>
    
    <div>
      responMsg:
      <div v-for="(res, index) in resList" :key="index">{{res}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      resList: []
    }
  },
  methods: {
    getUserList () {
      this.$api.user.getUserList().then(res => {
        this.resList.push(res)
      })
    },
    getUserDetail () {
      this.$api.user.getUserDetail().then(res => {
        this.resList.push(res)
      })
    },
    addUser () {
      this.$api.user.addUser().then(res => {
        this.resList.push(res)
      })
    },
    delUser () {
      this.$api.user.delUser().then(res => {
        this.resList.push(res)
      })
    },
    getNoteList () {
      this.$api.note.getNoteList().then(res => {
        this.resList.push(res)
      })
    },
    getNoteDetail () {
      this.$api.note.getNoteDetail().then(res => {
        this.resList.push(res)
      })
    },
    addNote () {
      this.$api.note.addNote().then(res => {
        this.resList.push(res)
      })
    },
    delNote () {
      this.$api.note.delNote().then(res => {
        this.resList.push(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .btns
    text-align left
    button
      margin-right 20px
</style>
