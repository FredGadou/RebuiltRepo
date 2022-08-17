


const rebuiltList = toSetRebuiltList();     //          Create rebuilt list from items.json (RebuiltRepo/data/items.json)   ------    function toSetRebuiltList() located in file dataFetch.js




//--------Compagnies--------//
const aro = new Company('Aro', getCompanyList('Aro'));
const aventics = new Company('Aventics', getCompanyList('Aventics'));
const bosch = new Company('Bosch', getCompanyList('Bosch'));
const browning = new Company('Browning', getCompanyList('Browning'));
const dodge = new Company('Dodge', getCompanyList('Dodge'));
const festo = new Company('Festo', getCompanyList('Festo'));
const numatics = new Company('Numatics', getCompanyList('Numatics'));
const pneumax = new Company('Pneumax', getCompanyList('Pneumax'));
const scorpion = new Company('Scorpion', getCompanyList('Scorpion'));
const sheffer = new Company('Sheffer', getCompanyList('Sheffer'));
const smc = new Company('SMC', getCompanyList('SMC'));
const tidland = new Company('Tidland', getCompanyList('Tidland'));
//--------Types--------//
const aiguisage = new Type('Aiguisage', getTypeList('Aiguisage'));
const assembly = new Type('Assembly', getTypeList('Assembly'));
const atomiseur = new Type('Atomiseur', getTypeList('Atomiseur'));
const cylindre = new Type('Cylindre', getTypeList('Cylindre'));
const gearbox = new Type('Gearbox', getTypeList('Gearbox'));
const plybonder = new Type('Plybonder', getTypeList('Plybonder'));


//------------------------------------------   Function  ---------------------------------------------//

function getAllRebuiltAsArrayRandomize() {
    let rRebuiltArray = [];
    let rebuiltArray = [];
    let rRebArrayLength = 0;
    let index = 0;
    rebuiltList.rList.forEach(rebuilt => {
        rebuiltArray.push(rebuilt);
    });
    rRebArrayLength = rebuiltArray.length;
    for (let i = 0; i < rRebArrayLength; i++) {
        index = getRandomInt(0, rebuiltArray.length - 1);
        rRebuiltArray.push(rebuiltArray[index]);
        //console.log(rebuiltArray[index]);
        rebuiltArray.splice(index, 1);
        //console.log(rebuiltArray[index]);
    }
    return rRebuiltArray;
}

function search(searchValue) {
    return rebuiltList.search(searchValue, 'none');
}

function getCompanyList(company) {
    return rebuiltList.search(company, 'company');
}

function getTypeList(type) {
    return rebuiltList.search(type, 'type');
}

function getCompanies() {
    let companiesMap = new Map();
    companiesMap.set('Aro', aro);
    companiesMap.set('Aventics', aventics);
    companiesMap.set('Bosch', bosch);
    companiesMap.set('Browning', browning);
    companiesMap.set('Dodge', dodge);
    companiesMap.set('Festo', festo);
    companiesMap.set('Numatics', numatics);
    companiesMap.set('Pneumax', pneumax);
    companiesMap.set('Scorpion', scorpion)
    companiesMap.set('Sheffer', sheffer)
    companiesMap.set('SMC', smc);
    companiesMap.set('Tidland', tidland);
    return companiesMap;
}

function getTypes() {
    let typesMap = new Map();
    typesMap.set('Aiguisage', aiguisage);
    typesMap.set('Assembly', assembly);
    typesMap.set('Atomiseur', atomiseur);
    typesMap.set('Cylindre', cylindre);
    typesMap.set('Gearbox', gearbox);
    typesMap.set('Plybonder', plybonder);
    return typesMap;
}

function getRandomInt(min, max) {         //  get a random number between min-max (inclusive)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

