<template>
    <div class="sp-sticker-banner">
        <sticker
            v-for="sticker in stickers" :key="sticker"
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
import Sticker from '@/components/Sticker.vue';

export default {
    name: 'StickerBanner',
    sticker_width: 0,
    sticker_height: 0,
    sticker_rotation: 0,
    props: ['propTitle', 'propSubtitle'],
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
                    spStickerImageUrl:"http://static1.squarespace.com/static/58c3668b2994cae7ec5fc536/58e1658e9de4bba768683b68/5a13b073f9619a97a1309fea/1511239796953/Bus+Sticker.png"
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
                    spStickerImageUrl:"http://static1.squarespace.com/static/58c3668b2994cae7ec5fc536/58e1658e9de4bba768683b68/5a13b073f9619a97a1309fea/1511239796953/Bus+Sticker.png"
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
                    spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"https://devstickers.com/assets/img/pro/yjp0.png"
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
                    spStickerImageUrl:"https://b.kisscc0.com/20180718/ybe/kisscc0-mail-carrier-encapsulated-postscript-postman-5b4ed77531b1b5.0431478215318936212036.jpg"
                },
                {
                    spStickerAuthor: "Allan Ocelot",
                    spStickerDateCreated: "02/04/19",
                    spStickerTitle:"ART",
                    spStickerBackground:"pink",
                    spStickerImageUrl:"https://banner2.kisspng.com/20180216/dle/kisspng-cartoon-fish-royalty-free-illustration-cute-cartoon-fish-vector-5a86f78228b855.1907244315187946261668.jpg"
                }
            ],
        }
    },
    components: {
        Sticker,
    },
    methods: {
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
