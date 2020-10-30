<template>
    <div>
        <el-row justify="center" type="flex">
            <el-col :lg="6" :sm="24" align="middle">
                <p data-aos="fade-right" style="font-size: 30pt; font-family: 'Bebas Neue-Bold';">
                    Cars Model
                </p>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center"
                style="justify-content: center !important; display: flex !important; padding-top: 50px; padding-bottom: 50px;">
            <el-col :lg="7" :sm="24" align="middle"
                    style="font-family: 'PTSansNarrow-Regular', sans-serif; margin-right: 30px !important;">
                <b-card
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 30rem; cursor: pointer; border: none;"
                        class="mb-5"
                        data-aos="zoom-in-right"
                        @click="$router.push({name: 'Car', params:{id:1}})"
                >
                    <span class="demonstration"></span>
                    <el-carousel height="250px" :autoplay="false" arrow="never">

                        <el-carousel-item v-for="image in images" :key="image">
                            <el-image :src="image"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </b-card>
            </el-col>
            <el-col :lg="7" :sm="24" align="middle"
                    style="font-family: 'PTSansNarrow-Regular', sans-serif; float: left !important;">
                <b-card
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 30rem; cursor: pointer; border: none;"
                        class="mb-5"
                        data-aos="zoom-in-left"
                >
                    <el-carousel height="250px" :autoplay="false" arrow="never">
                        <el-carousel-item v-for="photo in photos" :key="photo">
                            <el-image :src="photo"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </b-card>
            </el-col>
        </el-row>
        <el-row type="flex" justify="center"
                style="justify-content: center !important; display: flex !important; padding-top: 10px; padding-bottom: 10px;">
            <el-col :lg="7" :sm="24" align="middle"
                    style="font-family: 'PTSansNarrow-Regular', sans-serif; margin-right: 30px !important;">
                <b-card
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 30rem; cursor: pointer; border: none;"
                        class="mb-1"
                        data-aos="zoom-in-right"
                >
                    <span class="demonstration"></span>
                    <el-carousel height="250px" :autoplay="false" arrow="never">

                        <el-carousel-item v-for="sekil in sekils" :key="sekil">
                            <el-image :src="sekil"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </b-card>

            </el-col>
            <el-col :lg="7" :sm="24" align="middle"
                    style="font-family: 'PTSansNarrow-Regular', sans-serif; float: left !important;">
                <b-card
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 30rem; cursor: pointer; border: none;"
                        class="mb-1"
                        data-aos="zoom-in-left"
                >
                    <el-carousel height="250px" :autoplay="false" arrow="never">
                        <el-carousel-item v-for="picture in pictures" :key="picture">
                            <el-image :src="picture"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </b-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: "Cars",
        data() {
            return {
                images: [
                    require('./../assets/Buy/C-class1.png'),
                    require('./../assets/Buy/C-class2.png'),
                    require('./../assets/Buy/C-class3.png')
                ],
                photos: [
                    require('./../assets/Buy/cla1.png'),
                    require('./../assets/Buy/cla2.png'),
                    require('./../assets/Buy/cla3.png')
                ],
                pictures: [
                    require('./../assets/Buy/E-class1Uni.png'),
                    require('./../assets/Buy/E-class2Uni.png'),
                    require('./../assets/Buy/E-class3Uni.png')
                ],
                sekils: [
                    require('./../assets/Buy/S-class1.png'),
                    require('./../assets/Buy/S-class2.png'),
                ],

            }
        }
    }
</script>

<style scoped>

</style>