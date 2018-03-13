<template>
	<div class="trigger-mode">
		<p class="type">触发方式：</p>
		<el-radio-group v-model="radio" @change="choose">
			<el-radio v-for="(option,index) in options" :label="index" :key="index">{{option}}</el-radio>
		</el-radio-group>
	</div>
</template>
<script>
export default {
	data(){
		return{
			radio:-1
		}
	},
	props:{
		options:{
			type:Array,
			default:()=>[]
		}
	},
	methods:{
		choose(){
			this.$emit('mode',this.radio)
		}
	}
}
	
</script>
<style>
.el-radio-group{
  width: 315px;
}
.type{
  font-size: 15px;
  margin:0 0 10px 0;
}
.el-radio{
  margin: 0 20px 20px 5px;
}
.el-radio+.el-radio {
    margin-left: 5px;
}

</style>