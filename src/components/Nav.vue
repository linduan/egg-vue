<template>
  <div class="c-nav">
    <slot name="pre">
      <pagoda-icon v-if="nav.preIcon" class="nav pre" :name="nav.preIcon" @click="toPage(nav.pre)" />
    </slot>
    <div>{{nav.title}}</div>
    <slot name="next">
      <pagoda-icon v-if="nav.preIcon" class="nav next" :name="nav.nextIcon" @click="toPage(nav.next)"/>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'c-nav',
  data () {
    return {
      nav: {
        title: '记账本',
        preIcon: 'wap-nav',
        nextIcon: 'plus',
        pre: 'Setting',
        next: 'Add'
      }
    }
  },
  watch: {
    $route () {
      const {nav} = this.$route.meta
      this.nav = nav
      console.log('watch:', this.nav)
    }
  },
  methods: {
    toPage (name) {
      // 配置为pre 或者 next 执行自定义事件而非跳转路由
      name && this.$router.push({name})
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-nav
    text-align center
    font-size 60px
    line-height 80px
    height 80px
    position relative
    font-weight bold
    margin 20px
    .nav
      position absolute
      width 80px
      height 100%
      top 0px
      line-height 80px
    .pre
      left 0px
    .next
      right 0px
</style>
