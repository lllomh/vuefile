<template>
	<div class="navs">
		<div class="sidebar" id="sidebar" v-bind:class="{'open':open}">
			<div class="sidebar-inner-index">
				<ul class="main-menu">
					<li>
						<form id="search-form">
							<span class="algolia-autocomplete" style="position: relative; display: inline-block; direction: ltr;"><input type="text" id="search-query-sidebar" class="search-query st-default-search-input aa-input" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-2" dir="auto" style="position: relative; vertical-align: top;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: system-ui; font-size: 12px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="aa-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-2" style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"><div class="aa-dataset-3"></div></span></span>
						</form>
					</li>
					<li class="nav-dropdown-container learn">
						<a class="nav-link">学习</a><span class="arrow"></span>
						<ul class="nav-dropdown">
							<li>
								<ul>
									<li>
										<a href="/v2/guide/" class="nav-link">教程</a>
									</li>
									<li>
										<a href="/v2/api/" class="nav-link">API</a>
									</li>
									<li>
										<a href="/v2/style-guide/" class="nav-link">风格指南</a>
									</li>
									<li>
										<a href="/v2/examples/" class="nav-link">示例</a>
									</li>
									<li>
										<a href="/v2/cookbook/" class="nav-link">Cookbook</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>

					<li class="nav-dropdown-container ecosystem">
						<a class="nav-link">生态系统</a><span class="arrow"></span>
						<ul class="nav-dropdown">
							<li>
								<h4>帮助</h4></li>
							<li>
								<ul>
									<li>
										<a href="https://forum.vuejs.org/" class="nav-link" target="_blank">论坛</a>
									</li>
									<li>
										<a href="https://chat.vuejs.org/" class="nav-link" target="_blank">聊天室</a>
									</li>
									<li>
										<a href="https://www.vuemeetups.org/" class="nav-link" target="_blank">聚会</a>
									</li>
								</ul>
							</li>
							<li>
								<h4>工具</h4></li>
							<li>
								<ul>
									<li>
										<a href="https://github.com/vuejs/vue-devtools" class="nav-link" target="_blank">Devtools</a>
									</li>
									<li>
										<a href="https://cli.vuejs.org/" class="nav-link" target="_blank">Vue CLI</a>
									</li>
									<li>
										<a href="https://vue-loader.vuejs.org" class="nav-link" target="_blank">Vue Loader</a>
									</li>
								</ul>
							</li>
							<li>
								<h4>核心插件</h4></li>
							<li>
								<ul>
									<li>
										<a href="https://router.vuejs.org/" class="nav-link" target="_blank">Vue Router</a>
									</li>
									<li>
										<a href="https://vuex.vuejs.org/" class="nav-link" target="_blank">Vuex</a>
									</li>
									<li>
										<a href="https://ssr.vuejs.org/" class="nav-link" target="_blank">Vue 服务端渲染</a>
									</li>
								</ul>
							</li>


						</ul>
					</li>

					<li>
						<a href="/v2/guide/team.html" class="nav-link team">团队</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		name: 'manage',
		components: {},
		    props: {
		      open: Boolean,
		      required: true
		    },
		data() {
			return {
				name:''
			}
		},
		mounted:function(){
			console.log(this.open+11)
		}

	}
</script>

<style lang="sass">
	@import url("../assets/scss/page.scss");
</style>


<style scoped="scoped">
	.sidebar {
    position: absolute;
    z-index: 10;
    top: 61px;
    left: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
}
	 .sidebar {
		    position: fixed;
		    z-index: 10;
		    background-color: #f9f9f9;
		    height: 100%;
		    top: 0;
		    left: 0;
		    box-shadow: 0 0 10px rgba(0,0,0,0.2);
		    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
		    -webkit-transform: translate(-280px, 0);
		    transform: translate(-280px, 0);
}
.sidebar .sidebar-inner-index {
    padding: 10px 10px 10px 20px;
}
.sidebar .main-menu {
    margin-bottom: 20px;
    display: none;
    padding-left: 0;
}
.sidebar .main-menu {
    display: block;
}
.sidebar.open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
a {
    text-decoration: none;
    color: #34495e;
}
.sidebar li {
    margin-top: 0.5em;
}
.sidebar ul {
    list-style-type: none;
    margin: 0;
    line-height: 1.5em;
    padding-left: 1em;
}
.nav-link {
    padding-bottom: 3px;
    white-space: nowrap;
}
.sidebar .search-query {
    width: 200px;
    margin-bottom: 10px;
}
.aa-dropdown-menu {
    background-color: #fff;
    border: 1px solid #333;
    border-radius: 4px;
    font-size: 16px;
    margin: 6px 0 0;
    padding: 4px;
    text-align: left;
}
.aa-dropdown-menu {
    width: 100%;
    border-color: #999;
    font-size: 0.9rem;
}
.search-query {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    background: #fff url(../assets/images/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
}
</style>
