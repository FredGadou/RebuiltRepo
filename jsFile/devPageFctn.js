let commandInput = document.getElementById('commandInput');
let devPageContentDiv = document.getElementById('devPageContentDiv');
let createNewRebBtn = document.getElementById('createNewRebBtn');
let saveDataBtn = document.getElementById('saveDataBtn');
let modifyRebuiltBtn = document.getElementById('modifyRebuiltBtn');
let isCreateRebWinOpen = false;

commandInput.addEventListener('keydown', e => {
    if (e.keyCode != 13) return;
    let inputValue = commandInput.value;
    switch (inputValue) {
        case 'savedata':
            commandInput.value = '';
            saveData(toStringRebuiltList()); // saveData() is located in file writeDataToFile.js
            break;
        case 'newrebuilt':
            commandInput.value = '';
            openCreateRebuilt();
            break;
        default:
            alert('Commande non-existante');
            break;
    }
});

createNewRebBtn.addEventListener('click', () => {
	openCreateRebuilt();
});

modifyRebuiltBtn.addEventListener('click', () => {
	alert('Fonction pas disponiple');
});

saveDataBtn.addEventListener('click',() => {
	let messageWinDiv = document.createElement('div');
	let messageP = document.createElement('p');
	let okMessBtn = document.createElement('button');
	let cancelMessBtn = document.createElement('button');
	
	messageWinDiv.style.fontSize = '15px';
	
	messageP.innerHTML = `Vous devez sauvegarder sur ce chemin ci (<strong>copier le maintenant</strong>): <b style="color:blue">P:&#92CTG-375 Granby&#92Maintenance Mecanique&#92root&#92RebuiltRepo&#92Data</b> <br> Puis sauvegardez sur le fichier <b style="color:blue">'items.json'</b><br>`;
	okMessBtn.innerHTML = 'Sauvegarder';
	cancelMessBtn.innerHTML = 'Annuler';
	okMessBtn.onclick = () => {
		saveData(toStringRebuiltList());
		messageWinDiv.remove();
	}
	cancelMessBtn.onclick = () => {messageWinDiv.remove();}
	messageWinDiv.appendChild(messageP);
	messageWinDiv.appendChild(okMessBtn);
	messageWinDiv.appendChild(cancelMessBtn);
	devPageContentDiv.appendChild(messageWinDiv);
});

function openDevPageAccess() {
    let nbTry = 0;
    let passwordWin = document.createElement('div');
    passwordWin.className = 'passwordWinDiv';
    let XiconDiv = document.createElement('div');
    XiconDiv.className = 'XiconDiv';
    let Xicon = document.createElement('span');
    Xicon.className = 'material-icons';
    Xicon.id = 'Xicon';
    Xicon.innerHTML = 'close';
    Xicon.addEventListener('mousedown', () => {
        passwordWin.remove();
    });
    let passDiv = document.createElement('div');
    passDiv.className = 'passDiv';
    let passLabel = document.createElement('label');
    passLabel.className = 'labelInPresentationBox';
    passLabel.innerHTML = 'Password: ';
    let passInput = document.createElement('input');
    passInput.className = 'passInput';
    passInput.type = 'text';
    passInput.addEventListener('keydown', e => {
        if (e.keyCode != 13) return;
        if (passInput.value === pw) {
            passwordWin.remove();
            openDevPage();
        } else {
            nbTry += 1;
        }
        switch (nbTry) {
            case 1:
                alert('Oupsss');
                break;
            case 2:
                alert("Pas d'affaire ici toé je pense...");
                break;
            case 3:
                alert('Attention mon ami...');
                break;
            case 4:
                alert('tu me cherches?!');
                break;
            case 5:
                alert("Ok tu l'auras voulu");
                while (nbTry === 5) {
                    window.open("https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F01%2F65%2F78%2F63%2F1000_F_165786348_xnHP3ENAqjkxfHkjmv5TBVCmsrDtpeRd.jpg&amp;data=05%7C01%7C%7Cf5cc737f65f34d831ec008da77deefc1%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637954096639837084%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&amp;sdata=qi2SJQW9V3heAAyY4l4%2B1l%2BAhgNISaajlKQWew%2F5KNk%3D&amp;reserved=0");
                }
                break;
        }
    });
    let okButton = document.createElement('button');
    okButton.className = 'passOkButton';
    okButton.innerHTML = 'OK';
    okButton.onclick = () => {
        if (passInput.value === pw) {
            passwordWin.remove();
            openDevPage();
        } else {
            nbTry += 1;
        }
        switch (nbTry) {
            case 1:
                alert('Oupsss');
                break;
            case 2:
                alert("Pas d'affaire ici toé je pense...");
                break;
            case 3:
                alert('Attention mon ami...');
                break;
            case 4:
                alert('tu me cherches?!');
                break;
            case 5:
                alert("Ok tu l'auras voulu");
                while (nbTry === 5) {
                    window.open("https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fas2.ftcdn.net%2Fv2%2Fjpg%2F01%2F65%2F78%2F63%2F1000_F_165786348_xnHP3ENAqjkxfHkjmv5TBVCmsrDtpeRd.jpg&amp;data=05%7C01%7C%7Cf5cc737f65f34d831ec008da77deefc1%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C637954096639837084%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000%7C%7C%7C&amp;sdata=qi2SJQW9V3heAAyY4l4%2B1l%2BAhgNISaajlKQWew%2F5KNk%3D&amp;reserved=0");
                }
                break;
        }
    };
    XiconDiv.appendChild(Xicon);
    passDiv.appendChild(passLabel);
    passDiv.appendChild(passInput);
    passwordWin.appendChild(XiconDiv);
    passwordWin.appendChild(passDiv);
    passwordWin.appendChild(okButton);
    document.querySelector('body').appendChild(passwordWin);
}

function openCreateRebuilt() {
	if(isCreateRebWinOpen) return;
	isCreateRebWinOpen = true;
    let creationPageDiv = document.createElement('div');
    let creationTopDiv = document.createElement('div');
    let creationTitleDiv = document.createElement('div');
    let creationTitle = document.createElement('label');
    let creationPageCenterDiv = document.createElement('div');
	
    let XiconDiv = document.createElement('div');
    let Xicon = document.createElement('span');
	
    let csLineDiv = document.createElement('div');
    let csFirstHalfLineDiv = document.createElement('div');
    let csOtherHalfLineDiv = document.createElement('div');
    let csIdLabel = document.createElement('label');
    let csIdInput = document.createElement('input');
	
    let fctryIdLineDiv = document.createElement('div');
    let fctryIdFirstHalfLineDiv = document.createElement('div');
    let fctryIdOtherHalfLineDiv = document.createElement('div');
    let fctryIdLabel = document.createElement('label');
    let fctryIdInput = document.createElement('input');
	
    let nameLineDiv = document.createElement('div');
    let nameFirstHalfLineDiv = document.createElement('div');
    let nameOtherHalfLineDiv = document.createElement('div');
    let nameLabel = document.createElement('label');
    let nameInput = document.createElement('input');
	
    let secMagLineDiv = document.createElement('div');
    let secMagFirstHalfLineDiv = document.createElement('div');
    let secMagOtherHalfLineDiv = document.createElement('div');
    let secMagLabel = document.createElement('label');
    let secMagInput = document.createElement('input');
	
    let rClassLineDiv = document.createElement('div');
    let rClassFirstHalfLineDiv = document.createElement('div');
    let rClassOtherHalfLineDiv = document.createElement('div');
    let rClassLabel = document.createElement('label');
    let rClassSelec = document.createElement('select');
    let rClassOpt1 = document.createElement('option');
    let rClassOpt2 = document.createElement('option');
    let rClassOpt3 = document.createElement('option');
    let rClassOpt4 = document.createElement('option');
    let rClassOpt5 = document.createElement('option');
    let rClassOpt6 = document.createElement('option');
    let rClassOpt7 = document.createElement('option');
	
    let cmpgnyLineDiv = document.createElement('div');
    let cmpgnyFirstHalfLineDiv = document.createElement('div');
    let cmpgnyOtherHalfLineDiv = document.createElement('div');
    let cmpgnyLabel = document.createElement('label');
    let cmpgnyInput = document.createElement('input');
	
	let partListToAdd = new Map();
	
	let addPartLineDiv = document.createElement('div');
	let addPartFirstLineDiv = document.createElement('div');
	let addPartOtherHalfLineDiv = document.createElement('div');
	let addPartLabel = document.createElement('label');
	let addPartButton = document.createElement('button');
	
	let addPartCSIDLabel = document.createElement('label');
	let addPartCSIDInput = document.createElement('input');
	let addPartFctyIDLabel = document.createElement('label');
	let addPartFctyIDInput = document.createElement('input');
	let addPartNameLabel = document.createElement('label');
	let addPartNameInput = document.createElement('input');
	let addPartSectMagaLabel = document.createElement('label');
	let addPartSectMagaInput = document.createElement('input');
	let addPartBtnDiv = document.createElement('div');
	let addPartOKBtn = document.createElement('button');
	let addPartCancelBtn = document.createElement('button');
		
	let docList = [];
	
	let addDocLineDiv = document.createElement('div');
	let addDocFirstLineDiv = document.createElement('div');
	let addDocOtherHalfLineDiv = document.createElement('div');
	let addDocLabel = document.createElement('label');
	let addDocButton = document.createElement('button');
	
	let addDocNameLabel = document.createElement('label');
	let addDocNameInput = document.createElement('input');
	let addDocDescrLabel = document.createElement('label');
	let addDocDescrInput = document.createElement('input');
	let addDocBtnDiv = document.createElement('div');
	let addDocOKbtn = document.createElement('button');
	let addDocCancelBtn = document.createElement('button');
	
    let downBtnDiv = document.createElement('div');
    let cancelBtn = document.createElement('button');
    let acceptBtn = document.createElement('button');
	
	let tipWinDiv = document.createElement('div');
	let tipWinTitleDiv = document.createElement('div');
	let tipWinTitle = document.createElement('label');
	let tipDocDiv = document.createElement('div');
	let tipImgDiv = document.createElement('div');
	let tipDocP = document.createElement('p');
	let tipImgP = document.createElement('p');
	
	tipWinDiv.appendChild(tipWinTitleDiv);
	tipWinDiv.appendChild(tipImgDiv);
	tipWinDiv.appendChild(tipDocDiv);
	tipWinTitleDiv.appendChild(tipWinTitle);
	tipImgDiv.appendChild(tipImgP);
	tipDocDiv.appendChild(tipDocP);
	
	tipImgP.innerHTML = `<b><u>Pour Ajouter Une Image:</u></b><br>Vous devez placer l'image au chemin suivant: <p style="color:blue">P:&#92CTG-375 Granby&#92Maintenance Mecanique&#92root&#92RebuiltRepo&#92image</p>L'image doit se nommer par son #cascades et contenir l'extention '.jpg'. Si la pièce ne possède pas de #cascades, le programme vas lui donner un numéro fictif, Vous utiliserez celui-ci pour identifier l'image.`;
	tipWinTitle.innerHTML = 'How To';
	tipDocP.innerHTML = `<b><u>Pour Ajouter Un Document:</u></b><br>Vous devez placer le document au chemin suivant: <p style="color:blue">P:&#92CTG-375 Granby&#92Maintenance Mecanique&#92root&#92RebuiltRepo&#92rebuiltDoc</p>`;
	
	tipWinDiv.className = 'tipWinDiv';
	tipWinTitleDiv.className = 'tipWinTitleDiv';
	
    csLineDiv.className = 'lineInWinCreatReb';
    csFirstHalfLineDiv.className = 'fhLineInWinCreatReb';
    csOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
    csIdLabel.className = 'creatRebLabel';
    csIdInput.className = 'creatRebInput';
    csFirstHalfLineDiv.appendChild(csIdLabel);
    csOtherHalfLineDiv.appendChild(csIdInput);
    csLineDiv.appendChild(csFirstHalfLineDiv);
    csLineDiv.appendChild(csOtherHalfLineDiv);

    fctryIdLineDiv.className = 'lineInWinCreatReb';
    fctryIdFirstHalfLineDiv.className = 'fhLineInWinCreatReb';
    fctryIdOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
    fctryIdLabel.className = 'creatRebLabel';
    fctryIdInput.className = 'creatRebInput';
    fctryIdFirstHalfLineDiv.appendChild(fctryIdLabel);
    fctryIdOtherHalfLineDiv.appendChild(fctryIdInput);
    fctryIdLineDiv.appendChild(fctryIdFirstHalfLineDiv);
    fctryIdLineDiv.appendChild(fctryIdOtherHalfLineDiv);

    nameLineDiv.className = 'lineInWinCreatReb';
    nameFirstHalfLineDiv.className = 'fhLineInWinCreatReb';
    nameOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
    nameLabel.className = 'creatRebLabel';
    nameInput.className = 'creatRebInput';
    nameFirstHalfLineDiv.appendChild(nameLabel);
    nameOtherHalfLineDiv.appendChild(nameInput);
    nameLineDiv.appendChild(nameFirstHalfLineDiv);
    nameLineDiv.appendChild(nameOtherHalfLineDiv);

    secMagLineDiv.className = 'lineInWinCreatReb';
    secMagFirstHalfLineDiv.className = 'fhLineInWinCreatReb';
    secMagOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
    secMagLabel.className = 'creatRebLabel';
    secMagInput.className = 'creatRebInput';
    secMagFirstHalfLineDiv.appendChild(secMagLabel);
    secMagOtherHalfLineDiv.appendChild(secMagInput);
    secMagLineDiv.appendChild(secMagFirstHalfLineDiv);
    secMagLineDiv.appendChild(secMagOtherHalfLineDiv);
	
    rClassLineDiv.className = 'lineInWinCreatReb';
    rClassFirstHalfLineDiv.className = 'fhLineInWinCreatReb';
    rClassOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
    rClassLabel.className = 'creatRebLabel';
    rClassSelec.className = 'creatRebInput';
    rClassFirstHalfLineDiv.appendChild(rClassLabel);
    rClassOtherHalfLineDiv.appendChild(rClassSelec);
    rClassLineDiv.appendChild(rClassFirstHalfLineDiv);
    rClassLineDiv.appendChild(rClassOtherHalfLineDiv);
	
    cmpgnyLineDiv.className = 'lineInWinCreatReb';
    cmpgnyFirstHalfLineDiv.className = 'fhLineInWinCreatReb';
    cmpgnyOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
    cmpgnyLabel.className = 'creatRebLabel';
    cmpgnyInput.className = 'creatRebInput';
    cmpgnyFirstHalfLineDiv.appendChild(cmpgnyLabel);
    cmpgnyOtherHalfLineDiv.appendChild(cmpgnyInput);
    cmpgnyLineDiv.appendChild(cmpgnyFirstHalfLineDiv);
    cmpgnyLineDiv.appendChild(cmpgnyOtherHalfLineDiv);
	
	addPartLineDiv.className = 'lineInWinCreatReb';
	addPartFirstLineDiv.className = 'fhLineInWinCreatReb';
	addPartOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
	addPartLabel.className = 'creatRebLabel';
	addPartButton.className = 'creatRebButton';
    addPartFirstLineDiv.appendChild(addPartLabel);
    addPartOtherHalfLineDiv.appendChild(addPartButton);
    addPartLineDiv.appendChild(addPartFirstLineDiv);
    addPartLineDiv.appendChild(addPartOtherHalfLineDiv);
	
	addPartCSIDLabel.className = 'creatRepPartLabel';
	addPartFctyIDLabel.className = 'creatRepPartLabel';
	addPartNameLabel.className = 'creatRepPartLabel';
	addPartSectMagaLabel.className = 'creatRepPartLabel';
	addPartCSIDInput.className = 'creatRepPartInput';
	addPartFctyIDInput.className = 'creatRepPartInput';
	addPartNameInput.className = 'creatRepPartInput';
	addPartSectMagaInput.className = 'creatRepPartInput';
	addPartBtnDiv.className = 'addPartBtnDiv';
	
	addPartCSIDLabel.innerHTML = '<b>#Cascades :</b>';
	addPartFctyIDLabel.innerHTML = '<br><br><b>#Compagnie :</b>';
	addPartNameLabel.innerHTML = '<br><br><b>Nom :</b>';
	addPartSectMagaLabel.innerHTML = '<br><br><b>Section Magasin :</b>';
	
	addPartOKBtn.innerHTML = 'OK';
	addPartCancelBtn.innerHTML = 'Annuler';
	
	addPartOKBtn.onclick = () => {
		let newPart = new Part(addPartCSIDInput.value, addPartNameInput.value);
		newPart.factoryId = addPartFctyIDInput.value;
		newPart.sectionMaga = addPartSectMagaInput.value;
		if(addPartSectMagaInput.value === '' || addPartSectMagaInput.value === ' '){
			newPart.description = 'Sur Réquisition';
		}
		
		partListToAdd.set(addPartCSIDInput.value,newPart);
		
		let newAddedPartDiv = document.createElement('div');
		let newAddedPartInfo = document.createElement('p');
		newAddedPartInfo.innerHTML = newPart.name;
		newAddedPartDiv.appendChild(newAddedPartInfo);
		addPartOtherHalfLineDiv.appendChild(newAddedPartDiv);
		
		addPartCSIDInput.value = '';
		addPartFctyIDInput.value = '';
		addPartNameInput.value = '';
		addPartSectMagaInput.value = '';
		
		addPartCSIDLabel.remove();
		addPartCSIDInput.remove();
		addPartFctyIDLabel.remove();
		addPartFctyIDInput.remove();
		addPartNameLabel.remove();
		addPartNameInput.remove();
		addPartSectMagaLabel.remove();
		addPartSectMagaInput.remove();
		addPartBtnDiv.remove();
        addPartOtherHalfLineDiv.appendChild(addPartButton);
	}
	
	addPartCancelBtn.onclick = () => {
		
		addPartCSIDInput.value = '';
		addPartFctyIDInput.value = '';
		addPartNameInput.value = '';
		addPartSectMagaInput.value = '';
		
		addPartCSIDLabel.remove();
		addPartCSIDInput.remove();
		addPartFctyIDLabel.remove();
		addPartFctyIDInput.remove();
		addPartNameLabel.remove();
		addPartNameInput.remove();
		addPartSectMagaLabel.remove();
		addPartSectMagaInput.remove();
		addPartBtnDiv.remove();
        addPartOtherHalfLineDiv.appendChild(addPartButton);
	}
	
	addPartButton.onclick = () => {
		addPartButton.remove();
		addPartOtherHalfLineDiv.appendChild(addPartCSIDLabel);
		addPartOtherHalfLineDiv.appendChild(addPartCSIDInput);
		addPartOtherHalfLineDiv.appendChild(addPartFctyIDLabel);
		addPartOtherHalfLineDiv.appendChild(addPartFctyIDInput);
		addPartOtherHalfLineDiv.appendChild(addPartNameLabel);
		addPartOtherHalfLineDiv.appendChild(addPartNameInput);
		addPartOtherHalfLineDiv.appendChild(addPartSectMagaLabel);
		addPartOtherHalfLineDiv.appendChild(addPartSectMagaInput);
		addPartBtnDiv.appendChild(addPartOKBtn)
		addPartBtnDiv.appendChild(addPartCancelBtn)
		addPartOtherHalfLineDiv.appendChild(addPartBtnDiv);
	}
	
	
	addDocLineDiv.className = 'lineInWinCreatReb';
	addDocFirstLineDiv.className = 'fhLineInWinCreatReb';
	addDocOtherHalfLineDiv.className = 'ohLineInWinCreatReb';
	addDocLabel.className = 'creatRebLabel';
	addDocButton.className = 'creatRebButton';
    addDocFirstLineDiv.appendChild(addDocLabel);
    addDocOtherHalfLineDiv.appendChild(addDocButton);
    addDocLineDiv.appendChild(addDocFirstLineDiv);
    addDocLineDiv.appendChild(addDocOtherHalfLineDiv);
	
	addDocNameLabel.className = 'creatRepPartLabel';
	addDocNameInput.className = 'creatRepPartInput';
	addDocDescrLabel.className = 'creatRepPartLabel';
	addDocDescrInput.className = 'creatRepPartInput';
	addDocBtnDiv.className  = 'addPartBtnDiv';
	
	addDocNameLabel.innerHTML = "**Inclure l'extention (ex: partlist.pdf)**<br>Nom du fichier :";
	addDocDescrLabel.innerHTML = '<br><br>Titre descriptif du document :';
	
	addDocOKbtn.innerHTML = 'OK'; 
	addDocCancelBtn.innerHTML = 'Annuler';
	
	addDocOKbtn.onclick = () => {
		
		docList.push([addDocDescrInput.value, `rebuiltDoc/${addDocNameInput.value}`]);
		
		let newAddedDocDiv = document.createElement('div');
		let newAddedDocInfo = document.createElement('p');
		newAddedDocInfo.innerHTML = addDocDescrInput.value;
		newAddedDocDiv.appendChild(newAddedDocInfo);
		addDocOtherHalfLineDiv.appendChild(newAddedDocDiv);
		
		addDocNameInput.value = '';
		addDocDescrInput.value = '';
		addDocNameLabel.remove();
		addDocNameInput.remove();
		addDocDescrLabel.remove();
		addDocDescrInput.remove();
		addDocBtnDiv.remove();
		
		addDocOtherHalfLineDiv.appendChild(addDocButton);
	}
	
	addDocCancelBtn.onclick = () => {
		addDocNameInput.value = '';
		addDocDescrInput.value = '';
		addDocNameLabel.remove();
		addDocNameInput.remove();
		addDocDescrLabel.remove();
		addDocDescrInput.remove();
		addDocBtnDiv.remove();
		
		addDocOtherHalfLineDiv.appendChild(addDocButton);
	}
	
	addDocButton.onclick = () => {
		addDocButton.remove();
		addDocOtherHalfLineDiv.appendChild(addDocNameLabel);
		addDocOtherHalfLineDiv.appendChild(addDocNameInput);
		addDocOtherHalfLineDiv.appendChild(addDocDescrLabel);
		addDocOtherHalfLineDiv.appendChild(addDocDescrInput);
		addDocOtherHalfLineDiv.appendChild(addDocBtnDiv);
		addDocBtnDiv.appendChild(addDocOKbtn);
		addDocBtnDiv.appendChild(addDocCancelBtn);
	}
	

    cancelBtn.innerHTML = 'Annuler';
    cancelBtn.style.marginInline = '20px';
	cancelBtn.style.fontSize = 'x-large';
    cancelBtn.onclick = () => {
		creationPageDiv.remove();
		isCreateRebWinOpen = false;
}
	
    acceptBtn.innerHTML = 'OK';
    acceptBtn.style.marginInline = '20px';
	acceptBtn.style.fontSize = 'x-large';
    acceptBtn.onclick = () => {
		let newRebID;
		if(csIdInput.value === '' || csIdInput.value === ' '){
			newRebID = rebuiltList.getFictiveNum();
		} else {
			newRebID = csIdInput.value;
		}
        let newRebuilt = new Rebuilt(newRebID, nameInput.value);
        newRebuilt.factoryId = fctryIdInput.value;
        newRebuilt.sectionMaga = secMagInput.value;
        newRebuilt.rebuiltClass = rClassSelec.value;
		newRebuilt.img = `image/${newRebID}.jpg`
		partListToAdd.forEach(part => {
			if(part.cascadesId === '' || part.cascadesId === ' ') {
				part.cascadesId = rebuiltList.getFictiveNum();
			}
			newRebuilt.addPart(part);
		});
		newRebuilt.documentations = docList;
        rebuiltList.addRebuilt(newRebuilt);
		alert(`Nouveau Rebuilt créé: #cascades: ${newRebuilt.cascadesId}, Nom: ${newRebuilt.name}.\nVous devez sauvegarder pour que les changements prennent effet`)
        creationPageDiv.remove();
		isCreateRebWinOpen = false;
    };
	
    downBtnDiv.className = 'downBtnDiv';
    downBtnDiv.appendChild(cancelBtn);
    downBtnDiv.appendChild(acceptBtn);
	
    csIdLabel.innerHTML = '<b>Numéro Cascades :</b>';
    fctryIdLabel.innerHTML = '<b>Numéro de compagnie :</b>';
    nameLabel.innerHTML = '<b>Nom de la pièce :</b>';
    secMagLabel.innerHTML = '<b>Section magasin :</b>';
    rClassLabel.innerHTML = '<b>Classification :</b>';
    cmpgnyLabel.innerHTML = '<b>Compagnie :</b>';
	addPartLabel.innerHTML = '<b>Part list :</b>';
	addPartButton.innerHTML = 'Ajouter';
	addDocLabel.innerHTML = '<b>Document :</b>';
	addDocButton.innerHTML = 'Ajouter';
    rClassOpt1.innerHTML = 'Auncun';
    rClassOpt2.innerHTML = 'Aiguisage';
    rClassOpt3.innerHTML = 'Assembly';
    rClassOpt4.innerHTML = 'Atomiseur';
    rClassOpt5.innerHTML = 'Cylindre';
    rClassOpt6.innerHTML = 'Gearbox';
    rClassOpt7.innerHTML = 'Plybonder';
	
    rClassSelec.appendChild(rClassOpt1);
    rClassSelec.appendChild(rClassOpt2);
    rClassSelec.appendChild(rClassOpt3);
    rClassSelec.appendChild(rClassOpt4);
    rClassSelec.appendChild(rClassOpt5);
    rClassSelec.appendChild(rClassOpt6);
    rClassSelec.appendChild(rClassOpt7);
	
    creationPageDiv.className = 'winInDevPage';
    creationTopDiv.className = 'topWinInDevPage';
    creationTitleDiv.className = 'titleInTopDevPage';
    creationTitle.innerHTML = "Création d'un Rebuilt"
    creationPageCenterDiv.className = 'centerWinInDevPage';
    XiconDiv.className = 'XiconDiv';
	
    Xicon.className = 'material-icons';
    Xicon.id = 'Xicon';
    Xicon.innerHTML = 'close';
    Xicon.addEventListener('mousedown', () => {
        creationPageDiv.remove();
		isCreateRebWinOpen = false;
    });
	
    creationTitleDiv.appendChild(creationTitle);
    XiconDiv.appendChild(Xicon);
    creationTopDiv.appendChild(creationTitleDiv);
    creationTopDiv.appendChild(XiconDiv);

    creationPageCenterDiv.appendChild(csLineDiv);
    creationPageCenterDiv.appendChild(fctryIdLineDiv);
    creationPageCenterDiv.appendChild(nameLineDiv);
    creationPageCenterDiv.appendChild(secMagLineDiv);
    creationPageCenterDiv.appendChild(rClassLineDiv);
    creationPageCenterDiv.appendChild(cmpgnyLineDiv);
    creationPageCenterDiv.appendChild(addPartLineDiv); 
    creationPageCenterDiv.appendChild(addDocLineDiv); 
    creationPageCenterDiv.appendChild(downBtnDiv);
    creationPageCenterDiv.appendChild(tipWinDiv);
    creationPageDiv.appendChild(creationTopDiv);
    creationPageDiv.appendChild(creationPageCenterDiv);
    devPageContentDiv.appendChild(creationPageDiv);
}