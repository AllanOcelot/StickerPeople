<template>
    <div class="">
        <stickerBanner
            propTitle="Sticker Search"
        />
        <div class="" v-if="$route.params.search">
            you did a search for {{ $route.params.search }}
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-4" v-for="sticker in stickers"  v-if="!isLoading && !isError">
                    <sticker
                        :key="sticker.ID"
                        :sticker="sticker"
                    />
                </div>
                <div class="col-sm-12" v-else>
                    <h1 v-if="!isError">Loading stickers...</h1>
                    <h1 v-else>Oh no, there was an error!</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Router from 'vue-router';

import StickerBanner from '@/components/includes/StickerBanner.vue';
import Sticker from '@/components/Sticker.vue';

export default {
    name: 'Search',
    props: {
    },
    components: {
        StickerBanner,
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
            axios.get('http://localhost:3030/search').then(function(response){
                self.isLoading = false;
                self.stickers = response.data;
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
