<template>
    <header>
        <div class="sp-header-account">
            <div class="sp-account-links">
                <router-link to="/register" v-if="!loggedIn">
                    Sign Up
                </router-link>
                <router-link to="/register" v-if="!loggedIn">
                    Log In
                </router-link>
                <router-link to="/account" v-if="loggedIn">
                    Account
                </router-link>
            </div>
        </div>
        <div class="sp-header-main">
            <router-link to="/" class="sp-header-logo">SP</router-link>

            <form class="sp-header-search" @submit="stickerSearch"
                  v-on:submit.prevent>
                <i class="fas fa-search sp-header-search-icon" />
                <input type="text" class="form-control"
                       placeholder="Search..."
                       v-model.lazy="stickerSearchString"
                >
            </form>

            <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
            </div>
        </div>
    </header>
</template>

<script>
import router from 'vue-router'


export default {
    name: 'Header',
    data: function () {
        return {
            stickerSearchString: '',
            loggedIn: false,
        }
    },
    methods: {
        stickerSearch() {
            if(this.stickerSearchString.trim().length > 2){
                this.$router.push({ name: 'searchQuery', params: { search: this.stickerSearchString } });
            }else{
                this.$router.push({ name: 'search' });
            }
        },
    },
    /*
    beforeMount: function(){
        if(this.$route.params.search){
            this.stickerSearchString = this.$route.params.search;
        }else{
            this.stickerSearchString = '';
        }
    },
    */
    props: {
    },
}
</script>

<style scoped lang="less">
    header {
        width: 100%;
        line-height: 48px;
        border-bottom: 1px solid rgba(0,0,0,0.12);
        width: 100%;
        background: #fff;
        z-index: 10;

        .sp-header-account {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            padding: 0 10px;
            height: 34px;
            border-bottom: 1px solid rgba(0,0,0,0.12);
            .sp-account-links {
                line-height: 34px;
                a {
                    padding: 0 10px;
                    font-size: 0.8em;
                    opacity: 0.8;
                    color: #000;
                    font-weight: normal;
                }
            }
        }

        .sp-header-main {
            display: block;
            width: 100%;
            padding: 0 0 0 20px;
            height: 48px;
            position: relative;
            justify-content: space-between;

            .sp-header-logo {
                float: left;
                display: inline-block;
                font-size: 1.5em;
                font-weight: 900;
                color: #000;
                opacity: 0.6;
                border-radius: 2px;
            }

            .sp-header-search {
                position: relative;
                display: inline-block;
                width: 100%;
                max-width: 1024px;
                position: relative;
                margin: 0 auto;

                .sp-header-search-icon {
                    position: absolute;
                    left: 5px;
                    top: 3px;
                    width: 36px;
                    background-color: #fff;
                    border-right: 1px solid rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    height: 27px;
                    line-height: 27px;
                    padding-right: 4px;
                    box-sizing: border-box;
                    pointer-events: none;
                    opacity: 0.8;
                    transition: opacity 0.2s;
                }

                .form-control {
                    padding-left: 50px;
                    padding-top: 0;
                    padding-bottom: 0;
                    display: block;
                    font-size: 0.8em;
                    box-sizing: border-box;
                    line-height: 30px;
                    padding-right: 10px;
                }

                &:hover{
                    .sp-header-search-icon {
                        opacity: 1;
                    }
                }
            }

            #nav {
                float: right;
                text-align: left;
              a {
                float: left;
                padding: 0 20px;
                border-left: 1px solid #52525229;
                color: #2c3e50;
                font-size: 0.9em;
                height: 49px;
                border-bottom: 2px solid transparent;
                transition: all 0.4s;
                &:hover {
                    color: #232231;
                    text-decoration: none;
                    border-bottom-color: #232231;
                }
                &.router-link-exact-active {
                    background-color: #232231;
                    color: #fff;
                }
              }
            }
        }
    }
</style>
