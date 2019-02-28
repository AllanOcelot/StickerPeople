<template>
    <div class="page-wrapper">
        <div class="sp-home-banner">
            <sticker
                v-for="sticker in stickers" :key="sticker"
                :sticker="sticker"
                :imageOnly="true"
                :propWidth="generateHeight()"
                :propHeight="generateWidth()"
                :propZindex="2"
                :propTop="-100"
            />
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1>Welcome to Sticker People!</h1>
                        <p>The online home and portfolio of stiker artists!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <sticker
                v-for="sticker in stickers" :key="sticker" :sticker="sticker" />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Sticker from '@/components/Sticker.vue';

export default {
    name: 'home',
    props: {
    },
    data: function(){
        return {
            stickers: [
                {
                    spStickerAuthor: "AllanCodes",
                    spStickerDateCreated: "02/02/19",
                    spStickerTitle:"Fiat",
                    spStickerBackground:"#000000",
                    spStickerTags: ['Art', 'Explicit', 'Adult', 'Smoke', 'Fantasy']
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"red",
                    spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png"
                }
            ],
        }
    },
    components: {
        Sticker,
    },
    methods: {
        generateWidth() {
            return 500;
        },
        generateHeight() {
            return 750;
        },
    },
}
</script>

<style scoped lang="less">
    .sp-home-banner {
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
</style>
