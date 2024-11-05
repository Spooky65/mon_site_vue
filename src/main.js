// import './assets/main.css'

import { createApp, ref, computed } from 'vue'
import App from './App.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import router from './router/index.js'

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
