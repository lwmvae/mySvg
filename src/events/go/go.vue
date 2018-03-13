<template>
  <popup title="事件SET" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="70px">
      <trigger-mode :options="options" @mode="getType"></trigger-mode>
      <el-form-item label="流程图名">
        <el-input v-model="form.name"></el-input>
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
      },
      options:['左键单击','左键双击','右键单击','右键双击']
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
.el-form-item__label{
  text-align: left;
}
</style>