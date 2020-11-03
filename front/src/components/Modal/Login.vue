<template>
    <b-modal :id="modal_id" centered title="Login" hide-header size="md" hide-footer>
        <el-row type="flex" justify="center">
            <el-col>
                <el-row>
                    <el-col style="padding: 1em;">
                        <el-radio-group v-model="labelPosition" size="small"
                                        style="justify-content: center; display: flex">
                            <el-radio-button label="login">Sign in</el-radio-button>
                            <el-radio-button label="registration">Registration</el-radio-button>
                        </el-radio-group>
                        <div style="margin: 20px;"></div>
                        <el-form v-if="labelPosition==='login'" label-width="100px"
                                 :model="formLogin">
                            <el-form-item label="Login:" prop="username">
                                <el-input v-model="formLogin.username"></el-input>
                            </el-form-item>
                            <el-form-item label="Password:">
                                <el-input show-password type="password" v-model="formLogin.password"></el-input>
                            </el-form-item>
                            <el-row justify="center" type="flex">
                                <el-col align="center" :span="6">
                                    <el-button type="primary" @click="auth()">Submit</el-button>
                                </el-col>
                            </el-row>
                        </el-form>
                        <el-form v-if="labelPosition==='registration'"
                                 label-width="100px" :model="formRegistration">
                            <el-form-item label="Login:" prop="username">
                                <el-input v-model="formLogin.username"></el-input>
                            </el-form-item>
                            <el-form-item label="Phone:" prop="phone">
                                <el-input type="phone" v-model="formLogin.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="Password:" prop="password">
                                <el-input type="password" v-model="formLogin.password"></el-input>
                            </el-form-item>
                            <el-form-item label="Re-Password:" prop="re-password">
                                <el-input type="password" v-model="formLogin.re_password"></el-input>
                            </el-form-item>
                            <el-row justify="center" type="flex">
                                <el-col align="center" :span="6">
                                    <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
                                </el-col>
                            </el-row>
                        </el-form>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </b-modal>
</template>

<script>
    export default {
        name: "Login",
        props: {
            modal_id: String
        },
        data() {
            return {
                labelPosition: 'login',
                formLogin: {
                    username: '',
                    password: '',
                },
                formRegistration: {
                    username: '',
                    password: '',
                    re_password: '',
                    phone: '',
                },
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            auth() {
                this.$store.dispatch('login', this.formLogin).catch(error => {
                    console.log(error)
                })

            }
        }
    }
</script>

<style scoped>
    h2 {
        font-family: "CircularStd-Bold", sans-serif;
    }
</style>