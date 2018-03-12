<template>
	<div class="trigger-mode">
		<p>触发方式：</p>
		<el-radio-group>
			<el-radio v-for="(option,index) in options" label="index">{{option}}</el-radio>
		</el-radio-group>
	</div>
</template>
<script>
export default {
	props:{
		options:{
			type:Array,
			default:()=>[]
		}
	}
}
	
</script>
<style>

</style>