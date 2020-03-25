<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Song">
          <div class="song">
            <v-layout>
              <v-flex xs5>
                <div class="song-title">
                    {{this.song.title}}
                </div>
                <div class="song-artist">
                    {{this.song.artist}}
                </div>
                <div class="song-album">
                    {{this.song.genre}}
                </div>

                <v-btn 
                  class="cyan accent-2"
                  @click="navigateTo({name: 'edit-song',
                   params: {songId: song.id}})"
                  light
                  small
                  absolute
                  middle
                  fab>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-flex>

              <v-flex xs6>
                <img class="album-image" :src="this.song.albumImage"/>
                <br/>
                <div class="song-album">
                    {{this.song.album}}
                </div>
              </v-flex>
            </v-layout>
          </div>
        </panel>
      </v-flex>

      <v-flex xs6 class="ml-2">
        <panel title="TAB">
        <textarea
          name="tab" 
          type="text"
          v-model="this.song.tab"
          readonly
        ></textarea>
        </panel>
      </v-flex>
    </v-layout>

    <v-layout>
    <v-flex xs6>
      <panel title="Song">
          <youtube :video-id="this.song.youtubeID"></youtube>
      </panel>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <panel title="Lyrics">
      <textarea
        name="lyrics" 
        type="text"
        v-model="this.song.lyrics"
        readonly
      ></textarea>
      </panel>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import Panel from '@/components/Panel.vue'
import SongService from '@/services/SongService'

export default {
  data(){
    return {
      song: null
    }

  },
  async mounted(){
    const songId = this.$store.state.route.params.songId
    const song = await SongService.show(songId)  
    this.song = song.data  
  },
  components: {
        Panel
  },
   methods:{
        navigateTo(route){
          console.log(route)
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
textarea{
  width: 100%;
  font-family: monospace;
  height: 330px;
  border: none;
  border-style: none;
  border-color: transparent;
  padding: 20px;
  overflow: auto;
}


</style>