<template>
    <div>
        <el-row>
            <el-col>
                <h2>{{car.slogan}}</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="12">
                <p>{{car.title}}</p>
            </el-col>
            <el-col :lg="12" align="right">
                <p> &euro; {{car.price}}</p>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="12">
                <p>{{car.model}}</p>
            </el-col>
            <el-col :lg="12" align="right">
                <el-button>Add in card</el-button>
            </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
            <el-col v-for="(image,index) in car.images" :key="index" :span="12">
                <b-img :src="image" fluid-grow></b-img>
            </el-col>
        </el-row>
        <el-divider></el-divider>

        <el-row>
            <el-col :lg="8" align="middle"><img :src="require('./../assets/CarIcon/horse.svg')" height="50" width="50"
                                                alt=""></el-col>
            <el-col :lg="8" align="middle"><img :src="require('./../assets/CarIcon/speed.png')" height="50" width="50"
                                                alt=""></el-col>
            <el-col :lg="8" align="middle"><img :src="require('./../assets/CarIcon/CasStation.png')" height="35"
                                                width="35" alt=""></el-col>
        </el-row>


        <el-row>
            <el-col :lg="8" align="middle">{{car.acceleration}}</el-col>
            <el-col :lg="8" align="middle">{{car.horsepower}}</el-col>
            <el-col :lg="8" align="middle">{{car.fuel_consumption}}</el-col>
        </el-row>
        <el-divider></el-divider>


        <el-row>
            <b-img fluid :src="car.footer_img"></b-img>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Car",
        data() {
            return {
                car: {
                    slogan: 'Don`t stop there',
                    id: 3,
                    title: 'Mercedes-Benz',
                    price: 30000,
                    year: 2020,
                    body_type: 0,
                    model: 'E-Class',
                    acceleration: 0,
                    horsepower: 0,
                    fuel_consumption: 0,
                    footer_img: require('./../assets/Mercedes-Benz/C-class2.jpeg'),
                    images: [
                        require('./../assets/Mercedes-Benz/C-class.jpeg'),
                        require('./../assets/Mercedes-Benz/C-class2.jpeg'),
                        require('./../assets/Mercedes-Benz/C-class1.jpeg')
                    ]
                },
            }
        },
        methods: {
            numberCol(index) {
                var count_cols = this.car.images.length
                var count_rows = this.car.images.length / 2
                var index_max = (index) % 2 === 0 ? index : index + 1
                var index_row = count_rows - ((count_cols - index_max) / 2)
                if (this.car.images.length % 2 === 0) { // четное количесвто фоток
                    // var all_str = this.car.images.length / index
                    if ((index) % 2 === 0) { // чет индекс
                        if (index_row % 2 === 0) {
                            return 16
                        } else {
                            return 8
                        }
                    } else { //нечет инлекс
                        if (index_row % 2 === 0) {
                            return 8
                        } else {
                            return 16
                        }
                    }
                } else { // нечетное количесвто фоток
                    return 24
                }
            }
        }
    }
</script>

<style scoped>


</style>