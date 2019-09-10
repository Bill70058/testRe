<template>
  <div id="login">
    <input type="text" name="" v-model="user"><br>
    <input type="text" name="" v-model="pass"><br>
    <button @click="InTo">登陆</button>
  </div>
</template>

<script>
import axios from 'axios'
import jquery from 'jquery'

export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: '',
      pass: '',
    }
  },
  methods: {
    InTo(){
      // console.log(this.user,this.pass);
      // console.log(axios);
      this.$http.get('http://localhost:1234/login',{
        param:{
          user: this.user,
          pass: this.pass
        }
      }).then(function(res){
        console.log(res);
      }).catch(function(error){
        console.log('login.vue文件链接失败');
      })
    }
  }
}
</script>

<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
