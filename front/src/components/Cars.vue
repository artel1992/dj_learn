<template>
    <div>
        <el-row type="flex" justify="center" style="justify-content: center !important; display: flex !important; padding-top: 100px; padding-bottom: 100px;">
            <el-col :lg="12"  :sm="24" align="middle" style="font-family: 'Agency FB', sans-serif;">
                <b-card
                        title="The  C-Class"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem; box-shadow: 0 0 15px black;"
                        class="mb-5"
                >
                    <span class="demonstration"></span>
                    <el-carousel height="150px" :autoplay="false" arrow="never">

                        <el-carousel-item v-for="image in images" :key="image">
                            <el-image :src="image"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                    <b-button href="#" variant="secondary" style="display: flex; justify-content: center; "
                              @click="$router.push({name: 'Car', params:{id:1}})">Info
                    </b-button>
                </b-card>

            </el-col>
            <el-col :lg="7" :sm="24" style="font-family: 'Agency FB', sans-serif; float: left !important;">
                <b-card
                        title="The A-Class"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem; box-shadow: 0 0 15px black;"
                        class="mb-5"
                >
                    <el-carousel height="150px" :autoplay="false" arrow="never">
                        <el-carousel-item v-for="photo in photos" :key="photo">
                            <el-image :src="photo"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                    <b-button href="#" variant="secondary" style="display: flex; justify-content: center; ">Buy
                    </b-button>
                </b-card>
            </el-col>
            <!--            <el-col :lg="5" :sm="24" align="middle" style="font-family: 'Agency FB', sans-serif;">-->
            <!--                <b-card-->
            <!--                        title="The E-Class"-->
            <!--                        img-alt="Image"-->
            <!--                        img-top-->
            <!--                        tag="article"-->
            <!--                        style="max-width: 20rem; box-shadow: 0 0 15px black;"-->
            <!--                        class="mb-5"-->
            <!--                >-->
            <!--                    <el-carousel height="150px" :autoplay="false" arrow="never">-->
            <!--                        <el-carousel-item v-for="picture in pictures" :key="picture">-->
            <!--                            <el-image :src="picture"></el-image>-->
            <!--                        </el-carousel-item>-->
            <!--                    </el-carousel>-->
            <!--                    <b-button href="#" variant="secondary" style="display: flex; justify-content: center; ">Buy-->
            <!--                    </b-button>-->
            <!--                </b-card>-->
            <!--            </el-col>-->
            <!--            <el-col :lg="5" :sm="24" align="middle" style="font-family: 'Agency FB', sans-serif;">-->
            <!--                <b-card-->
            <!--                        title="The G-Class"-->
            <!--                        img-alt="Image"-->
            <!--                        img-top-->
            <!--                        tag="article"-->
            <!--                        style="max-width: 20rem; box-shadow: 0 0 15px black;"-->
            <!--                        class="mb-5"-->
            <!--                >-->
            <!--                    <el-carousel height="150px" :autoplay="false" arrow="never">-->
            <!--                        <el-carousel-item v-for="picture in pictures" :key="picture">-->
            <!--                            <el-image :src="picture"></el-image>-->
            <!--                        </el-carousel-item>-->
            <!--                    </el-carousel>-->
            <!--                    <b-button href="#" variant="secondary" style="display: flex; justify-content: center; ">Buy-->
            <!--                    </b-button>-->
            <!--                </b-card>-->
            <!--            </el-col>-->
            <!--            <el-col :lg="5" :sm="24" align="middle" style="font-family: 'Agency FB', sans-serif;">-->
            <!--                <b-card-->
            <!--                        title="The E-Class"-->
            <!--                        img-alt="Image"-->
            <!--                        img-top-->
            <!--                        tag="article"-->
            <!--                        style="max-width: 20rem; box-shadow: 0 0 15px black;"-->
            <!--                        class="mb-5"-->
            <!--                >-->
            <!--                    <el-carousel height="150px" :autoplay="false" arrow="never">-->
            <!--                        <el-carousel-item v-for="picture in pictures" :key="picture">-->
            <!--                            <el-image :src="picture"></el-image>-->
            <!--                        </el-carousel-item>-->
            <!--                    </el-carousel>-->
            <!--                    <b-button href="#" variant="secondary" style="display: flex; justify-content: center; ">Buy-->
            <!--                    </b-button>-->
            <!--                </b-card>-->
            <!--            </el-col>-->
            <!--            <el-col :lg="5" :sm="24" align="middle" style="font-family: 'Agency FB', sans-serif;">-->
            <!--                <b-card-->
            <!--                        title="The E-Class"-->
            <!--                        img-alt="Image"-->
            <!--                        img-top-->
            <!--                        tag="article"-->
            <!--                        style="max-width: 20rem; box-shadow: 0 0 15px black;"-->
            <!--                        class="mb-5"-->
            <!--                >-->
            <!--                    <el-carousel height="150px" :autoplay="false" arrow="never">-->
            <!--                        <el-carousel-item v-for="picture in pictures" :key="picture">-->
            <!--                            <el-image :src="picture"></el-image>-->
            <!--                        </el-carousel-item>-->
            <!--                    </el-carousel>-->
            <!--                    <b-button href="#" variant="secondary" style="display: flex; justify-content: center; ">Buy-->
            <!--                    </b-button>-->
            <!--                </b-card>-->
            <!--            </el-col>-->
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
                    require('./../assets/Buy/A-class01.png'),
                    require('./../assets/Buy/A-class02.png'),
                    require('./../assets/Buy/A-class03.png')
                ],
                pictures: [
                    require('./../assets/Buy/E-class1Uni.png'),
                    require('./../assets/Buy/E-class2Uni.png'),
                    require('./../assets/Buy/E-class3Uni.png')
                ],

            }
        }
    }
</script>

<style scoped>

</style>