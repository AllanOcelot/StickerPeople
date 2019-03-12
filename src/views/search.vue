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
                    <div class="pre-loader-container"
                         v-if="!isError">
                         <div class="preloader"></div>
                         Loading stickers...
                    </div>
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
            searchString: this.$route.params.search,
            isLoading: true,
            isError: false,
            stickers: [],
        }
    },
    methods: {
        defaultLoad(){
            console.log('Function: defaultLoad fired');
            var self = this;
            var apiCallURl = 'http://localhost:3030/search';
            if(this.$route.params.search){
                apiCallURl = 'http://localhost:3030/search/' + this.$route.params.search;
            }else{
                console.log('nah');
            }
            axios.get(apiCallURl).then(function(response){
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
    },
    watch: {
        '$route.params.search': function (search) {
          this.defaultLoad();
        },
    }
}
</script>

<style scoped lang="less">
    .pre-loader-container {
        display: block;
        width: 100%;
        height: auto;
        .preloader {
            display: block;
            margin: 100px auto;
            width: 100px;
            height: 100px;
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url('/assets/images/preloader.gif');
        }
    }
</style>
