<template>
	<div class="asideAttr">
		<ul>
			<li class="clearFix" v-for="item in attrArr" v-show="item.name">
				<div class="left">
					<p>{{item.attr}}</p>
				</div>
				<div class="right">
					<p>{{item.name}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import { saveAttr } from '../../common/attribute.js'

export default {
	props:{
		getId:{
			type:String,
			default:''
		}
	},
	data(){
		return{
			attrArr:[],
			obj:{}
		}
	},
	methods:{
		_getData(){
			let obj=saveAttr.addAttr[this.getId];
			// obj=saveAttr.addAttr[this.getId];
			let arr=[];
			for(var k in obj){
				let o={};
				o.attr=obj[k].attr;
				o.name=obj[k].name;
				arr.push(o)
			}
			return arr;
			// this.attrArr=arr
		}
	},
	mounted(){
		// this.obj=saveAttr.addAttr[this.getId];
		// this._getData();
		this.attrArr=this._getData();
		
	},
	watch:{
		getId:function(newVal){
			// this._getData();
			this.attrArr=this._getData();
		}
	}
}
</script>

<style scoped>
@import 'asideAttr.css'
</style>
