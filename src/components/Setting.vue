<template>
  <div class="c-setting">
      <div v-for="(category, index) in categories" :key="index" class="group">
        <div class="row">
          <label>类型</label>
          <div>{{category.type}}</div>
        </div>
        <div class="row">
          <label>名称</label>
          <div>{{category.title}}</div>
        </div>
        <div class="cross" @click="delCategory(category)">
          <pagoda-icon  name="cross"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
    return {
      categories: [
        {
          type: '收入',
          title: '工资'
        },
        {
          type: '支出',
          title: '房租'
        }
      ]
    }
  },
  methods: {
    getCategories () {
      this.$api.category.getList().then(res => {
        this.categories = res.data
      })
    },
    delCategory () {
      this.$api.category.delCategory().then(res => {
        this.getCategories()
        console.log(res)
      })
    }
  },
  created () {
    // this.getCategories()
  }
}
</script>
<style lang="stylus" scope>
  .c-setting
    text-align left
    .group
      border-bottom 1px solid #eee
      margin-bottom 20px
      position relative
    .row
      display flex
      align-items center
      padding 10px
      label
        width 120px
        margin-right 20px
    .cross
      position absolute
      right 0
      top 30%
      color #007AFF
      padding 20px
      line-height 10px
</style>