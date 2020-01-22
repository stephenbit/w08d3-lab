<template lang="html">
  <div id="bookingsDisplay">
    <booking v-for="eachBooking in bookings" :booking="eachBooking"></booking>
  </div>

</template>

<script>

import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'
import Booking from './booking.vue'

export default {
  name: 'bookings-display',
  components: {
    'booking': Booking
  },
  data () {
    return {
      bookings: []
    }
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(returnedBookings => this.bookings = returnedBookings);
    }
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added', newBooking => this.bookings.push(newBooking))

    eventBus.$on('booking-deleted', id => {
      const bookingsToKeep = this.bookings.filter(
        eachBooking => eachBooking._id !== id)
        this.bookings = bookingsToKeep
    })
  }
}
</script>

<style lang="css" scoped>
</style>
