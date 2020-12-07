<template>
  <modal
    :showHeader="false"
    @close="handleClose"
    v-show="true"
    >
      Lorem ipsum Hello World This is Tah<br/>
      ABC
  </modal>
</template>

<script>
import Modal from './Modal'
export default {
  name: 'DateTimePicker',
  components: {
    modal: Modal
  },
  data() {
    return {

    }
  },
  methods: {
    handleClose() {
      this.$emit('close');
    }
  }
}
</script>
