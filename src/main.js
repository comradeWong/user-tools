import {createApp} from 'vue'
import './style.css'
import './style/tailwind.css'
import App from './App.vue'
import router from './router'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
const toastOptions = {
    hideProgressBar: true,
    timeout: 3000
}
app.use(router).use(Toast, toastOptions).mount('#app')
