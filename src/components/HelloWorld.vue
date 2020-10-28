<template>
  <button>John</button>
  <button>Alex</button>
  <button>Mary</button>

  <ul class="respos">
    <li></li>
  </ul>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
