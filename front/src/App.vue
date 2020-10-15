<template>
    <div>
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


                    <b-nav-item-dropdown text="LANG" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">DE</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>


                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="SEARCH..."></b-form-input>
                        <!--                        <b-button size="sm" class="my-2 my-sm-0" type="submit">SEARCH</b-button>-->
                    </b-nav-form>
                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <b-icon icon="box-arrow-in-right"></b-icon>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
        >
            <b-carousel-slide
                    caption="E-class"
                    :img-src="require('./assets/Mercedes-Benz/E-class2.jpeg')"
            >
            </b-carousel-slide>
            <b-carousel-slide
                    caption="C-class"
                    :img-src="require('./assets/Mercedes-Benz/C-class.jpeg')"
            >
            </b-carousel-slide>
            <b-carousel-slide
                    caption="G-class"
                   :img-src="require('./assets/Mercedes-Benz/G-class3.jpeg')"
            ></b-carousel-slide>
        </b-carousel>


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


    .form-control-sm {
        border-radius: 50px;
    }

    .navbar-brand {
        font-family: "TRY Clother Black", sans-serif;
    }

    .nav-link {
        font-family: "TRY Clother Black", sans-serif;
    }

    .navbar {
        background-color: black !important;
    }

    .nav-item {
        font-family: "TRY Clother Black", sans-serif;
    }

    .mr-sm-2 {
        font-family: "TRY Clother Black", sans-serif;

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
