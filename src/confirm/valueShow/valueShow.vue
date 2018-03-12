<template>
  <popup title="值显示" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="变量名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="格式">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
    </el-form>
  </popup>
</template>
<script>
import Popup from '../popup/popup'
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      form: {
        name: '',
        type: ''
      }
    }
  },
  methods:{
   saveValue(){  
    this.setValue(this.form)  		
    console.log(this.form)
  },
  del(){
    this.setValue({name:'',type:''})          
  },
  ...mapMutations({setValue:'SET_VALUE_SHOW'})
},
mounted(){
},
components: {
  Popup
}
}
</script>
<style scoped>
.el-form {
  margin-top: 20px;
}
</style>