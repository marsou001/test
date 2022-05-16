import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
createApp(App).use(router).mount('#app')
