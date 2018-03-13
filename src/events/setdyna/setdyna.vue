<template>
  <popup title="事件SETDYNA" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <trigger-mode :options="options" @mode="getType"></trigger-mode>
      <el-form-item label="变量名">
        <el-input class="name" v-model="form.name"></el-input>
      </el-form-item>
      <table class="table" v-show="form.value.length">
        <thead>
          <th>序号</th>
          <th>选中</th>
          <th></th>
          <th>下限</th>
          <th></th>
          <th>上限</th>
          <th>赋值为</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in form.value">
            <td>{{index+1}}</td>
            <td><el-checkbox v-model="item.choose"></el-checkbox></td>
            <td>
              <i class="more-equal"></i>
            </td>
            <td><el-input v-model="item.min"></el-input></td>
            <td>
              <i class="less"></i>
            </td>
            <td><el-input v-model="item.max"></el-input></td>
            <td><el-input v-model="item.evaluate"></el-input></td>
            <el-button plain class="el-icon-minus" @click="reduce(index)"></el-button>
          </tr>
        </tbody>
      </table>
      <div class="btn-add">
        <el-button type="primary" class="el-icon-plus" @click="add"></el-button>
      </div>
    </el-form>
  </popup>
</template>
<script>
import Popup from '../../confirm/popup/popup'
import TriggerMode from '../triggerMode/triggerMode'
export default {
  data() {
    return {
      form: {
        type:null,
        name: null,
        value:[{choose:true,min:null,max:null,evaluate:null}]
      },
      options:['页面创建','实时刷新','左键单击','左键双击','右键单击','右键双击']
    }
  },
  methods:{
   saveValue(){  
   },
   del(){
   },
   getType(index){
    this.form.type=this.options[index]
    console.log(this.form.type)
  },
  add(){
    this.form.value.push({choose:true,min:null,max:null,evaluate:null})
    },
    reduce(index){
      this.form.value.splice(index,1)
    },
    filterForm(arr){
      let ret=[];
      arr.forEach((item)=>{
        if(item.choose===true){
          ret.push(item)
        }
      })
      return ret;
    }
},
components: {
  Popup,
  TriggerMode
}
}
</script>
<style>
@import 'setdyna.css'
</style>