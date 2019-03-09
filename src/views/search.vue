<template>
    <div class="">
        <div class="" v-if="!isLoading && !isError">
            <p>STICKER DATA IS:</p>
            {{stickers}}
            <br>
            <hr>
            <p>GET FIRST STICKER</p>
            {{stickers[0]["NAME"]}}
            <sticker
                v-for="sticker in stickers" :key="sticker"
                :sticker="sticker"
            />
        </div>
        <div class="" v-else>
            <h1 v-if="!isError">Loading stickers...</h1>
            <h1 v-else>Oh no, there was an error!</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sticker from '@/components/Sticker.vue';

export default {
    name: 'Search',
    props: {
    },
    components: {
        Sticker,
    },
    data: function(){
        return {
            isLoading: true,
            isError: false,
            stickers: [],
        }
    },
    methods: {
        defaultLoad(){
            var self = this;
            console.log('Default load called');
            axios.get('http://localhost:3030/search').then(function(response){
                self.isLoading = false;
                self.stickers =response.data;
            }).catch(function (error) {
                self.isError = true;
                console.log('E R R O R - AttemptLogin function // Login vue');
            });
        },
    },
    created: function(){
        this.defaultLoad();
    }
}
</script>

<style scoped lang="less">

</style>
