<template>
  <div class="c-home">
    <div class="title"></div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      resList: []
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-home
    text-align left
</style>
