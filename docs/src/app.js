import Vue from 'vue';
import Buefy from 'buefy';
import VueClipboard from 'vue-clipboard2'

import 'buefy/dist/buefy.css';
import './styles.css';

import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import AncientSouthArabian from './AncientSouthArabian.vue';

Vue.use(Buefy);
Vue.use(VueClipboard)

new Vue({
  el: '#app',
  components: {
    Navbar,
    Hero,
    AncientSouthArabian
  }
});