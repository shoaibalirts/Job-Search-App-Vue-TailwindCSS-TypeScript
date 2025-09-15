<template>
  <button :class="buttonClass">
    {{ loginText }}
  </button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: {
    loginText: String,
    primaryButton: Boolean,
  },
  data() {
    return {
      primary: true,
    }
  },
  computed: {
    buttonClass() {
      return {
        primary: this.primary,
      }
    },
  },
}
</script>
<style scoped>
@reference "@/main.css";

button {
  @apply rounded px-5 py-3 font-medium;
}
.primary {
  @apply bg-brand-blue-1 hover:shadow-blue border-0 text-white;
}

.secondary {
}
</style>
