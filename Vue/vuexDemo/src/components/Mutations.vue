<template>
  <div>
    <h3>{{ msg }}</h3>
    <hr>
    <h3>{{ count }}</h3>
    <button @click="add(5)">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Count',
  data () {
    return {
      msg: 'Vuex 获取store中的值 三'
    }
  },
  computed: mapState(['count']),
  methods: mapMutations(['add', 'reduce']),
  store
}
</script>
