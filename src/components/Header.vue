<template>
  <div>
		<div class="header">
			<div class="btms">
			<img src="../assets/images/menu.png" />
			</div>
			<Manage></manage>
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