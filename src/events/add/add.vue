<template>
  <popup title="事件SET" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <trigger-mode :options="options" @mode="getType"></trigger-mode>
      <el-form-item label="变量名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="幅度">
        <el-input v-model="form.value" class="range"></el-input>
        <el-radio v-model="form.addOrde" label="0" class="add-rde">递增</el-radio>
        <el-radio v-model="form.addOrde" label="1" class="add-rde">递减</el-radio>
      </el-form-item>
      <el-form-item label="上限">
        <el-input v-model="form.name" class="range"></el-input>
      </el-form-item>
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
        value: null,
        addOrde:'0'
      },
      options:['页面创建','实时刷新','左键单击','左键双击','右键单击','右键双击','左键按住','右键按住']
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
  }
},
components: {
  Popup,
  TriggerMode
}
}
</script>
<style>
.trigger-mode .el-radio-group{
  width: 420px;
}
.el-input{
  width: 200px;
}
.el-input__inner{
  height: 30px;
}
.range{
  width: 100px;
}
.el-form-item__content .add-rde{
  margin: 0 20px 0 10px;
}
.el-form-item{
  margin-bottom: 10px;
}
</style>