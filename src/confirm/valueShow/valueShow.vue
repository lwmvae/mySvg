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
import { mapGetters,mapMutations } from 'vuex'
// import { saveAttr } from '../../common/a.js'

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
    // saveAttr.add(this.clickId,'valueShow',this.form)
    // saveAttr.ab(this.clickId,'valueShow')
    this.setValueShow(this.form)		
  },
  del(){
    this.form={};
    this.setValueShow(this.form)
  },
  ...mapMutations({setValueShow:'SET_VALUE_SHOW'})
},
computed:{
  ...mapGetters(['clickId','valueShow'])
},
mounted(){
  this.$nextTick(function(){
    this.form=this.valueShow
  })
},
watch:{
  valueShow(newVal){
    this.form=newVal
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