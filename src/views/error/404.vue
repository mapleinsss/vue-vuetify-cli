<template>
  <div class="bg">
    <img src="@/assets/images/404.jpg" alt="404"/>
    <h3>抱歉！你访问的页面未找到，即将在 {{count}} 秒返回首页</h3>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  data () {
    return {
      count: 3
    }
  },
  methods: {
    countdown () {
      const TIME_COUNT = 3
      if (!this.timer) {
        this.count = TIME_COUNT
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            clearInterval(this.timer)
            this.timer = null
            this.$router.push('/index')
          }
        }, 1000)
      }
    }
  },
  mounted () {
    this.countdown()
  }
}
</script>

<style scoped>
  .bg {
    background-color: #DCECF9;
    height: 100vh;
    text-align: center;
    vertical-align: center;
  }

  .bg img {
  }
</style>
