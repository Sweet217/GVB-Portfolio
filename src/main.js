import { createApp } from 'vue'
import './styles/app.css'
import Portfolio from './portfolio.vue'
import VueSmoothScroll from 'vue-smooth-scroll';

const app = createApp(Portfolio);
app.use(VueSmoothScroll);
app.mount('#app');