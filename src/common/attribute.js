function SaveAttr() {
	this.addAttr={};	
}

SaveAttr.prototype.add=function(id,attrName,data){
	if(this.addAttr[id]){
		this.addAttr[id][attrName]=data;
	}else{
		let obj={};
		obj[attrName]=data;
		this.addAttr[id]=obj;
	}
}

SaveAttr.prototype.del=function(id,attrName){
	this.addAttr[id][attrName]={}
}

SaveAttr.prototype.obtain=function(id,attrName){
	if(this.addAttr[id]){
		if(this.addAttr[id][attrName]==undefined){
			return {};
		}
		return this.addAttr[id][attrName];
	}
	return {};
}


var saveAttr=new SaveAttr();

export {saveAttr};





