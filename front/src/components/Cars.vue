<template>
    <div>
        <el-row justify="center" type="flex">
            <el-col :xl="6" :sm="24" align="middle">
                <h2 data-aos="fade-right">
                    {{$route.name}}
                </h2>
            </el-col>
        </el-row>
        <el-row
        >
            <el-col :lg="12" :md="12" :sm="12" align="middle"
                    v-for="car in cars"
                    :key="car.id"
            >
                <b-card
                        :footer="car.model + '. ' + car.year + '. € ' + car.price"
                        tag="article"
                        class="car mb-5"
                        data-aos="zoom-in-right"
                        @click="$router.push({name: 'Car', params:{id: car.id}})"
                >
                    <el-carousel :autoplay="false" arrow="never">
                        <el-carousel-item v-for="image in car.images" :key="image">
                            <el-image :src="image"></el-image>
                        </el-carousel-item>
                    </el-carousel>
                     <span class="card_title">Mercedes-Benz</span>
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
                cars: [
                    {
                        id: 1,
                        title: 'Mercedes-Benz',
                        price: 30000,
                        year: 2020,
                        body_type: 0,
                        model: 'C-Class',
                        images:
                            [
                                require('./../assets/Buy/C-class1.png'),
                                require('./../assets/Buy/C-class2.png'),
                                require('./../assets/Buy/C-class3.png')
                            ]
                    },
                    {
                        id: 2,

                        title: 'Mercedes-Benz',
                        price: 30000,
                        year: 2020,
                        body_type: 0,
                        model: 'CLA',
                        images:
                            [
                                require('./../assets/Buy/cla1.png'),
                                require('./../assets/Buy/cla2.png'),
                                require('./../assets/Buy/cla3.png')
                            ]
                    },
                    {
                        id: 3,
                        title: 'Mercedes-Benz',
                        price: 30000,
                        year: 2020,
                        body_type: 0,
                        model: 'E-Class',
                        images:
                            [
                                require('./../assets/Buy/E-class1Uni.png'),
                                require('./../assets/Buy/E-class2Uni.png'),
                                require('./../assets/Buy/E-class3Uni.png')
                            ]
                    },
                    {
                        id: 4,
                        title: 'Mercedes-Benz',
                        price: 30000,
                        year: 2020,
                        body_type: 1,
                        model: 'S-Class',
                        images:
                            [
                                require('./../assets/Buy/S-class1.png'),
                                require('./../assets/Buy/S-class2.png')
                            ]
                    },
                ],
            }
        }
    }
</script>

<style scoped>

</style>