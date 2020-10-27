<template>
    <el-row>
        <el-col :span="24">
            <el-divider style="background-color: black"></el-divider>
            <el-row type="flex" justify="center">
                <el-col :lg="6" align="center" class="mb-3">
                    <img src="../assets/SocIcon/faceBook.png" alt="" width="50" height="50">
                    <img src="../assets/SocIcon/Instagram.png" alt="" width="50" height="50">
                    <img src="../assets/SocIcon/Twitter.png" alt="" width="50" height="50">
                    <img src="../assets/SocIcon/Linkden.png" alt="" width="50" height="50">
                    <img src="../assets/SocIcon/WatsApp.png" alt="" width="50" height="50">
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="hidden-md-and-up" style="font-size: 10pt; color: black !important;    ">
                <el-col :lg="14">
                    <p style="text-align: center; font-family: 'Bebas Neue-Bold'">
                        The first Mercedes-Benz brand name vehicles were produced in 1926, following the merger of Karl
                        Benz's and Gottlieb Daimler's companies into the Daimler-Benz company on 28 June of the same
                        year. Gottlieb Daimler was born on 17 March 1834 in Schorndorf.
                    </p>
                    <el-divider style="background-color: black"></el-divider>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="hidden-sm-and-down">
                <el-col :lg="14">
                    <p style="text-align: center; font-family: 'Bebas Neue-Bold'; color: black">
                        The first Mercedes-Benz brand name vehicles were produced in 1926, following the merger of Karl
                        Benz's and Gottlieb Daimler's companies into the Daimler-Benz company on 28 June of the same
                        year. Gottlieb Daimler was born on 17 March 1834 in Schorndorf.
                    </p>
                    <el-divider style="background-color: black"></el-divider>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="hidden-md-and-up" style="font-size: 10pt">
                <el-col :lg="24">
                    <p style="text-align: center; font-family: 'Bebas Neue-Bold'; color: black">&COPY; 2020. Mercedes-Benz</p>
                </el-col>
            </el-row>
            <el-row type="flex" justify="center" class="hidden-sm-and-down">
                <el-col :lg="24">
                    <p style="text-align: center; font-family: 'Bebas Neue-Bold'; color: black">&COPY; 2020. Mercedes-Benz</p>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>