<template>
  <el-menu 
    :default-active="$route.path" 
    background-color="#324157"
    text-color="#bfcbd9"
    mode="vertical"
    unique-opened
    :collapse="isCollapse">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import {mapGetters} from 'vuex'
import SidebarItem from './SidebarItem.vue'

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      routes: []
    }
  },
  created() {
    setTimeout(() => {
      this.fetchMenus()
    }, 500)
  },
  methods: {
    // 获取菜单
    fetchMenus() {
      this.$axios.get('../../../static/menu/menu.json')  // https://easy-mock.com/mock/5b7e510f835aab0d77dae752/example_copy/menu
        .then(res => {
          console.log(res)
          this.routes = res.data.menu
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

