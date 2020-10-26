<template>
  <div>
    <app-main/>
    <app-snackbar/>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import AppSnackbar from '../components/snackbar/AppSnackbar'
export default {
  name: 'Layout',
  components: { AppSnackbar, AppMain }
}
</script>

<style scoped>

</style>
