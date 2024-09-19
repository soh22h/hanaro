function deepCopy(obj) {
	if(obj == null || typeof obj != "object") {
		return obj;
	}

	if(Object.entries(obj).length == 0) return obj;

	const copyObj = Array.isArray(obj) ? [] : Object.assign({}, obj);;

	for(let key in obj){
		copyObj[key] = deepCopy(obj[key]);
	}
	
	return copyObj;
}

module.exports = { deepCopy };
