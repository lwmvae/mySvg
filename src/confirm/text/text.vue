<template>
  <popup title="文本动态" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="变量名">
        <el-input v-model="form.name" class="name"></el-input>
      </el-form-item>
      <table class="table" v-show="form.value.length">
        <thead>
          <th>序号</th>
          <th>选中</th>
          <th></th>
          <th>下限</th>
          <th></th>
          <th>上限</th>
          <th>文本</th>
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
            <td><el-input v-model="item.text"></el-input></td>
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
        value:[{choose:true,min:null,max:null,text:null}]
      }
    }
  },
  methods:{
   saveValue(){ 
    // this.filterForm(this.form.value) 
    console.log(this.filterForm(this.form.value))
   },
   del(){

   },
   add(){
    this.form.value.push({choose:true,min:null,max:null,text:null})
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
@import 'text.css'
</style>