<template lang="html">
  <div id="booking">
    <ul>
      <li>
        <p>Name: {{ booking.name }}</p>
        <p>email: {{ booking.email }}</p>
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

li {
  list-style: none;
  border: 6px solid #DDDBCB;
  background-color: #1B9AAA;
  padding: 10px;
  width: 200px;
  height: 120px;
  font-weight: bold;
  font-family: fantasy;
}

</style>
