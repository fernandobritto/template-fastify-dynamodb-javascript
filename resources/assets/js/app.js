window.Vue = require('vue');

Vue.component('categoria', require('./components/Category.vue'));

const app = new Vue({
    el: '#app',
    data :{
        menu: 0,
    }
});
