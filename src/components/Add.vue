<template>
  <div class="c-add">
    <div>
      <pagoda-field readonly clickable label="类型" :value="type" @click="showType = true"/>
      <pagoda-popup v-model="showType" position="bottom">
        <pagoda-picker show-toolbar :columns="types" @cancel="showType = false" @confirm="confirmType"/>
      </pagoda-popup>
    </div>
    <div>
      <pagoda-field readonly clickable label="分类" :value="categoryId" @click="showCategory = true"/>
      <pagoda-popup v-model="showCategory" position="bottom">
        <pagoda-picker show-toolbar :columns="categories" @cancel="showCategory = false" @confirm="confirmCategory"/>
      </pagoda-popup>
    </div>
    <div>
      <pagoda-field readonly clickable label="日期" :value="time" @click="showTime = true"/>
      <pagoda-popup v-model="showTime" position="bottom">
        <pagoda-datetime-picker v-model="date" type="date" @cancel="showTime = false" @confirm="confirmTime"/>
      </pagoda-popup>
    </div>
    <pagoda-cell-group>
      <pagoda-field v-model="amount" required clearable label="金额" placeholder="0.00"/>
    </pagoda-cell-group>
    <pagoda-cell-group>
      <pagoda-field v-model="remark" required clearable label="备注" placeholder="请输入备注"/>
    </pagoda-cell-group>
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
      let params = {}
      this.$api.note.addNote(params).then(res => {
        console.log(res)
      })
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-add
    text-align left
    .item
      padding 20px
      label
        width 80px
</style>
