<template>
  <transition name="v-modal-fade">
    <div class="v-modal-wrapper">
      <div tabIndex="0" @click="close" class="v-modal-backdrop"></div>
      <div
        :class="['v-modal', modalClass]"
        role="dialog"
        :aria-labelledby="title"
        :aria-describedby="description"
      >
        <slot name="header" v-if="showHeader && title">
          <header class="v-modal__header">
            <div class="flex flex-col">
              <div class="v-modal__title">{{ title }}</div>
              <div class="v-modal__description" v-if="description">
                {{ description }}
              </div>
            </div>
            <button type="button" aria-label="Close" @click="close" v-show="showClose">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 1.3335L5.99991 6.00016M5.99991 6.00016L10.6666 10.6668M5.99991 6.00016L10.6666 1.3335M5.99991 6.00016L1.33325 10.6668"
                  stroke="#262F56"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </header>
        </slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    modalClass: String,
  },
  methods: {
    close() {
      this.$emit('close');
    },
  }
}
</script>

<style lang="scss" scoped>
.v-modal-wrapper {
  @apply fixed inset-0 flex justify-center items-center;
  @apply z-50;
}

.v-modal-backdrop {
  @apply absolute inset-0;
  @apply outline-none cursor-pointer z-50;
  background-color: rgba(0, 0, 0, 0.7);
}

.v-modal {
  @apply bg-white shadow-sm flex flex-col;
  @apply z-50 cursor-auto p-5;
  border-radius: .25rem;

  &__header {
    @apply flex flex-row justify-between items-start;
    @apply pb-5;
  }

  &__title {
    @apply font-medium;
    max-width: 80%;
  }

  &__description {
    @apply text-sm mt-1;

    line-height: 22px;
    color: #a7a7a7;
  }
}

.v-modal-fade-enter,
.v-modal-fade-leave-active {
  @apply opacity-0;

  .modal {
    @apply opacity-0;
    transform: translateY(-10%);
  }
}

.v-modal-fade-enter-active,
.v-modal-fade-leave-active {
  transition: all 250ms ease;
  .modal {
    @apply transition-all ease-in-out duration-150;
  }
}
</style>
