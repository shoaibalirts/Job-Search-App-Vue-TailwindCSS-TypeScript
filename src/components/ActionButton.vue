<template>
  <button :class="buttonClass">
    {{ loginText }}
  </button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: ['loginText', 'type'],
  // props: {
  //   loginText: String,
  //   isPrimary: Boolean,
  // },
  // data() {
  //   return {
  //     primary: this.isPrimary,
  //   }
  // },
  computed: {
    buttonClass() {
      return {
        primary: this.type === 'primary',
        secondary: this.type === 'secondary',
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
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply border-0 bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
.secondary {
}
</style>
