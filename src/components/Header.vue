<template>
  <div>
		<div class="header" :class="{'top':istop}" id="mobile-bar">
			<div class="btms">
				<span id="btms"><img src="../assets/images/menu.png" @click="openClick" /></span>
				<router-link to="/" v-show="!istop"><a class="logo" href="javascript:;"></a></router-link>
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
				isopen:false,
				istop:false
			}
		},
		mounted:function(){
			var _this = this;
			document.getElementById("body").addEventListener("click", function(){
									_this.isopen=false

					});

					document.getElementById("sidebar").addEventListener("click", function(even){
						even.stopPropagation()
					});

					document.getElementById("btms").addEventListener("click", function(even){
						even.stopPropagation()
					});

					if(this.$route.path=='/'){
                        this.istop=true
					}else {
                        this.istop=false
					}

		},
        watch:{
            $route(to,from){

               if(to.path=='/'){

                   this.istop=true
			   }else {
                   this.istop=false

			   }
            }
        },
		methods:{
			openClick(){
				this.isopen=true
			},
			istops(){
			    console.log(this.$route.path)
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

	#mobile-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #fff;
    z-index: 9;
    display: none;
    box-shadow: 0 0 2px rgba(0,0,0,0.25);
}
	#mobile-bar {
    display: block;
}
#mobile-bar.top {
    background-color: transparent;
    box-shadow: none;
}
</style>
