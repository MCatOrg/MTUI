<template>
<section>
	<mt-button @click="defaultToast">默认Toast</mt-button>
	<mt-button @click="timeToast">指定Toast时间</mt-button>
	<mt-button @click="maskToast">有遮罩Toast(不能点击页面其他元素)</mt-button>
	<router-link :to="{name: 'button'}">页面跳转</router-link>
	
</section>
</template>

<script>
export default {
	name: 'toast',
	data(){
		return {

		}
	},
	methods:{
		defaultToast(){
			this.$Toast('默认Toast');
		},

		timeToast(){
			this.$Toast('指定Toast时间,10秒后消失',10*1000);
		},

		maskToast(){
			this.$Toast('有遮罩Toast',{showMask: true}); 
		}
	}
}
</script>

<style>
	
</style>