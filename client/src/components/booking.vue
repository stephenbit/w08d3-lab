<template lang="html">
  <div id="booking">
    <ul>
      <li>
        {{ booking.name }}
        <button v-on:click="handleDelete(booking._id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'
export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    handleDelete(id) {
      BookingService.destroyBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
