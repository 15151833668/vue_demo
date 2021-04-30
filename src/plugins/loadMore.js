export default {
	install(Vue){
		Vue.directive("loadMore",{
			bind(el,binding){
				window.onscroll = function() {
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
					var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
					if (scrollTop + windowHeight >= scrollHeight-1) {
						binding.value();
					}
				}
			},
			update(el,binding){
				
			},
			inserted(){
				
			}
		})
		Vue.directive("loadMore1",{
			bind(el,binding){
		window.onscroll = function() {
		
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
					var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
					if (scrollTop + windowHeight >= scrollHeight-1) {
						binding.value();
					}
				}
			}
		})
	}
}

