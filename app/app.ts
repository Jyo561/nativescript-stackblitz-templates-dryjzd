import Vue from 'nativescript-vue';
import Home from './components/Home.vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__;

// Load TNSFonticon
TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  fa: './assets/css/fontawesome.min.css',
  far: './assets/css/regular.min.css',
  fas: './assets/css/solid.min.css',
  fab: './assets/css/brand.min.css',
};
TNSFontIcon.loadCss();
Vue.filter('fonticon', fonticon);
new Vue({
  render: (h) => h('frame', [h(Home)]),
}).$start();
