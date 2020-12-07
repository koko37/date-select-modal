<template>
  <modal
    :showHeader="false"
    @close="handleClose"
    v-show="true"
    >
      <v-calendar />
  </modal>
</template>

<script>
import Modal from './Modal';

export default {
  name: 'DateTimePicker',
  components: {
    'modal': Modal
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
