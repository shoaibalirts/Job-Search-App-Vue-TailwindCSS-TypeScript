<template>
  <button class="button primary">
    {{ loginText }}
  </button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: {
    loginText: String,
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
