var itemsStocks = new Map();

items.forEach(item => {
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