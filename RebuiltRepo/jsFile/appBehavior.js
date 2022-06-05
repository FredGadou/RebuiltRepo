//---------------------------Variables---------------------------//

let incompatibilite = document.getElementById('incompatibilite');

let actionRegister = ['main'];
let isToRegister = true;

let bodyDivs = document.body.children;
let mainDiv = document.getElementById('mainDiv');
let topDiv = document.getElementById('topDiv');
let fixedTop = document.getElementById('fixedTop');
let fixedTopHidden = document.getElementById('fixedTopHidden');
let pageCommandDiv = document.getElementById('pageCommandDiv');
let backPageCommand = document.getElementById('backPageCommand');
let mainPageTitleDiv = document.getElementById('mainPageTitleDiv');
let mainPageText = document.getElementById('mainPageText');
let menuIconDiv = document.getElementById('menuIconDiv');
let menuDropDownDiv = document.getElementById('menuDropDownDiv');
let companiesLinkDiv = document.getElementById('companiesLinkDiv');
let typeLinkDiv = document.getElementById('typeLinkDiv');
let usefullLinksDiv = document.getElementById('usefullLinksDiv');
let searchDiv = document.getElementById('searchDiv');
let searchIcon = document.getElementById('searchIcon');
let searchInput = document.getElementById('searchInput');
let searchResultDiv = document.getElementById('searchResultDiv');
let showResultDiv = document.getElementById('showResultDiv');
let rebuiltPresentationBox = document.getElementById('rebuiltPresentationBox');
let rebuiltImg = document.getElementById('rebuiltImg');
let zoomLense = document.getElementById('zoomLense');
let rebuiltImgZoomed = document.getElementById('rebuiltImgZoomed');
let printPresBoxButton = document.getElementById('printPresBoxButton');
let rebuiltNameInPresentationBox = document.getElementById('rebuiltNameInPresentationBox');
let cascadesIdInPresentationBox = document.getElementById('cascadesIdInPresentationBox');
let factoryIdInPresentationBox = document.getElementById('factoryIdInPresentationBox');
let rebuiltCompanyInPresentationBox = document.getElementById('rebuiltCompanyInPresentationBox');
let sectionMagaInPresentationBox = document.getElementById('sectionMagaInPresentationBox');
let partList = document.getElementById('partList');
let reletedDocLinkDiv = document.getElementById('reletedDocLinkDiv');
let categoriesDiv = document.getElementById('categoriesDiv');
let usefullLinkDiv = document.getElementById('usefullLinkDiv');
let randomRebuiltDownDiv = document.getElementById('randomRebuiltDownDiv');
let rightArrow = document.getElementById('rightArrowDiv');
let leftArrow = document.getElementById('leftArrowDiv');
let rdImgDiv1 = document.getElementById('rdImgDiv1');
let rdImgDiv2 = document.getElementById('rdImgDiv2');
let rdImgDiv3 = document.getElementById('rdImgDiv3');
let rdImgDiv4 = document.getElementById('rdImgDiv4');
let rdImgDiv5 = document.getElementById('rdImgDiv5');
let rdImgDiv6 = document.getElementById('rdImgDiv6');
let rdImgDiv7 = document.getElementById('rdImgDiv7');
let rdImg1 = document.getElementById('rdImg1');
let rdImg2 = document.getElementById('rdImg2');
let rdImg3 = document.getElementById('rdImg3');
let rdImg4 = document.getElementById('rdImg4');
let rdImg5 = document.getElementById('rdImg5');
let rdImg6 = document.getElementById('rdImg6');
let rdImg7 = document.getElementById('rdImg7');
let tooltipDiv1 = document.getElementById('tooltipDiv1');
let tooltipDiv2 = document.getElementById('tooltipDiv2');
let tooltipDiv3 = document.getElementById('tooltipDiv3');
let tooltipDiv4 = document.getElementById('tooltipDiv4');
let tooltipDiv5 = document.getElementById('tooltipDiv5');
let tooltipDiv6 = document.getElementById('tooltipDiv6');
let tooltipDiv7 = document.getElementById('tooltipDiv7');
let nameInBubble1 = document.getElementById('nameInBubble1');
let nameInBubble2 = document.getElementById('nameInBubble2');
let nameInBubble3 = document.getElementById('nameInBubble3');
let nameInBubble4 = document.getElementById('nameInBubble4');
let nameInBubble5 = document.getElementById('nameInBubble5');
let nameInBubble6 = document.getElementById('nameInBubble6');
let nameInBubble7 = document.getElementById('nameInBubble7');



//---Print Window Variables---//
let rebuiltImgPrint = document.getElementById('rebuiltImgPrint');
let cascadesIdInPresentationBoxPrint = document.getElementById('cascadesIdInPresentationBoxPrint');
let factoryIdInPresentationBoxPrint = document.getElementById('factoryIdInPresentationBoxPrint');
let rebuiltCompanyInPresentationBoxPrint = document.getElementById('rebuiltCompanyInPresentationBoxPrint');
let sectionMagaInPresentationBoxPrint = document.getElementById('sectionMagaInPresentationBoxPrint');
let partListPrint = document.getElementById('partListPrint');
let rebuiltToPrint;
//---Print Window Variables---// End

const types = getTypes();
const companies = getCompanies();

let searchResult = [];
let searchResultReg;

let rdImgIndex = 6;
let randRebuiltArray = getAllRebuiltAsArrayRandomize();
let randRebuiltOnScreen = [randRebuiltArray[0], randRebuiltArray[1], randRebuiltArray[2], randRebuiltArray[3], randRebuiltArray[4], randRebuiltArray[5], randRebuiltArray[6]];

rdImg1.src = randRebuiltArray[0].img;
rdImg2.src = randRebuiltArray[1].img;
rdImg3.src = randRebuiltArray[2].img;
rdImg4.src = randRebuiltArray[3].img;
rdImg5.src = randRebuiltArray[4].img;
rdImg6.src = randRebuiltArray[5].img;
rdImg7.src = randRebuiltArray[6].img;

nameInBubble1.innerHTML = randRebuiltArray[0].name;
nameInBubble2.innerHTML = randRebuiltArray[1].name;
nameInBubble3.innerHTML = randRebuiltArray[2].name;
nameInBubble4.innerHTML = randRebuiltArray[3].name;
nameInBubble5.innerHTML = randRebuiltArray[4].name;
nameInBubble6.innerHTML = randRebuiltArray[5].name;
nameInBubble7.innerHTML = randRebuiltArray[6].name;






//------------------------Browser Detect------------------------//

let userAgent = navigator.userAgent;
let browserName;

if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
    incompatibilite.style.display = 'none';
} else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
    incompatibilite.style.display = 'none';
} else if (userAgent.match(/safari/i)) {
    browserName = "safari";
    incompatibilite.style.display = 'none';
} else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
    incompatibilite.style.display = 'none';
} else if (userAgent.match(/edg/i)) {
    browserName = "edge";
    incompatibilite.style.display = 'none';
}






//------------------------Scroll Position------------------------//

var scrollPos;

document.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
        topDiv.className = 'topDivHide';
    }
    if (window.scrollY < 60) {
        topDiv.className = 'topDiv';
        topDiv.appendChild(searchDiv);
        topDiv.appendChild(pageCommandDiv);
        topDiv.appendChild(menuIconDiv);
        searchDiv.className = 'searchDiv';
        fixedTopHidden.style.display = 'none';
    }
    if (window.scrollY > 28) {
        fixedTopHidden.appendChild(searchDiv);
        fixedTopHidden.appendChild(pageCommandDiv);
        fixedTopHidden.appendChild(menuIconDiv);
        searchDiv.className = 'searchDivFixed';
        fixedTopHidden.style.display = 'block';
    }
}, { passive: true });






//---------------------------Events---------------------------//


backPageCommand.addEventListener('click', () => {
    actionBack();
})

menuIconDiv.addEventListener('click', () => {
    menuDropDownDiv.style.display = 'block';
});

companiesLinkDiv.addEventListener('mousedown', () => {
    openCompaniesDivs();
});

typeLinkDiv.addEventListener('mousedown', () => {
    openTypesDivs();
});

usefullLinksDiv.addEventListener('mousedown', () => {
    openUsefullLinkDiv();
});

window.addEventListener('mousedown', () => {
    if (menuDropDownDiv.style.display === 'block') {
        menuDropDownDiv.style.display = 'none';
    }
});

searchDiv.addEventListener('mouseleave', () => {
    searchInput.style.backgroundColor = 'white';
});

searchDiv.addEventListener('click', () => {
    searchInput.focus();
});

searchInput.addEventListener('input', () => {
    //console.log(searchInput.value);
    searchResult = [];
    while (searchResultDiv.hasChildNodes()) {
        searchResultDiv.removeChild(searchResultDiv.firstChild);
    }
    searchResult = search(searchInput.value);
    searchResult.sort(function(a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
    });
    for (let i = 0; i < searchResult.length; i++) {
        let resultDiv = document.createElement('div');
        resultDiv.className = 'inSearchResultDiv';
        resultDiv.innerHTML = searchResult[i].name;
        resultDiv.addEventListener('mousedown', () => {
            hideMainDivChildren();
            showRebuiltSearch(searchResult[i], 'none');
        });
        searchResultDiv.appendChild(resultDiv);
    }
})

searchInput.addEventListener('focusin', () => {
    //console.log(searchInput.value);
    searchInput.style.backgroundColor = 'white';
    searchDiv.style.backgroundColor = 'white';
    if (searchInput.value.length > 0) {
        searchResult = [];
        while (searchResultDiv.hasChildNodes()) {
            searchResultDiv.removeChild(searchResultDiv.firstChild);
        }
        searchResult = search(searchInput.value, 'none');
        searchResult.sort(function(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
        });
        for (let i = 0; i < searchResult.length; i++) {
            let resultDiv = document.createElement('div');
            resultDiv.className = 'inSearchResultDiv';
            resultDiv.innerHTML = searchResult[i].name;
            resultDiv.addEventListener('mousedown', () => {
                hideMainDivChildren();
                showRebuiltSearch(searchResult[i]);
            });
            searchResultDiv.appendChild(resultDiv);
        }
    }
})

searchInput.addEventListener('focusout', () => {
    while (searchResultDiv.hasChildNodes()) {
        searchResultDiv.removeChild(searchResultDiv.firstChild);
    }
    searchResult = [];
    searchInput.value = '';
});

searchInput.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        showResult();
        while (searchResultDiv.hasChildNodes()) {
            searchResultDiv.removeChild(searchResultDiv.firstChild);
        }
        searchInput.value = '';
    }
})

searchIcon.addEventListener('mouseup', () => {
    showResult();
    while (searchResultDiv.hasChildNodes()) {
        searchResultDiv.removeChild(searchResultDiv.firstChild);
    }
    searchInput.value = '';
});

leftArrow.addEventListener('click', () => {
    if (rdImgIndex > 6) {
        rdImgIndex -= 1;
        randRebuiltOnScreen[0] = randRebuiltArray[rdImgIndex - 6];
        randRebuiltOnScreen[1] = randRebuiltArray[rdImgIndex - 5];
        randRebuiltOnScreen[2] = randRebuiltArray[rdImgIndex - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[rdImgIndex - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 6) {
        rdImgIndex -= 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[1] = randRebuiltArray[0];
        randRebuiltOnScreen[2] = randRebuiltArray[1];
        randRebuiltOnScreen[3] = randRebuiltArray[2];
        randRebuiltOnScreen[4] = randRebuiltArray[3];
        randRebuiltOnScreen[5] = randRebuiltArray[4];
        randRebuiltOnScreen[6] = randRebuiltArray[5];
    } else if (rdImgIndex === 5) {
        rdImgIndex -= 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[2] = randRebuiltArray[0];
        randRebuiltOnScreen[3] = randRebuiltArray[1];
        randRebuiltOnScreen[4] = randRebuiltArray[2];
        randRebuiltOnScreen[5] = randRebuiltArray[3];
        randRebuiltOnScreen[6] = randRebuiltArray[4];
    } else if (rdImgIndex === 4) {
        rdImgIndex -= 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[3] = randRebuiltArray[0];
        randRebuiltOnScreen[4] = randRebuiltArray[1];
        randRebuiltOnScreen[5] = randRebuiltArray[2];
        randRebuiltOnScreen[6] = randRebuiltArray[3];
    } else if (rdImgIndex === 3) {
        rdImgIndex -= 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 4];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[3] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[4] = randRebuiltArray[0];
        randRebuiltOnScreen[5] = randRebuiltArray[1];
        randRebuiltOnScreen[6] = randRebuiltArray[2];
    } else if (rdImgIndex === 2) {
        rdImgIndex = randRebuiltArray.length;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 5];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 4];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[3] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[4] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[5] = randRebuiltArray[0];
        randRebuiltOnScreen[6] = randRebuiltArray[1];
    } else if (rdImgIndex === 1) {
        rdImgIndex = randRebuiltArray.length;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 6];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 5];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[0];
    }

    rdImg1.src = randRebuiltOnScreen[0].img;
    rdImg2.src = randRebuiltOnScreen[1].img;
    rdImg3.src = randRebuiltOnScreen[2].img;
    rdImg4.src = randRebuiltOnScreen[3].img;
    rdImg5.src = randRebuiltOnScreen[4].img;
    rdImg6.src = randRebuiltOnScreen[5].img;
    rdImg7.src = randRebuiltOnScreen[6].img;
    nameInBubble1.innerHTML = randRebuiltOnScreen[0].name;
    nameInBubble2.innerHTML = randRebuiltOnScreen[1].name;
    nameInBubble3.innerHTML = randRebuiltOnScreen[2].name;
    nameInBubble4.innerHTML = randRebuiltOnScreen[3].name;
    nameInBubble5.innerHTML = randRebuiltOnScreen[4].name;
    nameInBubble6.innerHTML = randRebuiltOnScreen[5].name;
    nameInBubble7.innerHTML = randRebuiltOnScreen[6].name;
});

rightArrow.addEventListener('click', () => {
    if (rdImgIndex < randRebuiltArray.length - 1 && rdImgIndex >= 6) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[rdImgIndex - 6];
        randRebuiltOnScreen[1] = randRebuiltArray[rdImgIndex - 5];
        randRebuiltOnScreen[2] = randRebuiltArray[rdImgIndex - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[rdImgIndex - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === randRebuiltArray.length - 1) {
        rdImgIndex = 0;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 6];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 5];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 0) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 5];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 4];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[3] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[4] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 1) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 4];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[3] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 2) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 3];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[2] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[3] = randRebuiltArray[rdImgIndex - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 3) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 2];
        randRebuiltOnScreen[1] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[2] = randRebuiltArray[rdImgIndex - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[rdImgIndex - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 4) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[randRebuiltArray.length - 1];
        randRebuiltOnScreen[1] = randRebuiltArray[rdImgIndex - 5];
        randRebuiltOnScreen[2] = randRebuiltArray[rdImgIndex - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[rdImgIndex - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    } else if (rdImgIndex === 5) {
        rdImgIndex += 1;
        randRebuiltOnScreen[0] = randRebuiltArray[rdImgIndex - 6];
        randRebuiltOnScreen[1] = randRebuiltArray[rdImgIndex - 5];
        randRebuiltOnScreen[2] = randRebuiltArray[rdImgIndex - 4];
        randRebuiltOnScreen[3] = randRebuiltArray[rdImgIndex - 3];
        randRebuiltOnScreen[4] = randRebuiltArray[rdImgIndex - 2];
        randRebuiltOnScreen[5] = randRebuiltArray[rdImgIndex - 1];
        randRebuiltOnScreen[6] = randRebuiltArray[rdImgIndex];
    }

    rdImg1.src = randRebuiltOnScreen[0].img;
    rdImg2.src = randRebuiltOnScreen[1].img;
    rdImg3.src = randRebuiltOnScreen[2].img;
    rdImg4.src = randRebuiltOnScreen[3].img;
    rdImg5.src = randRebuiltOnScreen[4].img;
    rdImg6.src = randRebuiltOnScreen[5].img;
    rdImg7.src = randRebuiltOnScreen[6].img;
    nameInBubble1.innerHTML = randRebuiltOnScreen[0].name;
    nameInBubble2.innerHTML = randRebuiltOnScreen[1].name;
    nameInBubble3.innerHTML = randRebuiltOnScreen[2].name;
    nameInBubble4.innerHTML = randRebuiltOnScreen[3].name;
    nameInBubble5.innerHTML = randRebuiltOnScreen[4].name;
    nameInBubble6.innerHTML = randRebuiltOnScreen[5].name;
    nameInBubble7.innerHTML = randRebuiltOnScreen[6].name;
});

rdImgDiv1.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[0]) });

rdImgDiv2.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[1]) });

rdImgDiv3.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[2]) });

rdImgDiv4.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[3]) });

rdImgDiv5.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[4]) });

rdImgDiv6.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[5]) });

rdImgDiv7.addEventListener('click', () => { showRebuiltSearch(randRebuiltOnScreen[6]) });

rdImgDiv1.addEventListener('mouseenter', () => {
    tooltipDiv1.style.display = 'block';
    rdImg1.style.width = '130px';
});

rdImgDiv2.addEventListener('mouseenter', () => {
    tooltipDiv2.style.display = 'block';
    rdImg2.style.width = '130px';
});

rdImgDiv3.addEventListener('mouseenter', () => {
    tooltipDiv3.style.display = 'block';
    rdImg3.style.width = '130px';
});

rdImgDiv4.addEventListener('mouseenter', () => {
    tooltipDiv4.style.display = 'block';
    rdImg4.style.width = '130px';
});

rdImgDiv5.addEventListener('mouseenter', () => {
    tooltipDiv5.style.display = 'block';
    rdImg5.style.width = '130px';
});

rdImgDiv6.addEventListener('mouseenter', () => {
    tooltipDiv6.style.display = 'block';
    rdImg6.style.width = '130px';
});

rdImgDiv7.addEventListener('mouseenter', () => {
    tooltipDiv7.style.display = 'block';
    rdImg7.style.width = '130px';
});

rdImgDiv1.addEventListener('mouseleave', () => {
    tooltipDiv1.style.display = 'none';
    rdImg1.style.width = '100px';
});

rdImgDiv2.addEventListener('mouseleave', () => {
    tooltipDiv2.style.display = 'none';
    rdImg2.style.width = '100px';
});

rdImgDiv3.addEventListener('mouseleave', () => {
    tooltipDiv3.style.display = 'none';
    rdImg3.style.width = '100px';
});

rdImgDiv4.addEventListener('mouseleave', () => {
    tooltipDiv4.style.display = 'none';
    rdImg4.style.width = '100px';
});

rdImgDiv5.addEventListener('mouseleave', () => {
    tooltipDiv5.style.display = 'none';
    rdImg5.style.width = '100px';
});

rdImgDiv6.addEventListener('mouseleave', () => {
    tooltipDiv6.style.display = 'none';
    rdImg6.style.width = '100px';
});

rdImgDiv7.addEventListener('mouseleave', () => {
    tooltipDiv7.style.display = 'none';
    rdImg7.style.width = '100px';
});

printPresBoxButton.addEventListener('click', () => {
    printRebuilt(rebuiltToPrint);
});






//---------------------------Functions---------------------------//


function hideMainDivChildren() {
    let mainPageDivChildren = mainDiv.children;
    for (let i = 0; i < mainPageDivChildren.length; i++) {
        mainPageDivChildren[i].style.display = 'none';
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showResult() {
    if (searchResult.length > 0) {
        while (showResultDiv.hasChildNodes()) {
            showResultDiv.removeChild(showResultDiv.firstChild);
        }
        
        hideMainDivChildren();
        
        searchResult.sort(function(a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
        });
        searchResult.forEach(rebuilt => {
            let inResultDiv = document.createElement('div');
            inResultDiv.className = 'inResultDiv';
            inResultDiv.id = rebuilt.name + 'Div';
            let resultImgDiv = document.createElement('div');
            resultImgDiv.className = 'resultImgDiv';
            let resultImg = document.createElement('img');
            resultImg.className = 'resultImg';
            resultImg.src = rebuilt.img;
            let inResultTitleDiv = document.createElement('div');
            inResultTitleDiv.className = 'inResultTitleDiv';
            inResultTitleDiv.innerHTML = rebuilt.name;
            inResultDiv.addEventListener('click', () => {
                scrollPos = window.scrollY;
                showResultDiv.style.display = 'none';
                while (showResultDiv.hasChildNodes()) {
                    showResultDiv.removeChild(showResultDiv.firstChild);
                }
                showRebuiltSearch(rebuilt);
            });
            resultImgDiv.appendChild(resultImg);
            inResultDiv.appendChild(resultImgDiv);
            inResultDiv.appendChild(inResultTitleDiv);
            showResultDiv.appendChild(inResultDiv);
            showResultDiv.style.display = 'block';
        });
        searchResultReg = searchResult;
        searchResult = [];

        if (isToRegister) {
            actionRegister.push(['showResult', searchResultReg]);
        }
        isToRegister = true;

    }
}

function showRebuiltSearch(rebuilt) {

    while (partList.hasChildNodes()) {
        partList.removeChild(partList.firstChild);
    }
    rebuiltToPrint = rebuilt;
    hideMainDivChildren();

    rebuiltImg.src = rebuilt.img;
    rebuiltImgZoomed.src = rebuilt.img;
    rebuiltImgZoomed.style.height = '600px';
    rebuiltNameInPresentationBox.innerHTML = rebuilt.name;

    rebuiltImg.addEventListener('mousemove', e => {

        let rectDiv = e.target.getBoundingClientRect();
        let xPos = e.clientX - rectDiv.left;
        let yPos = e.clientY - rectDiv.top;
        let xInsideRatio = rebuiltImgZoomed.height / rebuiltImg.height;
        let xRatio = xPos / rebuiltImg.width;
        let yRatio = yPos / rebuiltImg.height;

        rebuiltImgZoomed.style.left = ((-Math.abs(xPos) * (xInsideRatio * xRatio)) + 10) + 'px';
        rebuiltImgZoomed.style.top = (((-Math.abs(yPos)) * (3 * yRatio)) + 50) + 'px';
    });
    rebuiltImg.addEventListener('mouseenter', () => {
        zoomLense.style.display = 'block';
    });
    rebuiltImg.addEventListener('mouseleave', () => {
        zoomLense.style.display = 'none';
    });

    if (parseInt(rebuilt.cascadesId) < 1000) {
        cascadesIdInPresentationBox.innerHTML = 'N/A';
    } else {
        cascadesIdInPresentationBox.innerHTML = rebuilt.cascadesId;
    }

    factoryIdInPresentationBox.innerHTML = rebuilt.factoryId;
    rebuiltCompanyInPresentationBox.innerHTML = rebuilt.company;
    sectionMagaInPresentationBox.innerHTML = rebuilt.sectionMaga;

    rebuilt.partList.forEach(part => {
        let element = document.createElement('li');
        element.id = part.cascadesId + '_li';
        element.className = 'inPartList';
        element.innerHTML = part.name;
        element.addEventListener('mouseenter', () => {
            showPartDetail(part, element.id)
        });

        element.addEventListener('mouseleave', () => {
            deletePartDetail(part.cascadesId)
        });
        partList.appendChild(element);
    });

    while (reletedDocLinkDiv.hasChildNodes()) {
        reletedDocLinkDiv.removeChild(reletedDocLinkDiv.firstChild);
    }

    let linkList = document.createElement('ul');
    rebuilt.documentations.forEach(linkData => {
        let linkListElement = document.createElement('li');
        let linkElement = document.createElement('a');
        let linkTitle = linkData[0];
        let link = linkData[1];
        linkElement.href = link;
        linkElement.innerHTML = linkTitle;
        linkElement.target = '_blank';
        linkElement.className = 'linkDoc';
        linkListElement.appendChild(linkElement);
        linkList.appendChild(linkListElement);
    });
    reletedDocLinkDiv.appendChild(linkList);

    rebuiltPresentationBox.style.display = 'block';

    if (isToRegister) {
        actionRegister.push(['showRebuiltSearch', rebuilt]);
    } else {
        isToRegister = true;
    }

}

function showPartDetail(part, liId) {

    let li = document.getElementById(liId);

    let partInfoDiv = document.createElement('div');
    partInfoDiv.id = part.cascadesId + '_infoDiv'
    partInfoDiv.className = 'sidePartWindow';

    let triangleInInfoDiv = document.createElement('div');
    triangleInInfoDiv.className = 'triangleInInfoDiv';

    let partCsIdDiv = document.createElement('div');
    partCsIdDiv.className = 'inSidePartWindow';
    let partFctyIdDiv = document.createElement('div');
    partFctyIdDiv.className = 'inSidePartWindow';
    let partSctnMgDiv = document.createElement('div');
    partSctnMgDiv.className = 'inSidePartWindow';

    let partCsIdLabel = document.createElement('label');
    partCsIdLabel.className = 'labelSidePartWindow';
    partCsIdLabel.innerHTML = 'Cascades #:';
    let partFctyIdLabel = document.createElement('label');
    partFctyIdLabel.className = 'labelSidePartWindow';
    partFctyIdLabel.innerHTML = 'Factory #:';
    let partSctnMgLabel = document.createElement('label');

    let partSctnMgP = document.createElement('div');
    if (part.description.length > 1) {
        partSctnMgLabel.className = 'labelSidePartWindow';
        partSctnMgLabel.innerHTML = 'Note:';

        partSctnMgP.className = 'descInPresentationBox';
        partSctnMgP.innerHTML = part.description;
    } else {
        partSctnMgLabel.className = 'labelSidePartWindow';
        partSctnMgLabel.innerHTML = 'Section Magasin:';

        partSctnMgP.className = 'pInPresentationBox';
        partSctnMgP.innerHTML = part.sectionMaga;
    }

    let partCsIdP = document.createElement('p');
    partCsIdP.className = 'pInPresentationBox';
    if (parseInt(part.cascadesId) < 1000) {
        partCsIdP.innerHTML = 'N/A';
    } else {
        partCsIdP.innerHTML = part.cascadesId;
    }
    let pDivInPresentationBox = document.createElement('div');
    pDivInPresentationBox.className = 'pDivInPresentationBox';
    let partFctyIdP = document.createElement('p');
    partFctyIdP.className = 'pInPresentationBox';
    partFctyIdP.innerHTML = part.factoryId;
    pDivInPresentationBox.appendChild(partFctyIdP);

    partCsIdDiv.appendChild(partCsIdLabel);
    partCsIdDiv.appendChild(partCsIdP);

    partFctyIdDiv.appendChild(partFctyIdLabel);
    partFctyIdDiv.appendChild(pDivInPresentationBox);

    partSctnMgDiv.appendChild(partSctnMgLabel);
    partSctnMgDiv.appendChild(partSctnMgP);

    partInfoDiv.appendChild(partCsIdDiv);
    partInfoDiv.appendChild(partFctyIdDiv);
    partInfoDiv.appendChild(partSctnMgDiv);

    li.appendChild(partInfoDiv);
}

function deletePartDetail(cascadesId) {
    let div = document.getElementById(cascadesId + '_infoDiv');
    div.remove();
}

function openCompaniesDivs() {
    while (categoriesDiv.hasChildNodes()) {
        categoriesDiv.removeChild(categoriesDiv.firstChild);
    }
    hideMainDivChildren();
    companies.forEach(company => {
        let cpImgDiv = document.createElement('div');
        cpImgDiv.className = 'categorieImgDiv';
        let cpImg = document.createElement('img');
        cpImg.src = company.img;
        cpImg.className = 'categoriesImgLink';
        cpImgDiv.addEventListener('click', () => {
            searchResult = getCompanyList(company.company);
            showResult();
        });
        cpImgDiv.appendChild(cpImg);
        categoriesDiv.appendChild(cpImgDiv);
    });
    categoriesDiv.style.display = 'block';

    if (isToRegister) {
        actionRegister.push(['openCompaniesDivs']);
    }
    isToRegister = true;

}

function openTypesDivs() {
    while (categoriesDiv.hasChildNodes()) {
        categoriesDiv.removeChild(categoriesDiv.firstChild);
    }
    hideMainDivChildren();
    types.forEach(type => {

        let tpImgDiv = document.createElement('div');
        tpImgDiv.className = 'categorieImgDiv';

        let tpImg = document.createElement('img');
        tpImg.src = type.img;
        tpImg.className = 'typeImgLink';

        let cpTooltipDiv = document.createElement('div');
        cpTooltipDiv.className = 'cpTooltipDiv';
        cpTooltipDiv.style.display = 'none';

        let cpTooltipBubble = document.createElement('div');
        cpTooltipBubble.className = 'chatBubble';

        let cpTooltipTriangle = document.createElement('div');
        cpTooltipTriangle.className = 'chatBubbleTriangle';
        cpTooltipTriangle.style.top = '-22px';

        let cpTooltipP = document.createElement('p');
        cpTooltipP.className = 'nameInBubble';
        cpTooltipP.innerHTML = type.type;

        cpTooltipDiv.appendChild(cpTooltipBubble);
        cpTooltipDiv.appendChild(cpTooltipTriangle);
        cpTooltipDiv.appendChild(cpTooltipP);

        tpImgDiv.addEventListener('click', () => {
            searchResult = getTypeList(type.type);
            showResult();
        });
        tpImgDiv.addEventListener('mouseenter', () => {
            cpTooltipDiv.style.display = 'block';
        });
        tpImgDiv.addEventListener('mouseleave', () => {
            cpTooltipDiv.style.display = 'none';
        });
        tpImgDiv.appendChild(tpImg);
        tpImgDiv.appendChild(cpTooltipDiv);
        categoriesDiv.appendChild(tpImgDiv);
    });
    categoriesDiv.style.display = 'block';

    if (isToRegister) {
        actionRegister.push(['openTypesDivs']);
    }
    isToRegister = true;
}

function openUsefullLinkDiv() {
    while (usefullLinkDiv.hasChildNodes()) {
        usefullLinkDiv.removeChild(usefullLinkDiv.firstChild);
    }
    hideMainDivChildren();

    let ballBearingChartLinkDiv = document.createElement('div');
    let ballBearingChartLinkLabel = document.createElement('label');
    let ballBearingChartLink = document.createElement('a');
    ballBearingChartLinkDiv.className = 'linkDiv';
    ballBearingChartLinkLabel.className = 'labelInPresentationBox';
    ballBearingChartLinkLabel.innerHTML = 'Ball bearing chart';
    ballBearingChartLink.href = 'https://www.allballsracing.com/media/productshowcase/AllBallsBallbearingsizechart.pdf';
    ballBearingChartLink.innerHTML = 'https://www.allballsracing.com/media/productshowcase/AllBallsBallbearingsizechart.pdf';
    ballBearingChartLink.target = '_blank';
    ballBearingChartLink.className = 'linkDoc';
    ballBearingChartLinkDiv.appendChild(ballBearingChartLinkLabel);
    ballBearingChartLinkDiv.appendChild(ballBearingChartLink);

    let skfBearingChartLinkDiv = document.createElement('div');
    let skfBearingChartLinkLabel = document.createElement('label');
    let skfBearingChartLink = document.createElement('a');
    skfBearingChartLinkDiv.className = 'linkDiv';
    skfBearingChartLinkLabel.className = 'labelInPresentationBox';
    skfBearingChartLinkLabel.innerHTML = 'SKF bearing chart';
    skfBearingChartLink.href = 'https://www.skf.com/binaries/pub12/Images/0901d196802809de-Rolling-bearings---17000_1-EN_tcm_12-121486.pdf';
    skfBearingChartLink.innerHTML = 'https://www.skf.com/binaries/pub12/Images/0901d196802809de-Rolling-bearings---17000_1-EN_tcm_12-121486.pdf';
    skfBearingChartLink.target = '_blank';
    skfBearingChartLink.className = 'linkDoc';
    skfBearingChartLinkDiv.appendChild(skfBearingChartLinkLabel);
    skfBearingChartLinkDiv.appendChild(skfBearingChartLink);

    let beltInstallationLinkDiv = document.createElement('div');
    let beltInstallationLinkLabel = document.createElement('label');
    let beltInstallationLink = document.createElement('a');
    beltInstallationLinkDiv.className = 'linkDiv';
    beltInstallationLinkLabel.className = 'labelInPresentationBox';
    beltInstallationLinkLabel.innerHTML = 'Installation de courroie';
    beltInstallationLink.href = 'https://goodyearrubberproducts.com/2018pdfs/Contitech_PTP_Maintance_Troubleshotting/pdf/Contitech_PTP_Maintance_Troubleshotting.pdf';
    beltInstallationLink.innerHTML = 'https://goodyearrubberproducts.com/2018pdfs/Contitech_PTP_Maintance_Troubleshotting/pdf/Contitech_PTP_Maintance_Troubleshotting.pdf';
    beltInstallationLink.target = '_blank';
    beltInstallationLink.className = 'linkDoc';
    beltInstallationLinkDiv.appendChild(beltInstallationLinkLabel);
    beltInstallationLinkDiv.appendChild(beltInstallationLink);

    let boltTorqueLinkDiv = document.createElement('div');
    let boltTorqueLinkLabel = document.createElement('label');
    let boltTorqueLink = document.createElement('a');
    boltTorqueLinkDiv.className = 'linkDiv';
    boltTorqueLinkLabel.className = 'labelInPresentationBox';
    boltTorqueLinkLabel.innerHTML = 'Torque chart';
    boltTorqueLink.href = 'https://www.fastenal.com/content/merch_rules/images/fcom/content-library/Torque-Tension%20Reference%20Guide.pdf';
    boltTorqueLink.innerHTML = 'https://www.fastenal.com/content/merch_rules/images/fcom/content-library/Torque-Tension%20Reference%20Guide.pdf';
    boltTorqueLink.target = '_blank';
    boltTorqueLink.className = 'linkDoc';
    boltTorqueLinkDiv.appendChild(boltTorqueLinkLabel);
    boltTorqueLinkDiv.appendChild(boltTorqueLink);

    usefullLinkDiv.appendChild(ballBearingChartLinkDiv);
    usefullLinkDiv.appendChild(skfBearingChartLinkDiv);
    usefullLinkDiv.appendChild(beltInstallationLinkDiv);
    usefullLinkDiv.appendChild(boltTorqueLinkDiv);

    usefullLinkDiv.style.display = 'block';

    if (isToRegister) {
        actionRegister.push(['openUsefullLinkDiv']);
    }

    isToRegister = true;

}

function actionBack() {

    if (actionRegister.length > 1) {

        isToRegister = false;
        let lastAction = actionRegister[actionRegister.length - 2];
        let fctn = lastAction[0];

        if (fctn === 'showRebuiltSearch') {

            actionRegister.splice(-1, 1);
            showRebuiltSearch(lastAction[1]);

        } else if (lastAction === 'openCompaniesDivs' || fctn === 'openCompaniesDivs') {

            actionRegister.splice(-1, 1);
            openCompaniesDivs();

        } else if (lastAction === 'openTypesDivs' || fctn === 'openTypesDivs') {

            actionRegister.splice(-1, 1);
            openTypesDivs();

        } else if (lastAction === 'openUsefullLinkDiv' || fctn === 'openUsefullLinkDiv') {

            actionRegister.splice(-1, 1);
            openUsefullLinkDiv();

        } else if (lastAction === 'showResult' || fctn === 'showResult') {
            searchResult = lastAction[1];
            actionRegister.splice(-1, 1);
            showResult();
            window.scrollTo(0, scrollPos);

        } else if (lastAction === 'main' || fctn === 'main') {

            hideMainDivChildren();
            mainPageTitleDiv.style.display = 'block';
            mainPageText.style.display = 'block';
            randomRebuiltDownDiv.style.display = 'block';
            actionRegister.splice(-1, 1);
            isToRegister = true;

        }
    }
}

function printRebuilt(rebuilt) {
    while (partListPrint.hasChildNodes()) {
        partListPrint.removeChild(partListPrint.firstChild);
    }
    for (let i = 0; i < bodyDivs.length; i++) {
        bodyDivs[i].style.display = 'none';
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    rebuiltImgPrint.src = rebuilt.img;
    rebuiltImgPrint.style.height = '300px';
    if (parseInt(rebuilt.cascadesId) < 1000) {
        cascadesIdInPresentationBoxPrint.innerHTML = 'N/A';
    } else {
        cascadesIdInPresentationBoxPrint.innerHTML = rebuilt.cascadesId;
    }
    factoryIdInPresentationBoxPrint.innerHTML = rebuilt.factoryId;
    rebuiltCompanyInPresentationBoxPrint.innerHTML = rebuilt.company;
    sectionMagaInPresentationBoxPrint.innerHTML = rebuilt.sectionMaga;
    rebuilt.partList.forEach(part => {
        let element = document.createElement('li');
        let secondParam;
        let lastParam;
        if (parseInt(part.cascadesId) < 1000) {
            secondParam = 'N/A';
            lastParam = 'Sur Réquisition';
        } else {
            secondParam = part.cascadesId;
            lastParam = 'Section: ' + part.sectionMaga;
        }
        element.innerHTML = `${part.name}:  #${secondParam},   ${lastParam}`;
        partListPrint.appendChild(element);
    });
    rebuiltPresentationBoxPrint.style.display = 'block';
    print();
    rebuiltPresentationBoxPrint.style.display = 'none';
    mainDiv.style.display = 'block';
    fixedTop.style.display = 'block';
    topDiv.style.display = 'block';
}
