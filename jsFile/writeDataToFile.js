async function saveData(data) {
	
	
	const newHandle = await window.showSaveFilePicker();
	const writableStream = await newHandle.createWritable();
	
	await writableStream.write(data);
	
	await writableStream.close();
}

function toStringRebuiltList() {
	
	let listString;
	let rebuiltStringArray = [];
	
	rebuiltList.rList.forEach(rebuilt => {
		
		let rebuiltString;
		let partStringArray = [];
		let partString;
		if(rebuilt.partList.size > 0){
			rebuilt.partList.forEach(part => {
				partString = `{"cascadesId":${part.cascadesId},"factoryId":"${part.factoryId}","name":"${part.name}","sectionMaga":"${part.sectionMaga}","description":"${part.description}"}`;
				partStringArray.push(partString);
			});
			partStringArray = toStringArray(partStringArray);
		} else {
			partStringArray = `""`;
		}
		
		
		rebuiltString = `{
			"cascadesId":${rebuilt.cascadesId},
			"factoryId":"${rebuilt.factoryId}",
			"name":"${rebuilt.name}",
			"description":"${rebuilt.description}",
			"sectionMaga":"${rebuilt.sectionMaga}",
			"partList":${partStringArray},
			"rebuiltClass":"${rebuilt.rebuiltClass}",
			"company":"${rebuilt.company}",
			"img":"${rebuilt.img}",
			"documentations":[${toJSONiseDocArray(rebuilt.documentations)}]
			}`;
		
		
		rebuiltStringArray.push(rebuiltString);
	});
	return `let savedItems = ${toStringArray(rebuiltStringArray)}`;
}

function toStringArray(array) {
	let string = '[';
	
	for(let i = 0; i < array.length; i++) {
		if(i < array.length - 1) {
			string += `${array[i]},`
		} else {
		string += `${array[i]}]`;
		}
	}
	return string;
}

function toJSONiseDocArray(array) {
	let newArray = [];
	array.forEach(element => {
		newArray.push(`["${element[0]}","${element[1]}"]`);
	});
	return newArray;
}