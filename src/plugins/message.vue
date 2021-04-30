<template>
	<transition name="slide">
		<div id="msg" :class="type" v-if="isShow">
		<p>{{content}}</p>
	</div>
	</transition>
	
</template>

<script>
	export default {
		name:"message",
		data(){
			return {
				content:"",
				type:'',
				isShow:false
			}
		},
		watch:{
			isShow(n,o){
				if(n){
					setTimeout(()=>{
					 this.isShow = false;	
					},2000)
				}
			}
		}
	}
</script>

<style scoped="scoped">
	#msg{
		width: 200px;
		height: 40px;
		line-height: 40px;
		position: fixed;
		top: 15%;
		left: 50%;
		z-index: 101;
		border-radius: 8px;
		
	}
	.success{
		border: 1px solid green;
		background-color: rgba(0, 170, 0, 0.5);
	}
	.warn{
		border: 1px solid yellow;
	}
	.error{
		border: 1px solid red;
		background-color: rgba(255, 0, 0, 0.5);
	}
	.default{
		border: 1px solid black;
		background-color: rgba(0, 0, 0, 0.5);
	}
	p{
		margin: 0 30px;
		font-size: 16px;
	}
	.success p{
		color: green;
	}
	.warn p{
		color: yellow;
	}
	.error p{
		color: red;
	}
	.default p{
		color: black;
	}
	.slide-enter-active{
		animation: slide-down 0.5s;
	}
	.slide-leave-active{
		animation: slide-up 0.5s;
	}
	@keyframes slide-down{
		from{
			top: -10%;
		}
		to{
			top: 15%;
		}
	}
	@keyframes slide-up{
		from{
			top: 15%;
		}
		to{
			top: -10%;
		}
	}
</style>
