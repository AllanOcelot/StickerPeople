<template>
    <div>
        <div v-if="imageOnly === true">
            <div class="sp-sticker-image-only"
                :style="style"
            >
            </div>
        </div>
        <div v-else>
            <div class="sp-sticker">
                <div class="card">
                    <div class="sp-sticker-image-container"
                         :style="backgroundColor"
                    >
                        <div class="sp-sticker-background"
                            :style="backgroundImage">
                        </div>
                    </div>
                  <div class="sp-sticker-body">
                    <div class="sp-sticker-information">
                        <span class="sp-sticker-title">
                            {{this.sticker.NAME}}
                        </span>
                        <span class="sp-sticker-details-container">
                            <a class="sp-sticker-author" :href="'/users/UserProfile/' + cleanName(this.sticker.AUTHOR)">
                                <i class="fas fa-user"></i> <span>{{this.sticker.AUTHOR}}</span>
                            </a>
                            <span class="sp-sticker-date" href="#">
                                <i class="far fa-calendar-alt"></i>
                                {{ createdDateFormated() }}
                            </span>
                        </span>
                    </div>
                    <div class="sp-sticker-tags">
                        <p @click="toggleTags()" v-if="generateTags()">
                            <transition name="fade">
                                <span key=1 v-if="stickerShowTags">
                                    Hide Tags
                                    <i class="fas fa-caret-up"></i>
                                </span>
                                <span key=2 v-else>
                                    Show Tags
                                    <i class="fas fa-caret-down"></i>
                                </span>
                            </transition>
                        </p>
                        <p v-else class="sp-sticker-tags-none">
                            <span>
                            <i class="far fa-frown-open"></i>
                                This Sticker has no tags!
                            <i class="far fa-frown-open"></i>
                            </span>
                        </p>
                        <div v-if="stickerShowTags && generateTags()"
                             class="sp-sticker-tags-container">
                            <a v-for="tag in generateTags()" :key="tag" :href="'/search/tags/' + cleanTag(tag)">
                                {{ tag }}
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sticker',
    data: function () {
        return {
            stickerShowTags: false,
        }
    },
    props: ['sticker', 'imageOnly',
            'propWidth', 'propHeight', 'propRotate', 'propLeft', 'propTop', 'propZindex'],
    computed: {
        backgroundColor(){
            if(this.sticker.spStickerBackground){
                let style = 'background-color:' + this.sticker.spStickerBackground + ';';
                return style;
            }
            return 'background-color: transparent';
        },
        backgroundImage(){
            if(this.sticker.spStickerImageUrl){
                let style = 'background-image: (' + this.sticker.spStickerImageUrl + ');';
                return style;
            }else{
                let style = 'background-image:(/assets/images/placeholder_sticker.png);';
                return style;
            }
        },
        style(){
            if (this.imageOnly){
                let backgroundImage, width, height, rotation, left, top, zindex = '';


                if (this.sticker.spStickerImageUrl){
                    backgroundImage = 'background-image:' + 'url(' + this.sticker.spStickerImageUrl + ')';
                }
                if ( this.propWidth ){
                    width =  'width:' + this.propWidth + 'px';
                }
                if (this.propHeight ){
                    height = 'height:' + this.propHeight + 'px';
                }
                if ( this.propRotate ){
                    rotation = 'transform: rotate(' + this.propRotate + 'deg)';
                }
                if ( this.propLeft ){
                    left = 'left:' + this.propLeft + '%';
                }
                if ( this.propTop ){
                    top = 'top:' + this.propTop + '%';
                }
                if ( this.propZindex ){
                    zindex = 'z-index:' + this.propZindex;
                }
                let styles = '' + backgroundImage + '; ' +  width +  ';' + height + ';' + rotation + ';' + top + ';' + left + ';' + zindex + ';';
                return styles;
            }
            return '';
        }
    },
    methods: {
        createdDateFormated(){
            if(!this.sticker.CREATED){
                return;
            }
            var t = this.sticker.CREATED.split(/[- :]/);
            return "" + t[2].substring(0, 2) + "/" + t[1] + "/" + t[0];
        },
        generateTags(){
            if(!this.sticker.TAGS){
                return;
            }
            let tags = this.sticker.TAGS.split(',');
            return tags;
        },
        cleanName(name){
            return name.trim().replace(/\s+/g, '-').toLowerCase();
        },
        cleanTag(tag){
            return tag.trim().replace(/\s+/g, '-').toLowerCase();
        },
        toggleTags(){
            this.stickerShowTags = !this.stickerShowTags;
        },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .sp-sticker-image-only {
        width: 300px;
        height: 300px;
        background-size: contain;
        z-index: 0;
        position: absolute;
        background-repeat: no-repeat;
        //Set a backup image, incase
        background-image: url('/assets/images/placeholder_sticker.png');
    }
    .sp-sticker {
        width: 100%;
        display: block;
        box-sizing: border-box;
        margin-bottom: 30px;
        .sp-sticker-image-container {
            position: relative;
            height: 200px;
            width: 100%;
            display: block;
            box-sizing: border-box;
            .sp-sticker-background {
                z-index: 1;
                position: absolute;
                top: 5%;
                left: 5%;
                width: 90%;
                height: 90%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                //Set a backup image, incase
                background-image: url('/assets/images/placeholder_sticker.png');
            }
        }
        .sp-sticker-body {
            border-top: 1px solid #e4e4e4;
            width: 100%;
            box-sizing: border-box;
            .sp-sticker-information {
                border-bottom: 1px solid #e4e4e4;
                font-size: 0.8em;
                .sp-sticker-title {
                    display: block;
                    width: 100%;
                    font-size: 1.4em;
                    font-weight: 900;
                    line-height: normal;
                    padding: 10px 10px 0 10px;
                    cursor: default;
                }
                .sp-sticker-details-container {
                    width: 100%;
                    display: block;
                    padding: 10px;
                    .sp-sticker-author,
                    .sp-sticker-date {
                        color: #000;
                        font-weight: 600;
                        opacity: 0.8;
                        margin-right: 10px;
                        padding-right: 10px;
                        transition: all 0.2s;
                        i {
                            margin-right: 10px;
                        }
                        span {
                            font-weight: normal;
                        }
                        &:hover {
                            opacity: 1;
                        }
                    }
                    .sp-sticker-date {
                        cursor: default;
                    }
                }
            }
            .sp-sticker-tags {
                width: 100%;
                display: block;
                text-align: left;
                padding: 0 10px 10px 10px;
                p {
                    position: relative;
                    width: 100%;
                    height: 25px;
                    margin: 10px 0 0 0;
                    line-height: 25px;
                    cursor: pointer;
                    span {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        padding: 0 10px;
                        font-size: 1em;
                        font-weight: 600;
                    }

                    i {
                        float: right;
                        font-size: 1.2em;
                        line-height: 25px;
                    }
                }
                .sp-sticker-tags-none {
                    text-align: center;
                    i {
                        float: none;
                        margin: 0 6px;
                        font-weight: normal;
                        font-size: 1.2em;
                    }
                }
                .sp-sticker-tags-container {
                    width: 100%;
                    display: block;
                    padding-top: 10px;
                    text-align: center;
                    a {
                        padding: 3px 8px;
                        border-radius: 4px;
                        margin: 2px;
                        background: #525252;
                        display: inline-block;
                        font-size: 0.8em;
                        color: #fff;
                        transition: all 0.2s;
                        transition-delay: 0.1s;
                        &:hover {
                            color: #fff;
                            background: #498af4;
                            text-decoration: none;
                            transition-delay: 0s;
                        }
                    }
                }
            }
        }
    }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
