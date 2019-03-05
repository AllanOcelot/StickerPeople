<template>
    <div class="page-wrapper">
        <stickerBanner
            propTitle="This is a test"
            propSubtitle="This is subtitle"
        />
        <div class="container">
            <sticker
                v-for="sticker in stickers" :key="sticker" :sticker="sticker"
            />
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import StickerBanner from '@/components/includes/StickerBanner.vue';
import Sticker from '@/components/Sticker.vue';

export default {
    name: 'home',
    sticker_width: 0,
    sticker_height: 0,
    sticker_rotation: 0,
    props: {
    },
    components: {
        Sticker,
        StickerBanner,
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
                    spStickerImageUrl:"https://smallimg.pngkey.com/png/small/139-1396773_sticker-transparent-girly-sticker-tumblr-pink-png.png"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"http://www.stickpng.com/assets/images/580b585b2edbce24c47b2a1f.png"
                },
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
                    spStickerImageUrl:"http://static1.squarespace.com/static/58c3668b2994cae7ec5fc536/58e1658e9de4bba768683b68/5a13b073f9619a97a1309fea/1511239796953/Bus+Sticker.png"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"https://cdn.shopify.com/s/files/1/0104/8882/products/batman-macbook-sticker-600x600.png?v=1520335105"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"http://static1.squarespace.com/static/58c3668b2994cae7ec5fc536/58e1658e9de4bba768683b68/5a13b073f9619a97a1309fea/1511239796953/Bus+Sticker.png"
                }
            ],
        }
    },
    methods: {
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
    .sp-home-banner:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 51;
        background-color: rgba(0,0,0,0.8);
    }
    .sp-home-banner .container {
        position: relative;
        z-index: 55;
    }
    .sp-home-banner-content {
        z-index: 100;
        text-shadow: 1px 0 0 rgba(255,255,255, 0.5);
    }
</style>
