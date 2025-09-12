<template>
  <img :src="imageLink" alt="profile image" class="h-8 w-8 rounded-3xl object-contain" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink: './src/assets/shoaib photo.png',
    }
  },
}
</script>
