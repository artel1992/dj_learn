<template>
    <div class="background">
        <b-navbar toggleable="lg" type="dark" variant="secondary" class="navbar">
            <b-navbar-brand href="#">
                <img src="./assets/Mercedes-Benz/merslogo.png" height="100" width="100"/>
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

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">


                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="SEARCH..."></b-form-input>
                        <!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">SEARCH</b-button>-->
                    </b-nav-form>
                    <!--                    <b-nav-item-dropdown text="LANG" no-caret>-->
                    <!--                        <b-dropdown-item href="#">EN</b-dropdown-item>-->
                    <!--                        <b-dropdown-item href="#">DE</b-dropdown-item>-->
                    <!--                        <b-dropdown-item href="#">RU</b-dropdown-item>-->
                    <!--                        <b-dropdown-item href="#">FA</b-dropdown-item>-->
                    <!--                    </b-nav-item-dropdown>-->
                    <b-nav-item-dropdown right no-caret>
                        <template v-slot:button-content>
                            <b-icon icon="shop-window"></b-icon>
                        </template>
                        <b-dropdown-item href="#">
                            <b-icon icon="bag"></b-icon>
                            Purchase
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right no-caret>
                        <template v-slot:button-content>
                            <b-icon icon="box-arrow-in-right"></b-icon>
                        </template>
                        <b-dropdown-item href="#">
                            <b-icon icon="person-circle"></b-icon>
                            Profile
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                            <b-icon icon="box-arrow-in-left"></b-icon>
                            Sign Out
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view></router-view>
        <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="1024"
                img-height="480"
                :interval="3000"
                class="shadow-lg p-0 mb-5 bg-black rounded"


        >
            <b-carousel-slide
                    caption="E-Class"
                    :img-src="require('./assets/Mercedes-Benz/E-class2.jpeg')"
            >
            </b-carousel-slide>
            <b-carousel-slide
                    caption="C-Class"
                    :img-src="require('./assets/Mercedes-Benz/C-class.jpeg')"
            >
            </b-carousel-slide>
            <b-carousel-slide
                    caption="G-Class"
                    :img-src="require('./assets/Mercedes-Benz/G-class3.jpeg')"
            ></b-carousel-slide>
        </b-carousel>

        <b-container class="p-5 black">
            <b-card
                    title="G-Class"
                    :img-src="require('./assets/Mercedes-Benz/G-class.jpeg')"
                    img-alt="Image"
                    img-top
                    tag="article"
                    style="max-width: 20rem;"
                    class="mb-5"
            >
                <b-card-text>
                    Mercedes-Benz, G-Class
                </b-card-text>

                <b-button href="#" variant="primary">Buy</b-button>
            </b-card>

        </b-container>

        <el-carousel :interval="3000" type="card" height="200px">
            <el-carousel-item v-for="item in 3" :key="item">
                <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>


</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    export default {
        name: 'App',
    }

</script>

<style scoped>


    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }


    .ml-auto {
        /*background-color: #42b983;*/
    }

    .dropdown-toggle {

    }

    .carousel {
        font-family: "Bebas Neue-Bold", sans-serif;
    }

    .background {
        background-color: black;
    }

    .form-control-sm {
        border-radius: 50px;
    }

    .navbar-brand {
        font-family: "Bebas Neue-Bold", sans-serif;
        font-size: 18pt;
    }

    .nav-link {
        font-family: "Bebas Neue-Bold", sans-serif;
        font-size: 18pt;

    }

    .navbar {
        background-color: black !important;
    }

    .nav-item {
        font-family: "Bebas Neue-Bold", sans-serif;
        font-size: 18pt;
    }

    .mr-sm-2 {
        font-family: "TRY Clother Black", sans-serif;
        font-size: 12pt;

    }

    .dropdown menu {
        /*font-family: "TRY Clother Black", sans-serif;*/
    }

    /*.navbar-collapse {*/
    /*    justify-content: center;*/
    /*    display: flex;*/
    /*    flex-grow: unset;*/
    /*}*/

    /*.navbar-brand {*/
    /*    padding-left: 550px;*/
    /*}*/

</style>
