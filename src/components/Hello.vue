<template>
  <div>
    <header-view />
    <subtitle />
    <type />
    <calendar />
    <question />
  </div>
</template>

<script>
import HeaderView from './Header'
import Subtitle from './Subtitle'
import Type from './Type'
import Question from './QandA'
import Calendar from './Calendar'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    HeaderView,
    Subtitle,
    Type,
    Question,
    Calendar
  }
}
</script>

<style scoped>

</style>
