function SaveAttr() {
	this.addAttr={};	
}

SaveAttr.prototype.add=function(id,attrName,data){
	let object={};
	object[attrName]=data;
	this.addAttr[id]=object;
}

SaveAttr.prototype.del=function(id,attrName){
	this.addAttr[id][attrName]={}
}

SaveAttr.prototype.obtain=function(id,attrName){
	if(this.addAttr[id]){
	// console.log(this.addAttr[id][attrName])
		return this.addAttr[id][attrName];
	}
	return {};
}


var saveAttr=new SaveAttr();
// saveAttr.add('btn1','valueShow',{
// 	attr:'值显示',
//   name:123,
//   type:1
// })
export {saveAttr};





