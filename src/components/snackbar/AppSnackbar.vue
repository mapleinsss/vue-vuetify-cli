<template>
    <div class="text-center">
      <v-snackbar v-model="snackbar.show"
                  :color="snackbar.color"
                  class="white--text"
                  :timeout="snackbar.timeout||3000"
                  top>
        <template>
          <v-icon small>{{snackbar.icon}}</v-icon>
        </template>
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn color="secondary" text v-bind="attrs" @click="hideSnackbar">
            关闭
          </v-btn>
        </template>
      </v-snackbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppSnackbar',
  methods: {
    hideSnackbar () {
      this.$store.dispatch('snackbar/hideSnackbar')
    }
  },
  computed: {
    ...mapGetters(['snackbar'])
  }
}
</script>

<style scoped>

</style>
