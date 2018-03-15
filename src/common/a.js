function SaveAttr() {
	this.addAttr={};
}

SaveAttr.prototype.add=function(id,attrName,data){
	let a={};
	a[attrName]=data;
	this.addAttr[id]=a;
	console.log(this.addAttr)
}

SaveAttr.prototype.ab=function(id,attrName){
	if(this.addAttr[id]){
		return this.addAttr[id].attrName;
	}
	return {};
}

var saveAttr=new SaveAttr();

export {saveAttr};





