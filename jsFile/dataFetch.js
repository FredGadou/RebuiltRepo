/*
let itemsStocks = new Map();            // Use to check stock of item.
										// Cannot use atm.. no easy way to update data daily because cascades....
items.forEach(item => {                 // items is the content of rawdata.json 
    let itemID = item.ITVITM;
    let itemStock = item.IITVQMA;
    itemsStocks.set(itemID,{stock:itemStock});
});

function getItemStock(cascadesId) {
    if(cascadesId>=10000 && itemsStocks.has(cascadesId)){
        return itemsStock.get(cascadesId).stock;
    } else {
        return 0;
    }
}
*/
function toSetRebuiltList() {
	let rList = new RebuiltList();
	
	savedItems.forEach( item => {        // savedItems is the content of items.json
		let rebuilt = new Rebuilt(item.cascadesId, item.name);
		rebuilt.factoryId = item.factoryId;
		rebuilt.sectionMaga = item.sectionMaga;
		rebuilt.rebuiltClass = item.rebuiltClass;
		rebuilt.company = item.company;
		rebuilt.img = item.img;
		rebuilt.documentations = item.documentations;
		
		if(item.partList.length > 0) {
			item.partList.forEach(part => {
				let newPart = new Part(part.cascadesId, part.name);
				newPart.factoryId = part.factoryId;
				newPart.sectionMaga = part.sectionMaga;
				newPart.description = part.description;
				rebuilt.addPart(newPart);
			});
		}
		
		
		
		rList.addRebuilt(rebuilt);
	});
	
	return rList;
}