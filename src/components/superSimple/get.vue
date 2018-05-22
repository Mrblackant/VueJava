<template>
  <div>
    <!-- 页面一加载就进行的渲染 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="font_title">{{baseInfo.title}}</span>
        <span style="float: right; padding: 3px 0">GET请求(带参数)</span>
      </div>
      <div>
        <p class="font_cont">{{baseInfo.content}}</p>
      </div>
    </el-card>
    <!-- 页面一加载就进行的渲染 end -->
    <div class="wapper">
      <el-button type="primary" size="small" @click="goSimplePost">极简版post</el-button>
    </div>
    </div>
</template>
<script>
import {baseInfo } from '@/api/superSimple/get' //引入页面对应的接口api
export default {
  name: 'simpleGet',
  mounted() {
    this.baseinfoapi()
  },
  data() {
    return {
      baseInfo: {//事先设定好字段
        title:'',//事先设定好的title
        content:'',//事先设定好的content
      }
    }
  },
  methods: {
    baseinfoapi() { //页面一加载就进行的渲染
      baseInfo({'name':'杨超'}).then(res => { //调取接口
        this.baseInfo = res.data //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    goSimplePost(){
      this.$router.push('/superSimplePost')
  }
  }

}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.font_title{
color:steelblue;
font-weight:bold;
font-size:19px;
}
.font_cont{

}
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
