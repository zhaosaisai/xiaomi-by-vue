//先引入两个初始化的css文件
import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css';
//再引入我们的vue程序
import Vue from 'vue';
//引入我们的组件入口
import App from './App';

//进行初始化我们的程序
const vm = new Vue({
  el:'body',
  components:{
    App
  }
})
