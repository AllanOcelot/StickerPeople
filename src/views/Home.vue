<template>
    <div class="page-wrapper">
        <stickerBanner
            propTitle="Welcome To Sticker People"
            propSubtitle="The Community For Sticker Lovers!"
        />
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h1>HOME</h1>
                </div>
            </div>
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
