<template>
    <div class="page-wrapper">
        <div class="sp-home-banner">
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
            <div class="row">
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker2'/>
                </div>
                <div class="col-sm-4">
                    <sticker :sticker='this.sticker'/>
                </div>
            </div>
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
            sticker : {
                spStickerAuthor: "AllanCodes",
                spStickerDateCreated: "02/02/19",
                spStickerTitle:"Fiat",
                spStickerBackground:"#000000",
                spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png",
                spStickerTags: ['Art', 'Explicit', 'Adult', 'Smoke', 'Fantasy']
            },
            sticker2 : {
                spStickerAuthor: "Allan Ocelot",
                spStickerDateCreated: "02/04/19",
                spStickerTitle:"ART",
                spStickerBackground:"red",
                spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png"
            }
        }
    },
    components: {
        Sticker,
    }
}
</script>

<style scoped lang="less">
    .sp-home-banner {
        display: block;
        position: relative;
        padding: 150px 0 100px 0;
        background: #232231;
        color: #fff;
        border-bottom: 1px solid #52525229;
        margin-bottom: 40px;
    }
</style>
