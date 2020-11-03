<template>
    <div>
        <el-row>
<!--            <el-col>-->
<!--                <b-img fluid-grow :src="require('./../assets/C-class/BC.jpeg')"></b-img>-->
<!--            </el-col>-->
        </el-row>
        <el-row type="flex" justify="center">
            <el-col :lg="18">
                <p style="font-size: 16pt;font-family: 'CircularStd-Bold', sans-serif;">C-Class.</p>
                <p style="font-size: 24pt;font-family: 'CircularStd-Bold', sans-serif;">Don't stop there.</p>
            </el-col>
        </el-row>
        <el-row justify="center" type="flex">
            <el-col :lg="18">
                <b-img fluid-grow :src="require('./../assets/C-class/C-class.jpeg')"></b-img>
            </el-col>
            <el-col :lg="18">
                <b-img fluid-grow
                       :src="require('./../assets/C-class/C-class2.jpeg')"></b-img>
            </el-col>
        </el-row>
        <el-row>
            <el-col :lg="24">
                <b-img fluid-grow
                       :src="require('./../assets/C-class/C-class3.jpeg')"></b-img>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Car"
    }
</script>

<style scoped>


</style>