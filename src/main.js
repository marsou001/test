import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import 'flowbite';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fas, faFacebook);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');