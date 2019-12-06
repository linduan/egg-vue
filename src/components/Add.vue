<template>
  <div class="c-add">

  </div>
</template>

<script>
export default {
  name: 'Add',
  data () {
    return {
      
    }
  },
  methods: {
    addNote () {
      let params = {}
      this.$api.note.addNote(params).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .c-add
    text-align left

</style>
