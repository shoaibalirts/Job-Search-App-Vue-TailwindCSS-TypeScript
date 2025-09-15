<template>
  <button :class="buttonClass">
    {{ loginText }}
  </button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: ['loginText', 'isPrimary'],
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
        primary: this.isPrimary,
        secondary: !this.isPrimary,
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
  @apply text-brand-blue-1 hover:bg-brand-blue-2 border-0 bg-transparent hover:text-white;
}
.secondary {
}
</style>
