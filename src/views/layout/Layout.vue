<template>
  <div class="app-wrapper" :class="{hideSidebar: !sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
// import {Sidebar, Navbar, Appmain} from 'views/layout'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import appMain from './appMain'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    appMain
	},
	computed: {
		sidebar() {
			return this.$store.state.app.sidebar
		}
	}
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
	.app-wrapper {
		@include clearfix;
		position: relative;
		height: 100%;
		width: 100%;
		&.hideSidebar {
			.sidebar-container{
				width:36px;
				overflow: inherit;
			}
			.main-container {
				margin-left: 36px;
			}
		}
		.sidebar-container {
			transition: width 0.28s ease-out;
			width: 180px;
			height: 100%;
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			z-index: 1001;
			overflow-y: auto;
 			&::-webkit-scrollbar {display:none}
		}
		.main-container {
			min-height: 100%;
			transition: margin-left 0.28s ease-out;
			margin-left: 180px;
		}
	}

</style>


