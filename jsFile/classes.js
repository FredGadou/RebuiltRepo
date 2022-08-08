class Company {
    constructor(company, list) {
        this.company = company;
        this.list = list;
        this.img = `image/${company}.jpg`;
    }
}

class Type {
    constructor(type, list) {
        this.type = type;
        this.list = list;
        this.img = `image/${type}.jpg`;
    }
}

class RebuiltClass {
    constructor(name) {
        this.name = name;
        this.rebuiltList = new Map();
    }
}

class RebuiltList {
    constructor() {
        this.rList = new Map();
    }
    createRebuilt(id, name) {
        var rebuilt = new Rebuilt(id, name);
        if (this.rList.has(rebuilt.cascadesId)) {
            console.log(`L'item ${rebuilt.name} existe déjà`);
        } else {
            this.rList.set(rebuilt.cascadesId, rebuilt);
        }
    }
    addRebuilt(rebuilt) {
        if (this.rList.has(rebuilt.cascadesId)) {
            console.log(`L'item ${rebuilt.name} existe déjà`);
        } else {
            this.rList.set(rebuilt.cascadesId, rebuilt);
        }
    }
    deleteRebuilt(rebuilt) {
        this.rList.delete(rebuilt.cascadesId);
    }
    getList() {
        return this.rList;
    }
    search(keyWord, parameter) {
        keyWord = keyWord.toLowerCase();
        let result = [];
        let cp = '';
        let tp = '';

        if(keyWord === '@all') {
            this.rList.forEach(rebuilt => {
                result.push(rebuilt);
            });
            return result;
        } else {
            switch (parameter) {
                case 'none':
                    this.rList.forEach(rebuilt => {
                        if (rebuilt.search(keyWord)) result.push(rebuilt);
                    });
                    return result;
                case 'company':
                    this.rList.forEach(rebuilt => {
                        cp = rebuilt.company;
                        if (cp.toLowerCase() === keyWord) result.push(rebuilt);
                    });
                    return result;
                case 'type':
                    this.rList.forEach(rebuilt => {
                        tp = rebuilt.rebuiltClass;
                        if (tp.toLowerCase() === keyWord) result.push(rebuilt);
                    });
                    return result;
            }
        }
    }
	getFictiveNum(){
		let isNumFound = false;
		let fictiveNum = 100;
		while(!isNumFound){
			if(!this.rList.has(fictiveNum)){
				isNumFound = true;
				return fictiveNum;
			} 
			fictiveNum += 1;
		}
	}
}

class Rebuilt {
    constructor(id, name) {
        this.cascadesId = id;
        this.factoryId = '';
        this.name = name;
        this.sectionMaga = '';
        this.partList = new Map();
        this.rebuiltClass = '';
        this.company = '';
        this.img = ' ';
        this.documentations = [];
    }
    addPart(part) {
        this.partList.set(part.cascadesId, part);
    }
    delPart(part) {
        this.partList.delete(part.cascadesId);
    }
    getPartList() {
        return this.partList;
    }
    search(keyWord) {
        let contain = false;
        keyWord = keyWord.toLowerCase();

        if (this.cascadesId.toString().toLowerCase().includes(keyWord)) contain = true;
        if (this.factoryId.toLowerCase().includes(keyWord)) contain = true;
        if (this.name.toLowerCase().includes(keyWord)) contain = true;
        if (this.sectionMaga.toLowerCase().includes(keyWord)) contain = true;
        if (this.rebuiltClass.toLowerCase().includes(keyWord)) contain = true;
        if (this.company.toLowerCase().includes(keyWord)) contain = true;
        
        this.partList.forEach(part => {
            if (part.search(keyWord)) {
                contain = true;
            }
        });
        return contain;
    }
    getSearchResultPosition(keyWord) {
        keyWord = keyWord.toLowerCase();
        if (this.cascadesId.toString().toLowerCase().includes(keyWord)) return 1;
        if (this.factoryId.toLowerCase().includes(keyWord)) return 2;
        if (this.name.toLowerCase().includes(keyWord)) return 3;
        if (this.description.toLowerCase().includes(keyWord)) return 4;
        if (this.sectionMaga.toLowerCase().includes(keyWord)) return 5;
        if (this.company.toLowerCase().includes(keyWord)) return 6;
        this.machineList.forEach(machine => {
            if (machine.id.toLowerCase().includes(keyWord)) {
                return 6;
            }
        });
        this.partList.forEach(part => {
            if (part.search(keyWord)) {
                return 7;
            }
        });
    }
    getSearchResult(keyWord) {
        keyWord = keyWord.toLowerCase();
        if (this.cascadesId.toString().toLowerCase().includes(keyWord)) return this.cascadesId;
        if (this.factoryId.toLowerCase().includes(keyWord)) return this.factoryId;
        if (this.name.toLowerCase().includes(keyWord)) return this.name;
        if (this.description.toLowerCase().includes(keyWord)) return this.description;
        if (this.sectionMaga.toLowerCase().includes(keyWord)) return this.sectionMaga;
        if (this.rebuiltClass.toLowerCase().includes(keyWord)) return this.rebuiltClass;
        if (this.company.toLowerCase().includes(keyWord)) return this.company;
    }
}


class Part {
    constructor(id, name) {
        this.cascadesId = id;
        this.factoryId = '';
        this.name = name;
        this.description = '';
        this.sectionMaga = '';
    }
    search(keyWord) {
        keyWord = keyWord.toLowerCase();
        let contain = false;
        if (this.cascadesId.toString().toLowerCase().includes(keyWord)) {
            contain = true;
        }
        if (this.factoryId.toLowerCase().includes(keyWord)) {
            contain = true;
        }
        if (this.name.toLowerCase().includes(keyWord)) {
            contain = true;
        }
        if (this.description.toLowerCase().includes(keyWord)) {
            contain = true;
        }
        if (this.sectionMaga.toLowerCase().includes(keyWord)) {
            contain = true;
        }
        return contain;
    }
    getSearchResultPosition(keyWord) {
        keyWord = keyWord.toLowerCase();
        if (this.cascadesId.toString().toLowerCase().includes(keyWord)) return 1;
        if (this.factoryId.toLowerCase().includes(keyWord)) return 2;
        if (this.name.toLowerCase().includes(keyWord)) return 3;
        if (this.description.toLowerCase().includes(keyWord)) return 4;
        if (this.sectionMaga.toLowerCase().includes(keyWord)) return 5;
        if (this.company.toLowerCase().includes(keyWord)) return 6;
    }
    getSearchResult(keyWord) {
        keyWord = keyWord.toLowerCase();
        if (this.cascadesId.toString().toLowerCase().includes(keyWord)) return this.cascadesId;
        if (this.factoryId.toLowerCase().includes(keyWord)) return this.factoryId;
        if (this.name.toLowerCase().includes(keyWord)) return this.name;
        if (this.description.toLowerCase().includes(keyWord)) return this.description;
        if (this.sectionMaga.toLowerCase().includes(keyWord)) return this.sectionMaga;
        if (this.company.toLowerCase().includes(keyWord)) return this.company;
    }
}