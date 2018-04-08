<template>
  <popup title="OPEN" @save="saveValue" @del="del">
    <el-form ref="form" :model="form" >
      <trigger-mode :options="options" @mode="getType"></trigger-mode>
      <div class="winType clearFix">
        <el-form-item label="窗口类型" label-width="70px">
          <el-select v-model="form.wType" placeholder="请选择">
            <el-option v-for="item in winType" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="索引" label-width="40px">
          <el-input v-model="form.name" class="num"></el-input>
        </el-form-item>
        <el-form-item label="参数" label-width="40px">
          <el-input v-model="form.name" class="num"></el-input>
        </el-form-item>
      </div>
      <p>窗口显示属性</p>
      <div class="winType clearFix">
        <el-form-item label="X坐标" label-width="50px">
          <el-input v-model="form.name" class="num"></el-input>
        </el-form-item>
        <el-form-item label="Y坐标" label-width="50px">
          <el-input v-model="form.name" class="num"></el-input>
        </el-form-item>
        <el-select v-model="form.wType" placeholder="请选择">
          <el-option v-for="item in winType" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="win">
        <el-checkbox v-model="checked">单独打开窗口</el-checkbox>
        <el-form-item label="窗口背景色" label-width="85px">
          <el-color-picker v-model="form.color"></el-color-picker>
        </el-form-item>
      </div>
      <el-form-item label="窗口标题">
        <el-input v-model="form.name" class="name"></el-input>
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
        wType:null,
        name: null,
        color: '#20a0ff',
      },
      options:['左键单击','左键双击','右键单击','右键双击'],
      winType:[{
        value: '选项1',
        label: '1'
      },{
        value: '选项2',
        label: '2'
      }]
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
@import 'open.css'
</style>