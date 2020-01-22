<template lang="html">
  <form class="booking-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" name="name" value="" v-model="name">
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" name="email" value="" v-model="email">
    </div>
    <input type="submit" name="" value="Book!">
  </form>
</template>

<script>
import { eventBus } from '../main.js'
import BookingService from '../services/BookingService.js'
export default {
  name: 'booking-form',
  data(){
    return {
      name: '',
      email: '',
      checkedIn: false
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checkedIn: this.checkedIn
      };
      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking)
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
