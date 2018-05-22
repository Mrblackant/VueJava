<template>
  <div>
    <!-- 页面一加载就进行的渲染 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{baseInfo.title}}</span>
        <span style="float: right; padding: 3px 0">页面加载时取得数据</span>
      </div>
      <div>
        <p>{{baseInfo.content}}</p>
      </div>
    </el-card>
    <!-- 页面一加载就进行的渲染 end -->
    <!-- 简单的get请求 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息描述</span>
        <span style="float: right; padding: 3px 0">简单的get请求</span>
      </div>
      <div>
        <ul>
          <li>姓名：{{testDate.name}}</li>
          <li>身高：{{testDate.height}}厘米</li>
          <li>年龄：{{testDate.age}}岁</li>
        </ul>
        <el-button @click='testapi' type="primary" plain size="small">后台获取个人信息</el-button>
      </div>
    </el-card>
    <!-- 简单的get请求 end-->
    <!-- get请求渲染列表 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>班级信息</span>
        <span style="float: right; padding: 3px 0">获取数据列表的get请求</span>
      </div>
      <div>
        <ul v-for="(item,index) in testDateList">
          <li>姓名：{{item.name}}</li>
          <li>身高：{{item.height}}厘米</li>
          <li>年龄：{{item.age}}岁</li>
        </ul>
        <el-button @click='testlistsapi' type="primary" plain size="small">后台获取班级信息列表</el-button>
      </div>
    </el-card>
    <!-- get请求渲染列表 end-->
    <div class="wapper">
      <el-button type="primary" size="small" @click="goForm">进阶form</el-button>
    </div>
  </div>
</template>
<script>
import { user, users, baseInfo } from '@/api' //引入页面对应的接口api
export default {
  name: 'simpleGet',
  mounted() {
    this.baseinfoapi()
  },
  data() {
    return {
      baseInfo: {},
      testDate: { //事先设定好字段 简单的get请求
        name: '',
        height: '',
        age: ''
      },
      testDateList: // 事先设定好字段 用户信息列表
        [{
          name: '',
          height: '',
          age: ''
        }]

    }
  },
  methods: {
    baseinfoapi() { //页面一加载就进行的渲染
      baseInfo().then(res => { //调取接口
        console.log(res)
        this.baseInfo = res.data //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    testapi() { //按钮点击事件 简单的get请求
      user().then(res => { //调取接口
        console.log(res)
        this.testDate = res.data //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    testlistsapi() {
      users().then(res => { //调取接口
        console.log(res)
        this.testDateList = res.data.list //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    goForm(){//跳转到form
      this.$router.push('/form')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box-card {
  margin-bottom: 30px;
}
.wapper{
  width: 100%;
  text-align: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
