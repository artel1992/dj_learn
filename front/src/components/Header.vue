<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar" sticky>
            <b-navbar-brand href="#">
                <img src="../assets/Mercedes-Benz/merslogo.png" height="50" width="50"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item @click="$router.push({name:'Main'})" href="#">Home</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item @click="$router.push({name:'Cars model'})" href="#">Cars</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item @click="$router.push({name:'Story'})" href="#">Benz World</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-3" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <b-nav-item>
                        <i class="el-icon-goods" @click="$router.push({name: 'Card'})"></i>
                    </b-nav-item>
                    <b-nav-item>
                        <i v-b-modal.login class="el-icon-user"></i>
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
                    v-for="img in image_list"
                    :img-src="img" :key="img"
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
                image_list: [
                    require('./../assets/Mercedes-Benz/C-class.jpeg'),
                    require('./../assets/Mercedes-Benz/E-class2.jpeg'),
                    require('./../assets/Mercedes-Benz/G-class3.jpeg'),
                    require('./../assets/Photo/Merckarusel.jpg'),
                ]
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
            },
            init() {
                if (this.$route.name === 'Car') {
                    this.image_list = [
                        require('./../assets/C-class/C-classBC.jpeg')
                    ]
                } else if (this.$route.name === 'Card') {
                    this.image_list = [
                        require('./../assets/C-class/Shop2.jpeg')
                    ]
                }

                else {
                    this.image_list = [
                        require('./../assets/Mercedes-Benz/C-class.jpeg'),
                        require('./../assets/Mercedes-Benz/E-class2.jpeg'),
                        require('./../assets/Mercedes-Benz/G-class3.jpeg'),
                        require('./../assets/Photo/Merckarusel.jpg'),
                    ]
                }
            },
        },
        mounted() {
            AOS.init({disable: ""});
            this.init()

        },
        watch: {
            $route(to, from) {
                this.init()
                console.log(to, from)
            }
        }
    }
</script>

<style scoped>

</style>
