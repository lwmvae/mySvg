<template>
  <popup title="值显示" @save="saveValue" @del="del">
    <el-form label-width="60px">
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
        attr:'值显示',
        name:null,
        type:null
      }
    }
  },
  methods:{
    saveValue(){
      // console.log(this.form)
      saveAttr.add(this.getId,'valueShow',this.form)
    },
    del(){
      this.form={
        attr:'值显示',
        name:null,
        type:null
      };
      saveAttr.del(this.getId,'valueShow')
    },
  },
  mounted(){
    var object=saveAttr.obtain(this.getId,'valueShow');
    var arr=Object.getOwnPropertyNames(object);
    if(arr.length){
      this.form=saveAttr.obtain(this.getId,'valueShow')
    }
  },
  watch:{
    getId(newVal){
      var object=saveAttr.obtain(newVal,'valueShow');
      var arr=Object.getOwnPropertyNames(object);
      if(arr.length){
        this.form=saveAttr.obtain(newVal,'valueShow')
      }else{
        this.form={
          attr:'值显示',
          name:null,
          type:null
        }
      }
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