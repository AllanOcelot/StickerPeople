<template>
    <div class="page-wrapper">
        <div class="account-form-container">
            <div class="left-content">
                <StickerBanner
                    propTitle="Welcome home..."
                />
            </div>
            <div class="right-content">
                <div class="tabs">
                    <div class="tab">
                        LOGIN
                    </div>
                    <div class="tab">
                        REGISTER
                    </div>
                </div>
                <form class="">
                    <label for="spUsername">Username:</label>
                    <div class="inputContainer">
                        <input type="text" name="spUsername" id="spUsername" value="" placeholder="Desired username...">
                    </div>
                    <label for="spEmail">Email:</label>
                    <div class="inputContainer">
                        <input type="password" name="spEmail" id="spEmail" value="" placeholder="Please provide a valid email">
                    </div>
                    <label for="spPW">Password:</label>
                    <div class="inputContainer">
                        <input type="password" name="spPw" id="spPw" value="" placeholder="Please provide a password">
                    </div>
                    <p class="terms">When you sign up, you agree to our <a href="/terms-and-conditions">Terms &amp; Conditions</a>. </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import StickerBanner from '@/components/includes/StickerBanner.vue';

const API_URL = 'http://localhost:3030/users/1';

export default {
    name: 'login',
    props: {
    },
    components: {
        StickerBanner,
    },
    data: function(){
        return {
            userLoggedin: false,
        }
    },
    methods: {
        attemptLogin(){
            axios.get(API_URL).then(function(response){
                console.log(response.data);
            }).catch(function (error) {
                console.log('E R R O R - AttemptLogin function // Login vue');
            });
        },
    },
}
</script>

<style scoped lang="less">
    .page-wrapper {
        padding: 100px 0;

        h1 {
            color: #5062b7;
            font-size: 1.4em;
            margin: 0 0 20px 0;
            cursor: default;
        }
    }
    .account-form-container {
        margin: 0 auto;
        display: inline-block;
        background-color: #fff;
        overflow: hidden;
        padding: 0;
        border-radius: 14px;
        width: 600px;


        .sp-sticker-banner {
            min-height: 0;
            margin-bottom: 0;
            height: 180px;
        }


        .tabs {
            display: block;
            width: 100%;
        }

        form {
            text-align: left;
            padding: 15px 20px;
            label {
                font-size: 0.8em;
                margin: 0;
                color: #757575;
            }
            input {
                width: 100%;
                padding: 0 5px;
                font-size: 0.8em;
                margin-bottom: 10px;
                line-height: 30px;
            }
        }

        p.terms {
            width: 100%;
            font-size: 0.8em;
            font-weight: 100;
            text-align: center;
        }
    }
</style>
