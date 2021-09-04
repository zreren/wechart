<template>
<body>
<div class="container" id="container">
 <div class="form-container sign-up-container">
  <form  @submit.prevent="()=>false">
   <h1>注册你的账号</h1>
   <span>输入信息进行注册</span>
   <input v-model="userName" type="text" placeholder="Name" />
   <input v-model="userId"  placeholder="Email" />
   <input v-model="password" type="password" placeholder="Password" />
   <button @click="toSignUp">注册</button>
  </form>
 </div>
 <div class="form-container sign-in-container">
  <form @submit.prevent="()=>false">
   <h1>登陆</h1>
   <span>输入信息进行登陆</span>
   <input  v-model="userId"  placeholder="Email" />
   <input type="password" v-model="password" placeholder="Password" />
   <a href="#">忘记密码?</a>
   <button @click="toSignIn">登陆</button>
  </form>
 </div>
 <div class="overlay-container">
  <div class="overlay">
   <div class="overlay-panel overlay-left">
    <h1 style="color:white">欢迎回来!</h1>
    <p>登陆体验更多功能</p>
    <button class="ghost" id="signIn" @click="signInChange">登陆</button>
   </div>
   <div class="overlay-panel overlay-right">
    <h1 style="color:white">你好，朋友!</h1>
    <p>注册账号跟大家一起发现你的数据图表吧！</p>
    <button class="ghost" id="signUp" @click="signUpChange">注册</button>
   </div>
  </div>
 </div>
</div>
    <footer>
            @create by WeChart
    </footer>
</body>
</template>

<script>
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import signUp from '../http/signUp'
import signIn from '../http/signIn'
import md5 from 'js-md5';
export default {
    name:'Login',
    
    setup() {
    let router = useRouter()
    let store = useStore()
    /**
     * 页面样式js
     */
    let container;
    onMounted(()=>{
        container = document.getElementById('container');
    })
    function signUpChange() {
        container.classList.add("right-panel-active");
    }
    function signInChange() {
        container.classList.remove("right-panel-active");
    }

    /**
     * 页面逻辑
     */
    /**
     * 注册组件
     */
    const userName = ref('')
    const userId = ref('')
    const password = ref('')
    let mdpassword = ref('')
    async function toSignUp() {
        try{
            const res =  await signUp({
            userName:userName.value,
            userId:userId.value,
            password:md5(password.value),
            })
            if(res.status === '200')
            {
            ElMessage.success({
            message: '恭喜你，注册成功',
            type: 'success'
            })
            userName.value = ''
            userId.value = ''
            password.value = ''
            container.classList.remove("right-panel-active")
            }
            else
            ElMessage.warning({
            message: `${res.msg}`,
            type: 'warning'
            })
        }
        catch(err){
            console.log(err)
            ElMessage.error('出错了！')
        }
    }

    /**
     * 登录
     */
    async function toSignIn() {
        try{
            const res = await signIn({
                userId:userId.value,
                password:md5(password.value),
            })
            if(res.status === '200')
            {
                ElMessage.success({
                message: '登陆成功',
                type: 'success'
                })
                userId.value = ''
                password.value = ''
                localStorage.setItem('token',res.token)
                store.state.isSignIn = true
                router.push('/')
            }
            else
            ElMessage.warning({
            message: `${res.msg}`,
            console:password,
            type: 'warning'
            })
        }
        catch(err) {
            console.log(err)
            ElMessage.error('出错了！')
        }
    }


    return {
        signUpChange,
        signInChange,
        toSignUp,
        userName,
        userId,
        password,
        toSignIn
    }
     
    }
}
</script>

<style lang="less" scoped>
// 根伪类 自动css属性
* {
 box-sizing: border-box;
}

body {
 background: #EEF2F8;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 font-family: 'Montserrat', sans-serif;
 height: calc(100vh - 60px);
}

h1 {
 font-weight: bold;
 margin: 0;
}

h2 {
 text-align: center;
}

p {
 font-size: 14px;
 font-weight: 100;
 line-height: 20px;
 letter-spacing: 0.5px;
 margin: 20px 0 30px;
}

span {
 font-size: 12px;
}

a {
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
}

button {
 border-radius: 20px;
 border: 1px solid #2F80ED;
 background-color: #2F80ED;
 color: #FFFFFF;
 font-size: 12px;
 font-weight: bold;
 padding: 12px 45px;
 letter-spacing: 1px;
 text-transform: uppercase;
 transition: transform 80ms ease-in;
}

button:active {
 transform: scale(0.95);
}

button:focus {
 outline: none;
}

button.ghost {
 background-color: transparent;
 border-color: #FFFFFF;
}

form {
 background-color: #FFFFFF;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
}

input {
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
}

.container {
 background-color: #fff;
 border-radius: 10px;
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
   0 10px 10px rgba(0,0,0,0.22);
 position: relative;
 overflow: hidden;
 width: 768px;
 max-width: 100%;
 min-height: 480px;
}

.form-container {
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
}

.sign-in-container {
 left: 0;
 width: 50%;
 z-index: 2;
}

.container.right-panel-active .sign-in-container {
 transform: translateX(100%);
}

.sign-up-container {
 left: 0;
 width: 50%;
 opacity: 0;
 z-index: 1;
}

.container.right-panel-active .sign-up-container {
 transform: translateX(100%);
 opacity: 1;
 z-index: 5;
 animation: show 0.6s;
}

@keyframes show {
 0%, 49.99% {
  opacity: 0;
  z-index: 1;
 }
 
 50%, 100% {
  opacity: 1;
  z-index: 5;
 }
}

.overlay-container {
 position: absolute;
 top: 0;
 left: 50%;
 width: 50%;
 height: 100%;
 overflow: hidden;
 transition: transform 0.6s ease-in-out;
 z-index: 100;
}

.container.right-panel-active .overlay-container{
 transform: translateX(-100%);
}

.overlay {
 background: #409eff;
 background-repeat: no-repeat;
 background-size: cover;
 background-position: 0 0;
 color: #FFFFFF;
 position: relative;
 left: -100%;
 height: 100%;
 width: 200%;
   transform: translateX(0);
 transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
   transform: translateX(50%);
}

.overlay-panel {
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 40px;
 text-align: center;
 top: 0;
 height: 100%;
 width: 50%;
 transform: translateX(0);
 transition: transform 0.6s ease-in-out;
}

.overlay-left {
 transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
 transform: translateX(0);
}

.overlay-right {
 right: 0;
 transform: translateX(0);
}

.container.right-panel-active .overlay-right {
 transform: translateX(20%);
}

.social-container {
 margin: 20px 0;
}

.social-container a {
 border: 1px solid #DDDDDD;
 border-radius: 50%;
 display: inline-flex;
 justify-content: center;
 align-items: center;
 margin: 0 5px;
 height: 40px;
 width: 40px;
}

footer{
    position: absolute;
    bottom: 25px;
    color: #c9d0da;
}

</style>