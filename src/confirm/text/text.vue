<template>
  <popup title="文本动态" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="变量名">
        <el-input v-model="form.name" class="name"></el-input>
      </el-form-item>
      <table class="table">
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
import { saveAttr } from '../../common/attribute.js'

export default {
  props:{
    getId:{
      type:String,
      default:''
    }
  },
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
      this.form.value=this.filterForm(this.form.value) 
      saveAttr.add(this.getId,'textDynamics',this.form)
    },
    del(){
      this.form={
        name: null,
        value:[{choose:true,min:null,max:null,text:null}]
      };
      saveAttr.del(this.getId,'textDynamics')
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
    },
  },
  mounted(){
    var object=saveAttr.obtain(this.getId,'textDynamics')
    var arr = Object.getOwnPropertyNames(object);
    if(arr.length){
      this.form=saveAttr.obtain(this.getId,'textDynamics')
    }
  },
  watch:{
    getId(newVal){
      var object=saveAttr.obtain(newVal,'textDynamics')
      var arr = Object.getOwnPropertyNames(object);
      console.log(arr.length);
      if(arr.length){
        this.form=saveAttr.obtain(newVal,'textDynamics')
      }else{
        this.form={
          name: null,
          value:[{choose:true,min:null,max:null,text:null}]
        }
      }
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