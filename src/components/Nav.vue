<template>
  <div class="c-nav">
    <slot name="pre">
      <pagoda-icon class="nav pre" :name="nav.pre" @click="toPage(nav.preRouter)" />
    </slot>
    <div>{{nav.title}}</div>
    <slot name="next">
      <pagoda-icon class="nav next" :name="nav.next" @click="toPage(nav.nextRouter)"/>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'c-nav',
  props: {
    msg: String
  },
  data () {
    return {
      nav: {
        title: '记事本',
        pre: 'arrow-left',
        next: 'arrow',
        preRouter: '',
        nextRouter: ''
      }
    }
  },
  watch: {
    $route () {
      const {nav} = this.$route.meta
      this.nav = Object.assign({}, this.nav, nav)
      console.log('watch:', this.nav)
    }
  },
  methods: {
    toPage (name) {
      name && this.$router.push({name})
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-nav
    text-align center
    font-size 36px
    line-height 80px
    height 80px
    position relative
    font-weight bold
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
