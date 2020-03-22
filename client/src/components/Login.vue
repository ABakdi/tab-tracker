<template>
  <v-layout centered>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <br/>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form>
            <v-text-field
              name="email" 
              type="email"
              v-model="email"
              placeholder="email"
              outlined
            ></v-text-field>
            
            <v-text-field
              name="password" 
              type="password"
              placeholder="password"
              v-model="password"
              outlined
            ></v-text-field>
            <div class="error" v-html="error"></div>
            <v-btn
              class="cyan" dark
              @click="login"
            >
            Login
            </v-btn>
          </form>
        </div>
      </div>
    </v-flex>



  </v-layout>
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
  async login(){
    try{
        const response = await AuthenticationService.login(
          {
            email: this.email,
            password: this.password
          }
      )
      console.log(response.data)

    }catch(error){
      this.error = error.response.data.error
    }

      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

</style>
