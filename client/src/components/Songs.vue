<template>
    <v-layout centered>
    <v-flex xs6 offset-xs3>
        <search/>
      <panel title="Songs">
          <v-btn 
            slot="action"
            class="cyan accent-2"
            @click="navigateTo({name: 'songs-create'})"
            light
            small
            absolute
            right
            middle
            fab>
            <v-icon>add</v-icon>

          </v-btn>
          <div class="song"
           v-for="song in songs" :key="song.id">
            <v-layout>
                <v-flex xs5>
                    <div class="song-title">
                        {{song.title}}
                    </div>
                    <div class="song-artist">
                        {{song.artist}}
                    </div>
                    <div class="song-album">
                        {{song.genre}}
                    </div>
                    <v-btn
                        class="cyan" dark
                        @click="navigateTo({name:'song', params:{songId: song.id}})"
                        >
                        View
                    </v-btn>
                </v-flex>

                <v-flex xs6>
                    <img class="album-image" :src="song.albumImage"/>
                </v-flex>
            </v-layout>
          </div>
      </panel>
    </v-flex>
  </v-layout>
    
</template>

<script>

import Panel from '@/components/Panel.vue'
import Search from '@/components/Search.vue'

import SongService from '@/services/SongService'

export default {
    components: {
        Panel,
        Search
    },
    data () {
        return {
            songs:null
        }
    },
    watch:{
        '$route.query.search': {
            immediate : true,
            async handler (value){
                console.log(value);
                
                const sgs =  await SongService.index({params: {
                    search : value
                }})
                this.songs = sgs.data
            }
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    }
    
}
</script>

<style scoped>
.song{
    padding: 20px;
    height: 330px;
    overflow: hidden;
}
.song-title{
    font-size: 35px;
}
.song-artist{
    font-size: 25px;
}
.song-genre{
    font-size: 10px;
}
.album-image{
    width: 70%;
    margin: 0 auto;
}

</style>