<template>
  <div class="c-add">
    <div class="row">
      <pagoda-field readonly clickable label="分类" :value="categoryId" @click="showCategory = true"/>
      <pagoda-popup v-model="showCategory" position="bottom">
        <pagoda-picker show-toolbar :columns="categories" @cancel="showCategory = false" @confirm="confirmCategory"/>
      </pagoda-popup>
    </div>
    <div class="row">
      <pagoda-field readonly clickable label="日期" :value="time" @click="showTime = true"/>
      <pagoda-popup v-model="showTime" position="bottom">
        <pagoda-datetime-picker v-model="date" type="date" @cancel="showTime = false" @confirm="confirmTime"/>
      </pagoda-popup>
    </div>
    <pagoda-cell-group class="row">
      <pagoda-field v-model="amount" required clearable label="金额" placeholder="0.00"/>
    </pagoda-cell-group>
    <pagoda-cell-group class="row">
      <pagoda-field v-model="remark" required clearable label="备注" placeholder="请输入备注"/>
    </pagoda-cell-group>
    <div class="btns">
      <pagoda-button type="primary" size="normal" @click="addNote">保存</pagoda-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Add',
  data () {
    return {
      type: '',
      categoryId: '',
      time: '',
      date: new Date(),
      amount: '',
      remark: '',
      showTime: false,
      showType: false,
      showCategory: false,
      types: ['收入', '支出'],
      categories: []
    }
  },
  methods: {
    addNote () {
      let params = {
        categoryId: this.categoryId,
        time: this.time,
        amount: this.amount,
        remark: this.remark
      }
      console.log('click addNote:', params)
      // this.$api.note.addNote(params).then(res => {
      //   console.log(res)
      // })
    },
    getCategories () {
      this.$api.catagery.getList().then(res => {
        this.categories =  res.data
      })
    },
    confirmType (val) {
      console.log(val)
      this.showType = false
      this.type = val
    },
    confirmCategory (val) {
      console.log(val)
      this.showCategory = false
      // this.categoryId = val
    },
    confirmTime (val) {
      console.log(val)
      this.showTime = false
      let date = new Date(val)
      let y = date.getFullYear()
      let m = ('' + date.getMonth()).padStart(2, '0')
      let d = ('' + date.getDate()).padStart(2, '0')
      this.time = `${y}-${m}-${d}`
    }
  },
  created () {
    // this.getCategories()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-add
    text-align left
    .row
      margin-bottom 40px
    .btns
      padding 10px
      text-align center
</style>
