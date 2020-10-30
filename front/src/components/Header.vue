<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar" sticky>
            <b-navbar-brand href="#">
                <img src="../assets/Mercedes-Benz/merslogo.png" height="50" width="50"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item @click="$router.push({name:'Main'})" href="#">HOME</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item @click="$router.push({name:'Cars'})" href="#">CARS</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item @click="$router.push({name:'Story'})" href="#">BENZ WORLD</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-3" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <b-nav-item>
                        <i class="el-icon-goods" @click="$router.push({name: 'Card'})"></i>
<!--                        <el-button circle plain icon="el-icon-goods"-->
<!--                                   style="border: 0 solid; background: none; font-size: 1em; outline: 0 !important; touch-action: auto;color: white">-->
<!--                        </el-button>-->
                    </b-nav-item>
                    <b-nav-item>
                        <i v-b-modal.login class="el-icon-user"></i>
<!--                        <el-button v-b-modal.login icon="el-icon-user"-->
<!--                                   style="border: 0 solid; background: none; font-size: 1em; outline: 0 !important; color: white;">-->
<!--                        </el-button>-->
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-carousel
                id="carousel-fade"
                fade
                :indicators="false"
                img-width="1024"
                img-height="480"
                :interval="3000"
        >
            <b-carousel-slide
                    :img-src="require('./../assets/Mercedes-Benz/C-class.jpeg')"
            ></b-carousel-slide>
            <b-carousel-slide
                    :img-src="require('./../assets/Mercedes-Benz/E-class2.jpeg')"
            ></b-carousel-slide>
            <b-carousel-slide
                    :img-src="require('./../assets/Mercedes-Benz/G-class3.jpeg')"
            ></b-carousel-slide>
            <b-carousel-slide
                    :img-src="require('./../assets/Photo/Merckarusel.jpg')"
            ></b-carousel-slide>
        </b-carousel>
        <Login modal_id="login"></Login>

    </div>

</template>

<script>
    import Login from "./Modal/Login";
    import AOS from 'aos'

    export default {
        name: '',
        data() {
            return {
                nav_class: 'navbar',
            }
        },
        components: {
            Login
        },
        props: {
            msg: String
        },
        methods: {
            getNavClass() {
                console.log(window.screenY)
            }
        },
        created() {
            AOS.init({disable: ""});
        },
    }
</script>

<style scoped>

</style>
