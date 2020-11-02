<template>
    <div class="background">
        <Header></Header>
        <el-row type="flex" justify="center">
            <el-col :lg="14">
                <router-view></router-view>
            </el-col>
        </el-row>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from './components/Header'
    import Footer from "./components/Footer";
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'App',
        components: {
            Header,
            Footer
        }
    }

</script>

<style scoped>

</style>
