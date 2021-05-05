import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store/store'

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
