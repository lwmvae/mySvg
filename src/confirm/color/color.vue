<template>
  <popup title="颜色动态" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="变量名">
        <el-input v-model="form.name" class="name"></el-input>
        <el-radio v-model="form.radio" label="1">背景色</el-radio>
        <el-radio v-model="form.radio" label="2">文字颜色</el-radio>
      </el-form-item>
      <table class="table" v-show="form.value.length">
        <thead>
          <th>序号</th>
          <th>选中</th>
          <th></th>
          <th>下限</th>
          <th></th>
          <th>上限</th>
          <th>闪烁</th>
          <th>基本色</th>
          <th>变换色</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in form.value">
            <td>{{index+1}}</td>
            <td><el-checkbox v-model="item.choose"></el-checkbox></td>
            <td>
              <i class="more-equal"></i>
            </td>
            <td><el-input class="num" v-model="item.min"></el-input></td>
            <td>
              <i class="less"></i>
            </td>
            <td><el-input class="num" v-model="item.max"></el-input></td>
            <td><el-checkbox v-model="item.twinkle"></el-checkbox></td>
            <td><el-color-picker v-model="item.color1"></el-color-picker></td>
            <td><el-color-picker v-model="item.color2"></el-color-picker></td>
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
import Popup from '../popup/popup'

export default {
  data() {
    return {
      form: {
        name: null,
        radio:'1',
        value:[{
          choose:true,
          min:null,
          max:null,
          twinkle:false,
          color1:'#409EFF',
          color2:'#FF0000'
        }]
      }
    }
  },
  methods:{
   saveValue(){ 
    this.form.value=this.filterForm(this.form.value)
    console.log(this.form.value)
  },
  del(){

  },
  add(){
    this.form.value.push({choose:true,min:null,max:null,twinkle:false,color1:'#409EFF',color2:'#FF0000'})
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
  Popup
}
}
</script>
<style>
@import 'color.css'
</style>