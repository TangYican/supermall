<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar
    },
    computed: {
      //第1种语法
      // ...mapGetters(['cartLength','cartList])

      //第2种语法
      ...mapGetters({
        length: 'cartLength',
        list: 'cartList'
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;

  }
</style>
