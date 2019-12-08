<template>
  <div class="c-setting-add">
    <div class="row">
      <pagoda-field readonly clickable label="类型" :value="type" @click="showType = true"/>
      <pagoda-popup v-model="showType" position="bottom">
        <pagoda-picker show-toolbar :columns="types" @cancel="showType = false" @confirm="confirmType"/>
      </pagoda-popup>
      <pagoda-cell-group class="row">
        <pagoda-field v-model="title" clearable label="名称" placeholder="请输入分类名称"/>
      </pagoda-cell-group>
    </div>
    <div class="btns">
      <pagoda-button type="primary" size="normal" @click="addCategory">保存</pagoda-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SettingAdd',
  data () {
    return {
      showType: false,
      type: '',
      title: '',
      types: ['收入', '支出']
    }
  },
  methods: {
    addCategory () {
      let params = {
        type: this.type,
        title: this.title
      }
      this.$api.category.addCategory(params).then(res => {
        console.log(res)
        this.$toast.success('添加成功!')
      })
    },
    confirmType (val) {
      this.type = val
      this.showType = false
    }
  }
}
</script>
<style lang="stylus" scope>
  .c-setting-add
    text-align left
    .row
      margin-bottom 40px
    .btns
      padding 10px
      text-align center
</style>