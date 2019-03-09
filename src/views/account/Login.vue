<template>
    <div class="page-wrapper">
        <h1>Account landing page</h1>
        <p>Testing if user is logged in or not using this page</p>

        <form class="sticker-form">
            <input type="text" name="userName" value="" placeholder="Please enter a username">
            <input type="password" name="userPass" value="" placeholder="Please enter a password">
        </form>
        <div v-if="userLoggedin">
            <h1>USER IS LOGGED IN</h1>
        </div>
        <div else>
            <h1>USER IS NOT LOGGED IN</h1>
            <button type="button" name="button" @click="attemptLogin()">
                CLICK ME TO ATTEMPT TO LOGIN
            </button>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

const API_URL = 'http://localhost:3030/users/1';

export default {
    name: 'login',
    props: {
    },
    components: {

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

</style>
