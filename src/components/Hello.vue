<template>
  <div>
    <header-view />
    <subtitle />
    <type />
  </div>
</template>

<script>
import HeaderView from './Header'
import Subtitle from './Subtitle'
import Type from './Type'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    HeaderView,
    Subtitle,
    Type
  }
}
</script>

<style scoped>

</style>
