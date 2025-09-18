<template>
  <p>{{ action }} for everyone</p>
  <p>Find your next job at PBA Corp.</p>
</template>

<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build',
      interval: null,
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        const currentActionIndex = actions.indexOf(this.action)
        const nextActionIndex = (currentActionIndex + 1) % actions.length
        const nextAction = actions[nextActionIndex]
        this.action = nextAction
      }, 3000)
    },
  },
}
</script>
