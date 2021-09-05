import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/base.css'
import Antd from 'ant-design-vue'
import "ant-design-vue/dist/antd.css"

const app = createApp(App)
installElementPlus(app)
app.use(store).use(router)
app.use(Antd)
.mount('#app')