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

var obj={
  attr:'值显示',
  name:null,
  type:null
};

export default {
  props:{
    getId:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      form: {}
    }
  },
  methods:{
    saveValue(){
      saveAttr.add(this.getId,'valueShow',this.form)
    },
    del(){
      this.deepCopyObj()
      saveAttr.del(this.getId,'valueShow')
    },
    deepCopyObj(){
      var str=JSON.stringify(obj)
      this.form=JSON.parse(str)
    },
    _getData(id){
      var object=saveAttr.obtain(id,'valueShow');
      var arr=Object.getOwnPropertyNames(object);
      if(arr.length){
        this.form=saveAttr.obtain(id,'valueShow')
      }else{
        this.deepCopyObj()
      }
    }
  },
  mounted(){
    this._getData(this.getId);
  },
  watch:{
    getId(newVal){
      this._getData(newVal);
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