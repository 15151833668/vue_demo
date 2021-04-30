import Vuex from "vuex"
import Vue from "vue"
import create from 'vuex-persistedstate'
Vue.use(Vuex);
const store = new Vuex.Store({
	plugins:[
		create()
	],
	state:{
	
	},
	getters:{
		
	},
	mutations:{
	
	},
	actions:{
		
	},
	
})

export default store;