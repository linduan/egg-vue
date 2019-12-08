<template>
  <div class="c-home">
    <div class="note" :class="{'red': note.type === 1}" v-for="(note, index) in noteList" :key="index">
      <div class="column first-column">
        <div >{{note.title}}</div>
        <div class="gray-text" v-if="note.remark">{{note.remark}}</div>
      </div>
      <div class="column">
        <div>{{note.cost}}</div>
        <div class="gray-text">{{note.date}}</div>
      </div>
      <div class="cross" @click="delNote(note)">
        <pagoda-icon  name="cross"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      noteList: [
        {
          id: 1,
          title: '低保金',
          cost: 123.00,
          date: '2019-12-04',
          type: 1,
          remark: '每月一次'
        },
        {
          id: 2,
          title: '吃饭',
          cost: 1230,
          date: '2019-12-07'
        },
        {
          id: 3,
          title: '房租',
          cost: 1230,
          date: '2019-12-01'
        }
      ]
    }
  },
  methods: {
    getNoteList () {
      let params = {}
      console.log('getNoteList', params)
      // this.$api.note.getNoteList(params).then(res => {
      //   console.log(res)
      //   this.noteList = res.data
      // })
    },
    delNote (note) {
      let params = { id: note.id }
      console.log('delNote', params)
      // this.$api.note.delNote(params).then(res => {
      //   console.log(res)
      //   this.getNoteList()
      // })
    }
  },
  created () {
    this.getNoteList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-home
    text-align left
    .note
      color #008C3C
      font-size 60px
      display flex
      padding 40px
      align-items center
      border-bottom 2px solid #DDD
      &.red
        color #F7534F
      .first-column
        margin-right 30px
        width 250px
      .column
        flex 1
      .gray-text
        padding-top 10px
        font-size 36px
        color #666
      .cross
        color #007AFF
        padding 20px
        line-height 10px
</style>
