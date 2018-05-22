<template>
  <div>
    <!-- 简单的input提交 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>简单的table展示</span>
        <span style="float: right; padding: 3px 0"></span>
      </div>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址">
          </el-table-column>
        </el-table>
        <el-button class="mt" @click='getTable' type="primary" plain size="small">获取table数据</el-button>
      </div>
    </el-card>
     <div class="wapper">
      <el-button  size="small" @click="goForm">回顾form</el-button>
      <el-button type="primary" size="small" @click="goGet">回顾get</el-button>
    </div>
  </div>
</template>
<script>
import { table } from '@/api/table' //引入页面对应的接口api
export default {
  name: 'simpleGet',
  mounted() {},
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getTable() {
      table().then(res => { //调取接口
        console.log(res)
        this.tableData = res.data.tableData //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    goForm(){//跳转到form
      this.$router.push('/form')
    },
    goGet(){
      this.$router.push('/')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myinp {
  width: 20%;
}
.wapper{
  width: 100%;
  text-align: center;
}
.colors {
  color: #409EFF;
}
.mt{
  margin-top: 30px;
}
.box-card {
  margin-bottom: 30px;
}

</style>
