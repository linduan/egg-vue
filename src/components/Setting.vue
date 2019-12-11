<template>
  <div class="c-setting">
      <div v-for="(category, index) in categories" :key="index" class="group">
        <div class="row">
          <label>类型</label>
          <div>{{category.category_type | typeFilter}}</div>
        </div>
        <div class="row">
          <label>名称</label>
          <div>{{category.category_name}}</div>
        </div>
        <div class="cross" @click="delCategory(category.id)">
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
  filters: {
    typeFilter (val) {
      return val === '1' ? '支出' : '收入'
    }
  },
  methods: {
    getCategories () {
      this.$api.category.getCategoryList().then(res => {
        this.categories = res.data.result
      })
    },
    delCategory (id) {
      this.$api.category.delCategory({id}).then(res => {
        console.log(res)
        this.$toast.success('删除成功!')
        this.getCategories()
      })
    }
  },
  created () {
    this.getCategories()
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