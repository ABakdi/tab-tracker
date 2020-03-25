<template>
  <v-layout centered>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form autocomplete="off">
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
              @click="register"
            >
            Register
            </v-btn>
          </form>
      </panel>
    </v-flex>



  </v-layout>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel.vue'

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
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
       this.$router.push({
                name: 'songs'
            })

    }catch(error){
      this.error = error.response.data.error
    }
  },

  },
  components: {
        Panel
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}

</style>
