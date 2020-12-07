<template>
  <div id="app">
    <button @click="handleClick" class="bg-blue-500 text-white py-2 px-4 rounded">Click Me</button>

    <date-time-picker
      v-if="showModal"
      @close="handleClose"
      />
  </div>
</template>

<script>
import './assets/scss/index.scss';
import DateTimePicker from './components/DateTimePicker';

export default {
  name: 'App',
  components: {
    'date-time-picker': DateTimePicker
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    handleClick() {
      this.showModal = true;
    },
    handleClose() {
      this.showModal = false;
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    @apply flex flex-col justify-center items-center;
    height: 100vh;
  }
</style>