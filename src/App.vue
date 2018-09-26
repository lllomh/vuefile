<template>
  <div id="app">
  	<AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
	 import AppHeader from './components/Header.vue'
//   import AppFooter from './components/Footer.vue'
export default {
  name: 'app',
  components:{
  	AppHeader
  }
}
</script>
