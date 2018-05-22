<template>
  <div>
    <!-- 简单的input提交 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>简单的input提交</span>
        <span style="float: right; padding: 3px 0"></span>
      </div>
      <div>
        <el-input v-model="inputMessage" placeholder="请输入您的姓名" class="myinp"></el-input>
        <el-button @click='pushInp' type="primary" plain size="small">提交您输入的内容</el-button>
        <p>您提交成功后的返回结果 : <span class="colors">{{tip}}</span></p>
      </div>
    </el-card>
    <!-- 简单的input提交 end -->
    <div class="wapper">
      <el-button  size="small" @click="goGet">回顾极简get</el-button>
    </div>
  </div>
</template>
<script>
import {inp } from '@/api/superSimple/post' //引入页面对应的接口api
export default {
  name: 'simpleGet',
  mounted() {},
  data() {
    return {
      inputMessage: '小王', //简单的input提交
      tip: ''
    }
  },
  methods: {
    pushInp() { //简单的input提交
      // alert("您输入的内容为："+this.inputMessage+",确定将此姓名提交到后台吗？")
      inp({ name: this.inputMessage }).then(res => { //调取接口
        console.log(res)
        this.tip = res.data.tip //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    goGet() {
      this.$router.push('/superSimple')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myinp {
  width: 20%;
}

.wapper {
  width: 100%;
  text-align: center;
}

.colors {
  color: #409EFF;
}

.box-card {
  margin-bottom: 30px;
}

</style>
