<template>
  <div>
		<div class="header">
			<div class="btms">
				<span id="btms"><img src="../assets/images/menu.png" @click="openClick" /></span>
			</div>
			<Manage :open.sync='isopen'></manage>
		</div>
  </div>
</template>
<script>
 import Manage from '../components/manage.vue'
	export default{
		name:'appheader',
		components: {
			Manage
		},
		data(){
			return{
				isopen:false
			}
		},
		mounted:function(){
			var _this = this;
			document.getElementById("body").addEventListener("click", function(){
									_this.isopen=false
									
					   console.log(_this.isopen)
					});
					
					document.getElementById("sidebar").addEventListener("click", function(even){
						even.stopPropagation()
					});
					
					document.getElementById("btms").addEventListener("click", function(even){
						even.stopPropagation()
					});
		},
		methods:{
			openClick(){
				this.isopen=true
			}
		}
	}
</script>

<style scoped="scoped">
	.btms{
		width: 100%;
	    height: 40px;
	}
	.btms img{
		position: absolute;
	    width: 24px;
	    height: 24px;
	    top: 8px;
	    left: 12px;
	}
</style>