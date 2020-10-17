<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="secondary" class="navbar" @scroll="getNavClass" sticky>
            <b-navbar-brand href="#" class="hidden-sm-and-down">
                <img src="../assets/Mercedes-Benz/merslogo.png" height="100" width="100"/>
            </b-navbar-brand>
            <b-navbar-brand class="hidden-md-and-up">
                <img src="../assets/Mercedes-Benz/merslogo.png" height="50" width="50"/>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">HOME</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">CARS</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">BENZ WORLD</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <b-nav-item>
                        <i class="el-icon-shopping-bag-2"></i>
                    </b-nav-item>
                    <b-nav-item>
                        <i class="el-icon-user"></i>
                    </b-nav-item>
                    <!--                <b-nav-item-dropdown right no-caret>-->
                    <!--                    <template v-slot:button-content>-->
                    <!--                        <b-icon icon="box-arrow-in-right"></b-icon>-->
                    <!--                    </template>-->
                    <!--                    <b-dropdown-item href="#">-->
                    <!--                        <b-icon icon="person-circle"></b-icon>-->
                    <!--                        Profile-->
                    <!--                    </b-dropdown-item>-->
                    <!--                    <b-dropdown-item href="#">-->
                    <!--                        <b-icon icon="box-arrow-in-left"></b-icon>-->
                    <!--                        Sign Out-->
                    <!--                    </b-dropdown-item>-->
                    <!--                </b-nav-item-dropdown>-->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
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
        </b-carousel>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                nav_class: 'navbar'
            }
        },
        props: {
            msg: String
        },
        methods: {
            getNavClass() {
                console.log(window.screenY)
            }
        }
    }
</script>

<style scoped>

</style>
