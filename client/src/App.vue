<template lang="html">
  <div id="app">
    <img class="logo" src="../src/assets/hotel_logo.png">
    <bookings-display></bookings-display>
    <booking-form></booking-form>
  </div>

</template>

<script>
import BookingsDisplay from './components/BookingsDisplay'
import BookingForm from './components/BookingForm'
export default {
  name: 'app',
  components: {
    'bookings-display': BookingsDisplay,
    'booking-form': BookingForm
  }
}
</script>

<style lang="css" scoped>

.logo {
  height: 20%;
}

</style>
