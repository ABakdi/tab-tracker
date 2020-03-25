<template>
<v-layout>
    <v-flex xs4>
        <panel title="Song Matadata">
            <v-text-field
                required
                :rules="[required]"
                name="title" 
                type="text"
                v-model="song.title"
                placeholder="title"
            ></v-text-field>

            <v-text-field
                required
                :rules="[required]"
                name="artist" 
                type="text"
                v-model="song.artist"
                placeholder="artist"
            ></v-text-field>

            <v-text-field
                required
                :rules="[required]"
                name="genre" 
                type="text"
                v-model="song.genre"
                placeholder="genre"
            ></v-text-field>

            <v-text-field
                required
                :rules="[required]"
                name="album" 
                type="text"
                v-model="song.album"
                placeholder="album"
            ></v-text-field>

            <v-text-field
                required
                :rules="[required]"
                name="albumImage" 
                type="text"
                v-model="song.albumImage"
                placeholder="albumImage"
            ></v-text-field>

            <v-text-field
                required
                :rules="[required]"
                name="youtubeID" 
                type="text"
                v-model="song.youtubeID"
                placeholder="youtubeID"
            ></v-text-field>
        </panel>
    </v-flex>
    <v-flex xs8>
        <panel title="Song Structure">
            <v-textarea
                required
                :rules="[required]"
                name="lyrics" 
                type="text"
                v-model="song.lyrics"
                placeholder="lyrics"
                outlined
            ></v-textarea>

            <v-textarea
                required
                :rules="[required]"
                name="tab" 
                type="text"
                v-model="song.tab"
                placeholder="tab"
                outlined
            ></v-textarea>
            <span class="error" v-if="error">
                {{this.error}}
            </span>
            <br/>
            <v-btn
              class="cyan" dark
              @click="save"
            >
            Save Changes
            </v-btn>
        </panel>
    </v-flex>
</v-layout>
</template>

<script>

import Panel from "@/components/Panel.vue"
import SongService from "@/services/SongService"

export default {
    data(){
        return {
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImage: null,
                youtubeID: null,
                lyrics: null,
                tab: null 
            },
            error: null,
            required: (value) => !!value || "Required"
    
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
    methods: {
        async save(){
            //delete this.song.id
            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every(key => !!this.song[key])
            if(!areAllFieldsFilledIn){
                this.error = "Please fill in all the feilds"
                return
            }
            try {
                await SongService.put(this.song,this.song.id)
                this.$router.push({
                    name: "song",
                    params: {
                        songId: this.song.id
                    }
                    
                })
            } catch (error) {
                console.log(error)
            }
        }
        
    }
    
}
</script>

<style scoped>

</style>