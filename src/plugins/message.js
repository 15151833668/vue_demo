import message from './message.vue'
export default {
	install(Vue){
		Vue.prototype.$message = function(config){
			const constructor = Vue.extend(message);
			const instance = new constructor({
				data:{
					...config
				}
			});
			instance.$mount();
			document.body.appendChild(instance.$el)
			instance.isShow = true;
		}
	}
}