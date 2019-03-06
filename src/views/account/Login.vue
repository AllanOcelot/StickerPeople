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
        </div>
    </div>
</template>

<script>

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
    },
}
</script>

<style scoped lang="less">

</style>
