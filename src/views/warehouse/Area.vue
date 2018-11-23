<template>
  <div>
    <h1>{{$t('message.hello')}}</h1>
    <el-button type="primary" @click="open">{{$t('btn.text')}}</el-button>
    <el-date-picker
      v-model="value1"
      type="date">
    </el-date-picker>
    <el-select v-model="value">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div>
      <el-date-picker
        v-model="value3"
        type="datetime"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        @change="time(value3)">
      </el-date-picker>
      {{value3}}
      <el-button type="primary" size="small" @click="openDialog">添加</el-button>
      <el-table :data="formData">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="时间">
          <template scope="scope">
            <span>{{scope.row.date1}}</span>
          </template>
        </el-table-column>
      </el-table>
      {{formData}}
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" v-el-drag-dialog>
        <el-form :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-date-picker type="datetime" format="yyyy 年 MM 月 dd 日 HH时:mm分:ss秒" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
  
</template>

<script>
import elDragDialog from '@/directive/el-dragDialog' // base on element-ui
import { parseTime } from '../../util'
export default {
  directives: { elDragDialog },
  data() {
    return {
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      value1: '',
      value3: '',
      value: '',
      dialogVisible: false,
      formData: [],
      form: {
        date1: '',
        name: ''
      }
    }
  },
  methods: {
    // v-el-drag-dialog onDrag callback function
    // handleDrag() {
    //   this.$refs.select.blur()
    // },
    open() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    time(str) {
      console.log(str)
      console.log(str + 8 * 3600 * 1000)
      var date = new Date(str + 8 * 3600 * 1000); // 增加8小时

      console.log(date.toJSON().substr(0, 19).replace('T', ' '))
    },
    openDialog() {
      for(var p in this.form) {
        this.form[p] = ''
      }
      this.dialogVisible=true
      console.log(this.form)
    },
    onSubmit() {
      this.formData.unshift(this.form)
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>


