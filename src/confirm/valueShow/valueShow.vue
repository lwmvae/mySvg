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
        name:null,
        type:null
      }
    }
  },
  methods:{
    saveValue(){
      saveAttr.add(this.getId,'valueShow',this.form)
    },
    del(){
      this.form={};
      saveAttr.del(this.getId,'valueShow')
    },
  },
  mounted(){
    this.form=saveAttr.obtain(this.getId,'valueShow')
  },
  watch:{
    getId(newVal){
      this.form=saveAttr.obtain(newVal,'valueShow')
    }
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