<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 mx-auto flex h-full flex-nowrap border-b border-solid px-8">
        <a :href="url" target="_blank" class="flex h-full items-center text-xl">{{ company }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full first:ml-0" v-for="menuItem in menuItems" :key="menuItem">
              <a href="/" class="py flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else @click="loginUser" :login-text="loginText" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: 'PBA Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Location', 'Life at PBA Corp', 'Students', 'Jobs'],
      isLoggedIn: false,
      loginText: 'Sign in',
      imageLink: './src/assets/shoaib photo.png',
    }
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true
    },
  },
}
</script>
