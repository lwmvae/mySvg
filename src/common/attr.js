export default class Attr {
	constructor({id,type}){
		this.id=id;
		this.type=type
	}
}

export function createAttr(attrData){
	return new Attr({
		id:attrData.id,
		type:attrData.type
	})
}