<template>
  <div>
    <h1>Register</h1>

    <input name="email" 
      type="email"
      placeholder="email"
      v-model="email"
      >
    <br/>
    <input name="password"
        type="password"
        placeholder="password"
        v-model="password"
        >
    <br/>
    <div class="error" v-html="error"></div>
    <button @click="register">Register</button>

  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
//import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
      
    }
  },

  methods: {
    async register(){
      try{
        const response = await AuthenticationService.register(
          {
            email: this.email,
            password: this.password
          }
      )
      console.log(response.data)

    }catch(error){
      this.error = error.response.data.error
    }
  },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

</style>
