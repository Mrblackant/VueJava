<template>
  <div id="app">
    <div class="myapp">
      <img src="./assets/logo.png">
      <div class="change">
        <el-select @change="changmore(value)" v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted() {
    this.watchRouter()
  },
  data() {
    return {
      value: 'detail',
      options: [{
          label: '详细版',
          value: 'detail'
        },
        {
          label: '极简版',
          value: 'simple'
        }
      ]
    }
  },
  methods: {
    watchRouter() {
      if (this.$route.path === '/superSimple'||this.$route.path === '/superSimplePost') {
        this.value = 'simple'
      } else {
        this.value = 'detail'
      }
    },
    changmore(val) {
      console.log(val)
      if (val === 'simple') {
        this.$router.push('/superSimple')
      } else {
        this.$router.push('/')
      }
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.myapp {
  width: 100%;
  text-align: center;
}

.myapp img {
  margin: 0 auto;
}

.change {
  position: absolute;
  top: 70px;
  right: 20px;
  width: 93px;
}

</style>
