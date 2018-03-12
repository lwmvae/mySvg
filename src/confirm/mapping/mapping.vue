<template>
  <popup title="变量映射" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <table class="table" v-show="form.value.length">
        <thead>
          <th>序号</th>
          <th>选中</th>
          <th>增加前缀</th>
          <th>绑定变量</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in form.value">
            <td>{{index+1}}</td>
            <td><el-checkbox v-model="item.choose"></el-checkbox></td>
            <td><el-input v-model="item.min"></el-input></td>
            <td><el-input v-model="item.max"></el-input></td>
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
        value:[{choose:true,min:null,max:null}]
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
    this.form.value.push({choose:true,min:null,max:null})
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
@import 'mapping.css'
</style>