<template lang="html">
  <div id="app">
    <div class="header">
    </div>

    <bookings-display class="booking-list"></bookings-display>
    <booking-form class="booking-form"></booking-form>
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

#app {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-auto-rows: 1fr 3fr;
  height: 800px;
}

.header {
  background-image: url("../src/assets/hotel_logo.png");
  background-size: contain;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: black;
}

.booking-list {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}

.booking-form {
  background-color: #1B9AAA;
}

</style>
