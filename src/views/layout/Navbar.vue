<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger 
      class="hamburger-container"
      :toggleClick="toggleSideBar"
      :isActive="!sidebar.opened">
    </hamburger>
    <div class="right-menu">
      <screenfull class="screenfull"></screenfull>
      <div class="lang">
        <el-dropdown>
          <i class="iconfont icon-language4"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="toggleLang('zh')" :disabled="$i18n.locale == 'zh'">中文</el-dropdown-item>
            <el-dropdown-item @click.native="toggleLang('en')" :disabled="$i18n.locale == 'en'">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <theme-picker></theme-picker>
    </div>
  </el-menu>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import hamburger from '@/components/Hamburger'
import screenfull from '@/components/Screenfull'
import themePicker from '@/components/ThemePicker'

export default {
  components: {
    hamburger,
    screenfull,
    themePicker
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.toggleSidebar()
    },
    toggleLang(lang) {
      if(lang == 'zh'){
        localStorage.setItem('locale', 'zh')
        this.$i18n.locale = localStorage.getItem('locale')
        this.$message({
          message: '切换为中文！',
          type: 'success'
        })
      } else if (lang == 'en') {
        localStorage.setItem('locale', 'en')
        this.$i18n.locale = localStorage.getItem('locale')
        this.$message({
          message: 'Switch to English!',
          type: 'success'
        })
      }
    },
    ...mapActions([
      'toggleSidebar'
    ])
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    float: left;
    width: 50px;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    text-align: center;
    outline: none;
  }
  .right-menu{
    float: right;
    height: 100%;
    padding-right: 30px;
    outline: none;
    .theme-picker{
      vertical-align: middle;
    }
  }
  .errLog-container {
    display: inline-block;
    position: absolute;
    right: 150px;
  }
  .screenfull, .lang {
    display: inline-block;
    height: 22px;
    line-height: 22px;
    margin: 0 8px;
    cursor: pointer;
    vertical-align: -0.15em;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
      }
      .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
      }
    }
  }
}
</style>


