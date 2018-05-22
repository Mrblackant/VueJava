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
    <!-- form提交 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>form表单提交</span>
        <span style="float: right; padding: 3px 0"></span>
      </div>
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name" class="myinp"></el-input>
          </el-form-item>
          <!--  -->
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <!--  -->
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <!--  -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
          <!--  -->
        </el-form>
        <p class="">表单提交成功后的提示: <span class="colors">{{formTip}}</span></p>
      </div>
    </el-card>
    <!-- form提交 end -->
    <div class="wapper">
      <el-button  size="small" @click="goGet">回顾get</el-button>
      <el-button type="primary" size="small" @click="goTable">进阶table</el-button>
    </div>
  </div>
</template>
<script>
import { inp, formpost } from '@/api/form' //引入页面对应的接口api
export default {
  name: 'simpleGet',
  mounted() {},
  data() {
    return {
      inputMessage: '小王', //简单的input提交
      tip: '',
      form: {
        name: '默认名称', //活动名称
        region: '', //活动区域
        type: [] //活动性质
      },
      formTip: '' //form提交后的成功消息
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
    onSubmit() {
      console.log(this.form)
      formpost(this.form).then(res => { //调取接口
        console.log(res)
        this.formTip = res.data.tip //将拿到的结果赋值给事先写好的值
      }).catch(err => {
        console.log(err)
      })
    },
    goTable() { //跳转到table
      this.$router.push('/table')
    },
    goGet() {
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
