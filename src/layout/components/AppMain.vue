<template>
  <v-main>
    <v-container fluid>
      <transition name="fade" mode="out-in">
<!--        <keep-alive :include="cachedViews" :max="10">-->
<!--          <router-view :key="key"/>-->
<!--        </keep-alive>-->
        <router-view/>
      </transition>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped>

</style>
