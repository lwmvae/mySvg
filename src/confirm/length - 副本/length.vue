<template>
  <popup title="值显示" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="变量名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="属性">
        <el-select v-model="form.attr" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="默认值">
        <el-input v-model="form.dfval"></el-input>
      </el-form-item>
      <el-form-item label="下限">
        <el-input v-model="form.upper"></el-input>
      </el-form-item>
      <el-form-item label="上限">
        <el-input v-model="form.lower"></el-input>
      </el-form-item>
    </el-form>
  </popup>
</template>
<script>
import Popup from '../popup/popup'
export default {
  data(){
    return{
      form:{
        name:null,
        attr:null,
        dfval:null,
        upper:null,
        lower:null
      },
      options: [{
        value: 'Width',
        label: 'Width'
      }, {
        value: 'Height',
        label: 'Height'
      }]
    }
  },
  methods:{
    saveValue(){
      console.log(this.form)
    },
    del(){

    }
  },
  components: {
    Popup
  }
}
</script>
<style>
.el-form {
  margin-top: 20px;
}
.el-input__inner {
  height: 30px;
}
</style>