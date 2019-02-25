<template>
<div class="refresh">
	<!-- <div style="position: fixed;top: 0;left:0;background: red;width: 100%;height: 50px;line-height: 50px;color: #fff;">我是fixed定位</div> -->
	<mt-refresh ref="refresh" @refresh="refreshCb"></mt-refresh>
	<mt-tabs :list="list" :active="tabIndex" @onclick="changeTab" ></mt-tabs>
        <br />
	<div class="list-wrapper list-1" v-if="tabIndex==0">
		<h2 v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">列表--{{index+1}}</h2>
	</div>
	<div id="list-2" class="list-wrapper list-2" v-else>
		<h2 v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">列表--{{index+1}}</h2>
	</div>
	<mt-cell-g title="注意">
		<mt-cell>
			1.如果有fixed布局，要传isFixed='true',否则会有bug
		</mt-cell>
		<mt-cell>2. 不建议在过于复杂的布局中使用</mt-cell>
		<mt-cell>3. 估计跟loadmore组件有冲突，不建议一起使用</mt-cell>
	</mt-cell-g>
</div>
</template>

<script>
export default {
	data(){
		return {
			list: [{
				text: '普通布局'
			},{
				text: '局部滚动'
			}],
			tabIndex: 0,
		}
	},
	watch:{
		
	},
	methods: {
		changeTab(data){
			this.tabIndex = data.value;
		},
		refreshCb(e){
			let _this = this;
			setTimeout(()=>{
				this.$refs.refresh.refreshEnd();
			},2000)
		}
	},


}
</script>

<style lang="less" scoped>
	.list-wrapper {
		h2 {
			padding: 0 20px;
			line-height: 50px;
			border-bottom: 1px solid #eee;
		}
	}

	.list-1 {
		text-align: left;
	}

	.list-2 {
		height: 350px;
		overflow-y: scroll;
		text-align: right;
	}
</style>

