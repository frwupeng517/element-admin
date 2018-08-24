<template>
  <div class="menu-wrapper">
    <template v-for="item in routes">
      <!-- 只有一级菜单的情况 -->
      <router-link 
        v-if="item.children == undefined"
        :to="item.path">
        <el-menu-item
          :index="item.path"
          class="submenu-title-noDropdown">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.label}}</span>
        </el-menu-item>
      </router-link>
      <!-- 有多级菜单的情况 -->
      <el-submenu v-if="item.children && item.children.length > 0" :index="item.label">
        <template slot="title">
          <i class="iconfont" :class="item.icon"></i>
          <span>{{item.label}}</span>
        </template>
        <template v-for="child in item.children">
          <sidebar-item 
            class="nest-menu" 
            v-if="child.children && child.children.length > 0"
            :routes='[child]'>
          </sidebar-item>
          <router-link v-else :to="child.path">
            <el-menu-item :index="child.path">
              <i class="iconfont" :class="child.icon"></i>
              <span>{{child.label}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    }
  }
}
</script>

