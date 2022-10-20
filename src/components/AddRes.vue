<template>
  <header-com />
  <h1>Hello User, Welcome to Add-Restaurant Page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name" >
    <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address" >
    <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact" >
    <button type="button" @click="addRestau">Add New Restau</button>
  </form>
</template>

<script>
import HeaderCom from './HeaderCom.vue'
import axios from 'axios'

export default {
    name: 'AddRes',
    components: {
      HeaderCom
    },
    data() {
      return {
        restaurant: {
          name: '',
          address: '',
          contact: ''
        }
      }
    },
    methods: {
      async addRestau() {
        console.warn(this.restaurant)
        const result = await axios.post('http://localhost:3000/restaurant', {
          name:this.restaurant.name,
          address:this.restaurant.address,
          contact:this.restaurant.contact,
        })
        if(result.status == 201) {
          this.$router.push({name:'HomePage'})
        }
        console.warn('result', result)
      }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(!user) {
            this.$router.push({name: 'SignUp'})
        }
    }
}
</script>

<style>

</style>