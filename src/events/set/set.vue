<template>
  <popup title="事件SET" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <trigger-mode :opitons="opitons"></trigger-mode>
      <el-form-item label="变量名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="值">
        <el-input v-model="form.type"></el-input>
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
        name: '',
        type: ''
      },
      opitons:['页面创建','实时刷新','左键单击','左键双击','右键单击','右键双击']
    }
  },
  methods:{
   saveValue(){  
    // console.log(this.form)
  },
  del(){
  }
},
components: {
  Popup,
  TriggerMode
}
}
</script>
<style scoped>
.type{
  font-size: 15px;
  margin:0 0 10px 0;
}
.el-radio{
  margin: 0 20px 20px 5px;
}
.el-form-item{
  /*margin-top: 20px;*/
}
</style>