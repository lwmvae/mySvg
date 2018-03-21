<template>
  <div id="app">
    <button id="btn1" @click="add('valueShow','btn1')">点击</button>  
    <button id="btn2" @click="add('valueShow','btn2')">点击</button>  
    <button id="btn3" @click="add('textDynamics','btn1')">点击</button>  
    <button id="btn4" @click="add('textDynamics','btn4')">点击</button>  
    <component :is="componentName" :getId="getId"></component>
    <aside-attr :getId="getId"></aside-attr>
  </div>
</template>

<script>
//值显示
import ValueShow from './confirm/valueShow/valueShow'
// 文本动态
import TextDynamics from './confirm/text/text'
// 长度动态
import Length from './confirm/length/length'
// 颜色动态
import Color from './confirm/color/color'
// 可见动态
import Visual from './confirm/visual/visual'
// 变量映射
import Mapping from './confirm/mapping/mapping'
// SET
import Set from './events/set/set'
// SETDYNA
import Setdyna from './events/setdyna/setdyna'
// ADD
import Add from './events/add/add'
// GO
import Go from './events/go/go'

import AsideAttr from './components/asideAttr/asideAttr'


import { mapMutations } from 'vuex'

export default {
  data(){
    return{
      getId:'',
      componentName:''
    }
  },
  methods:{
    add(name,id){
      this.setShow(true);
      this.componentName=name;
      this.getId=id;
    },
    ...mapMutations({
      setShow:'SET_SHOW_POPUP'
    })
  },
  components:{
    ValueShow,
    Length,
    TextDynamics,
    Color,
    Visual, 
    Mapping, 
    Set,
    Setdyna,
    Add,
    Go,
    AsideAttr
  }
}
</script>

<style>

</style>
