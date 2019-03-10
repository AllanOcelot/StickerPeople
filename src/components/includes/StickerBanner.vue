<template>
    <div class="sp-sticker-banner">
        <sticker
            v-for="sticker in stickers" :key="sticker.ID"
            :sticker="sticker"
            :imageOnly="true"
            :propWidth="generateHeight()"
            :propHeight="generateWidth()"
            :propZindex="generateZIndex()"
            :propTop="generatePosition()"
            :propLeft="generatePosition('x')"
            :propRotate="generateRotation()"
        />
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="sp-home-banner-content">
                        <h1>{{propTitle}}</h1>
                        <p>{{propSubtitle}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Sticker from '@/components/Sticker.vue';

export default {
    name: 'StickerBanner',
    sticker_width: 0,
    sticker_height: 0,
    sticker_rotation: 0,
    props: ['propTitle', 'propSubtitle'],
    data: function(){
        return {
            stickers: [],
        }
    },
    components: {
        Sticker,
    },
    beforeMount: function() {
        this.defaultLoad();
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
        generateWidth() {
            this.sticker_width = Math.floor(Math.random() * 300) + 220;
            return this.sticker_width;
        },
        generateHeight() {
            this.sticker_height = Math.floor(Math.random() * 300) + 220;
            return this.sticker_height;
        },
        generateRotation() {
            this.sticker_rotation = Math.floor(Math.random() * 359);
            return this.sticker_rotation;
        },
        generateZIndex() {
            return Math.floor(Math.random() * 50);
        },
        generatePosition(axis) {
            var digits;
            var returnString = '';

            if(axis === 'x'){
                digits = Math.floor(Math.random() * 100);
            }else{
                digits = Math.floor(Math.random() * 50);
            }
            // Randomise positive and negative
            if (!Math.random() >= 0.5) {
                returnString = '-';
            }
            return returnString + '' + digits;
        }
    },
}
</script>

<style scoped lang="less">
    .sp-sticker-banner {
        display: flex;
        position: relative;
        align-items: center;
        background: #232231;
        color: #fff;
        border-bottom: 1px solid #52525229;
        margin-bottom: 40px;
        min-height: 60vh;
        overflow: hidden;
    }
    .sp-sticker-banner:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 51;
        background-color: rgba(0,0,0,0.8);
    }
    .sp-sticker-banner .container {
        position: relative;
        z-index: 55;
    }
    .sp-sticker-banner-content {
        z-index: 100;
        text-shadow: 1px 0 0 rgba(255,255,255, 0.5);
    }
</style>
