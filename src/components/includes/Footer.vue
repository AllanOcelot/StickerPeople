<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <p>Sticker People is an Open Source Project, created by <a href="http://www.allancodes.com">AllanCodes</a>.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: function () {
        return {
        }
    },
    props: {
    },
    methods: {
    },
}
</script>

<style scoped lang="less">
    footer {
        background: #fff;
        color: #525252;
        padding: 20px 0;
        border-top: 1px solid #52525229;
        p {
            margin-bottom: 0;
            font-size: 0.8em;
            opacity: 0.8;
            a {
                color: #fff;
                text-decoration: underline;
                &:hover {
                    color: #fff;
                }
            }
        }
    }
</style>
