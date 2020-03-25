<template>
    <panel title="Search">
        <v-text-field
            name="search" 
            type="text"
            v-model="search"
            placeholder="Search"
        ></v-text-field>
    </panel>

  
</template>

<script>
import Panel from '@/components/Panel.vue'
import _ from 'lodash'
//import SongService from '@/services/SongService'
export default {
    components:{
        Panel
    },

    data(){
        return {
            search : ''
        }
    },
    
    watch:{
        search: _.debounce(async function(){
            const route = {
                name : 'songs'
            }

            if(this.search !== ''){
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        }),
        '$route.query.search': {
            immediate : true,
            handler (value){
                this.search = value
            }
        }
    }
}


</script>

<style>

</style>