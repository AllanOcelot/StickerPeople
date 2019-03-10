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

            <form class="sp-header-search" @submit="stickerSearch()">
                <input type="text" class="form-control"
                       placeholder="Search Sticker Pages..."
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
import Router from 'vue-router'


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
            console.log(this.stickerSearchString.trim());
            if(this.stickerSearchString.trim().length < 2){
                console.log(this.stickerSearchString);
                this.$router.push({ name: 'searchQuery', params: { search: this.stickerSearchString } });
            }
        },
    },
    props: {
    },
}
</script>

<style scoped lang="less">
    header {
        width: 100%;
        line-height: 49px;
        border-bottom: 1px solid #232231;
        border-top: 1px solid #23223161;
        width: 100%;
        z-index: 10;

        .sp-header-account {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 100%;
            padding: 0 10px;
            height: 34px;
            border-bottom: 1px solid #23223161;
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
            height: 49px;
            position: relative;
            justify-content: space-between;
            text-align: left;

            .sp-header-logo {
                display: inline-block;
                font-size: 1.5em;
                font-weight: 900;
                color: #000;
                opacity: 0.6;
                border-radius: 2px;
            }

            .sp-header-search {
                position: absolute;
                top: 6px;
                left: 50%;
                margin-left: -570px;
                width: 1140px;
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
