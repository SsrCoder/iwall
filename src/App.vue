<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      img:
        'https://konachan.com/jpeg/b21daf2c057692c869e79ed4f3363829/Konachan.com%20-%20281360%202girls%20blue_eyes%20blue_hair%20blush%20breasts%20cunnilingus%20headdress%20nipples%20nude%20pink_eyes%20pink_hair%20short_hair%20spread_legs%20thighhighs%20twins%20yuri.jpg',
    }
  },
  created() {
    this.img =
      'https://konachan.com/jpeg/db9e1ff76f26c77ed578c1f4803cddfb/Konachan.com%20-%20272795%20animal%20ayamy%20bed%20blush%20bow%20bra%20braids%20breasts%20candy%20cat%20catgirl%20fang%20hat%20horns%20navel%20panties%20puck%20pumpkin%20ribbons%20signed%20tail%20tattoo%20twins%20wink.jpg'
  },
})
</script>

<style lang="stylus">
*
  margin 0
  padding 0

#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  // text-align center
  color #2c3e50
  // margin-top 60px

img
  width 100vw
  height 100vh
</style>
