import { saveAttr } from './attribute.js'

export function getData(id,type){
	var object = saveAttr.obtain(id,type)
	var arr = Object.getOwnPropertyNames(object);
	return arr.length ? object : 0;
}