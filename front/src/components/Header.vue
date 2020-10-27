<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="secondary" class="hidden-md-and-up" sticky>
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
                    <b-nav-item href="#">BENZ WORLD</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-3" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <b-nav-item>
                        <el-button circle plain icon="el-icon-goods"
                                   style="border: 0 solid; background: none; font-size: 1em; outline: 0 !important; touch-action: auto;color: white">
                        </el-button>
                    </b-nav-item>
                    <b-nav-item>
                        <el-button v-b-modal.login icon="el-icon-user"
                                   style="border: 0 solid; background: none; font-size: 1em; outline: 0 !important; color: white;">
                        </el-button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-navbar toggleable="lg" type="dark" variant="secondary" class="hidden-md-and-down" sticky>
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
                    <b-nav-item href="#">BENZ WORLD</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-3" placeholder="Search"></b-form-input>
                    </b-nav-form>
                    <b-nav-item>
                        <el-button circle plain icon="el-icon-goods"
                                   style="border: 0 solid; background: none; font-size: 1em; outline: 0 !important; touch-action: auto;color: white">
                        </el-button>
                    </b-nav-item>
                    <b-nav-item>
                        <el-button v-b-modal.login icon="el-icon-user"
                                   style="border: 0 solid; background: none; font-size: 1em; outline: 0 !important; color: white;">
                        </el-button>
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
        <Login id="login"></Login>
        <el-row data-aos="fade-up" justify="center" type="flex">
            <el-col data-aos-delay="5000" :lg="4">
                <h3 style="font-family: 'Bebas Neue-Regular'; padding-top: 50px">
                    The Mercedes-Benz AG at a glance.
                </h3>
            </el-col>
        </el-row>
        <el-row data-aos="fade-up" type="flex" justify="center">
            <el-col data-aos-delay="5000" :lg="14" style="font-family: 'Bebas Neue-Regular'; padding: 50px 0 20px 0">
                <p>
                    Mercedes-Benz AG is responsible for the global business of Mercedes-Benz Cars and Mercedes-Benz Vans
                    with over 173,000 employees world wide. Ola Källenius is Chairman of the Board of Management of
                    Mercedes-Benz AG. The company focuses on the development, production and sales of passenger cars,
                    vans and services. Furthermore, the company aspires to be leading in the fields of connectivity,
                    automated driving and alternative drives with its forward-looking innovations. The product portfolio
                    comprises the Mercedes-Benz brand with the sub-brands Mercedes-AMG, Mercedes-Maybach and Mercedes me
                    - as well as the smart brand, and the EQ product and technology brand for electric mobility.
                </p>
            </el-col>
        </el-row>
        <el-row data-aos="fade-up" type="flex" justify="center">
            <el-col data-aos-delay="5000" :lg="14" style="font-family: 'Bebas Neue-Regular'; padding: 20px 0 20px 0">
                <p>
                    Mercedes-Benz AG is one of the largest manufacturers of premium passenger cars. In 2019 it sold
                    nearly 2.4 million cars and more than 438,000 vans. In its two business divisions, Mercedes-Benz AG
                    is continually expanding its worldwide production network with over 40 production sites on four
                    continents, while aligning itself to meet the requirements of electric mobility. At the same time,
                    the company is developing its global battery production network on three continents. Sustainable
                    actions play a decisive role in both business divisions.
                </p>
            </el-col>
        </el-row>
        <el-row data-aos="fade-up" type="flex" justify="center">
            <el-col data-aos-delay="400" :lg="14" style="font-family: 'Bebas Neue-Regular'; padding: 20px 0 50px 0">
                <p>
                    To the company, sustainability means creating value for all stakeholders on a lasting basis:
                    customers, employees, investors, business partners and the society as a whole. The basis for this is
                    the sustainable business strategy of Daimler in which the company takes responsibility for the
                    economic, ecological and social effects of its business activities and looks at the entire value
                    chain.
                </p>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    import Login from "./Modal/Login";
    import AOS from 'aos'

    export default {
        name: '',
        data() {
            return {
                nav_class: 'navbar'
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
