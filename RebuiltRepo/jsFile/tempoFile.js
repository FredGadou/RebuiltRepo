//--------------------------------------   REBUILTS  --------------------------------------------//


let atomiseurcolle = new Rebuilt(14111, 'Atomiseur 1/4JAU');
atomiseurcolle.factoryId = '1/4JAU-SS';
atomiseurcolle.sectionMaga = 'E2 C-8';
atomiseurcolle.rebuiltClass = 'Atomiseur';
atomiseurcolle.documentations = [
    ['Spare Parts', 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/rebuiltDoc/PL14JAU-SS-&14JAUCO-SS.pdf']
];
atomiseurcolle.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/14111.jpg';

let atomiseurLSX = new Rebuilt(14357, 'Atomiseur 1/4XA');
atomiseurLSX.factoryId = '1/4XA02SSBRJBSF050F';
atomiseurLSX.sectionMaga = 'E2 E-4';
atomiseurLSX.rebuiltClass = 'Atomiseur';
atomiseurLSX.company = 'Bete Fog Nozzle inc.'
atomiseurLSX.documentations = [
    ['Spare Parts', 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/rebuiltDoc/XAspraygun.pdf']
];
atomiseurLSX.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/14357.jpg';

let atomiseurForte = new Rebuilt(14359, 'Atomiseur 1/8VAU');
atomiseurForte.factoryId = 'PL 1/8VAU-SS';
atomiseurForte.sectionMaga = 'Q3 A-1'
atomiseurForte.rebuiltClass = 'Atomiseur';
atomiseurForte.company = 'Spraying System Co.';
atomiseurForte.documentations = [
    ['Spare Parts', '//ad.cascades.com/data/CTG-375 Granby/Maintenance Mecanique/016- Ligne 16/016-016 (Log saw)/4- Spare Parts/spraying systems.pdf']
];
atomiseurForte.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/14359.jpg';

let blocMeuleLSX = new Rebuilt(98865, 'Bloc meule LSX');
blocMeuleLSX.sectionMaga = 'E2 E-8'
blocMeuleLSX.rebuiltClass = 'Aiguisage';
blocMeuleLSX.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/98865.jpg';

let blocMeuleKuosIn = new Rebuilt(105, 'Bloc meule kuos interne');
blocMeuleKuosIn.rebuiltClass = 'Aiguisage';

let blocMeuleKuosEx = new Rebuilt(106, 'Bloc meule kuos externe');
blocMeuleKuosEx.rebuiltClass = 'Aiguisage';

let blocMeuleM10In = new Rebuilt(16328, 'Pulsar Internal Grindstone');
blocMeuleM10In.factoryId = '224379';
blocMeuleM10In.sectionMaga = 'F2 D-8';
blocMeuleM10In.rebuiltClass = 'Aiguisage';
blocMeuleM10In.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/16328.jpg';

let blocMeuleM10Ex = new Rebuilt(16326, 'Pulsar External Grindstone');
blocMeuleM10Ex.factoryId = '224381';
blocMeuleM10Ex.sectionMaga = 'F2 C-3';
blocMeuleM10Ex.rebuiltClass = 'Aiguisage';
blocMeuleM10Ex.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/16326.jpg';

let blocMeuleBretting = new Rebuilt(109, 'Bloc meule Bretting');
blocMeuleBretting.rebuiltClass = 'Aiguisage';

let carriageMandrelIR505 = new Rebuilt(10010, 'Carriage mandrel IR505');

let chaineLanceurLSX = new Rebuilt(111, 'Chaine lanceur LSX');

let clutchTGC60 = new Rebuilt(14756, 'Clutch TGC60');
clutchTGC60.factoryId = 'TGC60';
clutchTGC60.sectionMaga = 'R2 E-1';
clutchTGC60.company = 'Browning';
clutchTGC60.documentations = [
    ['Operation and Maintenance Instructions', 'https://cdnmedia.regalbeloit.com/images/d120001/medias/docus/4402/InstallationManuals_Form_8322E.pdf']
];
clutchTGC60.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/14758.jpg';

let clutchTGC20 = new Rebuilt(14758, 'Clutch TGC20');
clutchTGC20.factoryId = 'TGC20'
clutchTGC20.company = 'Browning';
clutchTGC20.sectionMaga = 'R2 E-2';
clutchTGC20.documentations = [
    ['Operation and Maintenance Instructions', 'https://cdnmedia.regalbeloit.com/images/d120001/medias/docus/4402/InstallationManuals_Form_8322E.pdf']
];
clutchTGC20.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/14756.jpg';

let hubLameKuos = new Rebuilt(112, 'Hub lame Kuos')

let plyIR505 = new Rebuilt(113, 'Plybonder IR505');

let plyM10 = new Rebuilt(114, 'Plybonder M10');
plyM10.rebuiltClass = 'Plybonder';

let plyM11 = new Rebuilt(115, 'Plybonder M11');
plyM11.rebuiltClass = 'Plybonder';

let plyM15 = new Rebuilt(116, 'Plybonder M15');
plyM15.rebuiltClass = 'Plybonder';
plyM15.documentations = ['P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/rebuiltDoc/NAQ_130C_00_ESPLOSO.pdf']

let plyM16 = new Rebuilt(117, 'Plybonder M16');
plyM16.rebuiltClass = 'Plybonder';

let plyM22 = new Rebuilt(118, 'Plybonder M22');
plyM22.rebuiltClass = 'Plybonder';

let pompeDia = new Rebuilt(24399, 'Pompe Diaphragme');
pompeDia.factoryId = '66605J-34B';
pompeDia.sectionMaga = 'M2 H-1';
pompeDia.rebuiltClass = 'Pompe';
pompeDia.company = 'Aro';
pompeDia.documentations = [
    ['Manual', 'https://d1pkofokfruj4.cloudfront.net/media/upload/resource/j/ARO-2019-66605X-1-2-Inch-Classic-Non-Metallic-Diaphragm-Pump-Manual-Fluid-Section.pdf']
];
pompeDia.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/10019.webp';

let pusherRota = new Rebuilt(14161, 'Pusher rotatonique ass.');
pusherRota.sectionMaga = 'H2 D-9';
pusherRota.rebuiltClass = 'Assembly';

let rabbitIR505 = new Rebuilt(14026, 'Rabbit/Carriage');
rabbitIR505.factoryId = '243045008';
rabbitIR505.sectionMaga = 'E3 D-3';
rabbitIR505.rebuiltClass = 'Assembly';

let relaxGripper = new Rebuilt(40191, 'Relax Gripper');
relaxGripper.factoryId = 'B20192005';
relaxGripper.sectionMaga = 'I2 C-8';
relaxGripper.rebuiltClass = 'Assembly';


let shaftBallouneEmb = new Rebuilt(120, 'Shaft balloune');

let slitterM12 = new Rebuilt(121, 'Slitter M12');

let slitterBretting = new Rebuilt(13224, 'Slitter Class I');
slitterBretting.factoryId = 'Slitter Class I';
slitterBretting.sectionMaga = 'LL2 D-8';
slitterBretting.rebuiltClass = 'Cutting';
slitterBretting.company = 'Tidland';
slitterBretting.documentations = [
    ['Installation, Operation and Maintenance', 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.maxcessintl.com/wp-content/uploads/2021/04/Tidland_PSAutoKnifeholder_Manual_1.pdf']
];




//---------------- Cylindre ----------------//
let cyl_ave01 = new Rebuilt(40112, '0822125003');
cyl_ave01.factoryId = '0822125003';
cyl_ave01.sectionMaga = 'F3 F-5';
cyl_ave01.rebuiltClass = 'Cylindre';
cyl_ave01.company = 'Aventics';
cyl_ave01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/40112.jpg';

let cyl_bos01 = new Rebuilt(24192, '0.822.232.003');
cyl_bos01.factoryId = '0822232003';
cyl_bos01.sectionMaga = 'F3 D-4';
cyl_bos01.rebuiltClass = 'Cylindre';
cyl_bos01.company = 'Bosch';
cyl_bos01.documentations = [
    ['Configuration documentation', 'P:/CTG-375%20Granby/Maintenance%20Mecanique/html/Source/RebuiltRepo/rebuiltDoc/0822232003_MNI-DA-16-0050-D-01-01-1-00-000-00_22393861.pdf']
]
cyl_bos01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/24192.jpg';

let cyl_fes01 = new Rebuilt(11275, 'DGC-32-600-GF-PPV-A');
cyl_fes01.factoryId = 'DGC-32-600-GF-PPV-A';
cyl_fes01.sectionMaga = 'G4 A-1';
cyl_fes01.rebuiltClass = 'Cylindre';
cyl_fes01.company = 'Festo';
cyl_fes01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/11275.jpg';
cyl_fes01.documentations = [
    ['Linear drives DGC', 'https://www.festo.com/media/pim/014/D15000100122014.PDF']
]

let cyl_fes02 = new Rebuilt(28306, 'DSBC-40-200-PPVA-N3');
cyl_fes02.factoryId = 'DSBC-40-200-PPVA-N3';
cyl_fes02.sectionMaga = 'I4 B-9';
cyl_fes02.rebuiltClass = 'Cylindre';
cyl_fes02.company = 'Festo';
cyl_fes02.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/28306.jpg';
cyl_fes02.documentations = [
    ['Standards-based cylinders DSBC', 'https://www.festo.com/media/pim/133/D15000100122133.PDF']
];

let cyl_num01 = new Rebuilt(92928, 'P2AL0512D-B2AO');
cyl_num01.factoryId = 'P2AL0512D-B2AO';
cyl_num01.sectionMaga = 'C2 D-3';
cyl_num01.rebuiltClass = 'Cylindre';
cyl_num01.company = 'Numatics';

let cyl_num02 = new Rebuilt(50133, 'F1AL-30A7J-C2AO');
cyl_num02.factoryId = 'F1AL-30A7J-C2AO';
cyl_num02.sectionMaga = 'D3 D-1';
cyl_num02.rebuiltClass = 'Cylindre';
cyl_num02.company = 'Numatics';

let cyl_pne01 = new Rebuilt(24218, 'PAP100');
cyl_pne01.factoryId = '1309.200.0800.01.SP';
cyl_pne01.rebuiltClass = 'Cylindre';
cyl_pne01.sectionMaga = 'C2 D-4';
cyl_pne01.company = 'Pneumax';
cyl_pne01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/24218.jpg';

let cyl_pne02 = new Rebuilt(20205, '1348.50.80.01');
cyl_pne02.factoryId = '1348.50.80.01';
cyl_pne02.sectionMaga = 'F3 F-2';
cyl_pne02.rebuiltClass = 'Cylindre';
cyl_pne02.company = 'Pneumax';
cyl_pne02.documentations = [
    ['Série 1348/1350', 'https://manufacturescorpion.com/uploads/documents/1348.pdf']
]
cyl_pne02.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/20205.jpg';

let cyl_sco01 = new Rebuilt(92889, '1319.32.350.01');
cyl_sco01.factoryId = '1319.32.350.01';
cyl_sco01.sectionMaga = 'C3 E-7';
cyl_sco01.rebuiltClass = 'Cylindre';
cyl_sco01.company = 'Scorpion';
cyl_sco01.documentations = [
    ['Série 1319/1321', 'https://manufacturescorpion.com/uploads/documents/1319.pdf']
];
cyl_sco01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/92889.jpg';

let cyl_sco02 = new Rebuilt(92898, '1260.32.15.SP');
cyl_sco02.factoryId = '1260.32.15.SP';
cyl_sco02.sectionMaga = 'G4 D-8';
cyl_sco02.rebuiltClass = 'Cylindre';
cyl_sco02.company = 'Scorpion';
cyl_sco02.sectionMaga = 'G4 D-8';
cyl_sco02.documentations = [
    ['Series 1200', 'https://manufacturescorpion.com/uploads/documents/1260_2020.pdf']
];
cyl_sco02.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/92898.jpg';

let cyl_smc01 = new Rebuilt(20014, 'C96SB32-50');
cyl_smc01.factoryId = 'C96SB32-50';
cyl_smc01.sectionMaga = 'E2 E-2';
cyl_smc01.rebuiltClass = 'Cylindre';
cyl_smc01.company = 'SMC';
cyl_smc01.documentations = [
    ['Series C96', 'https://www.smcpneumatics.com/pdfs/C96.pdf']
];
cyl_smc01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/20014.jpg';

let cyl_smc02 = new Rebuilt(24235, 'MY1B63G-700');
cyl_smc02.factoryId = 'MY1B63G-700';
cyl_smc02.rebuiltClass = 'Cylindre';
cyl_smc02.sectionMaga = 'E5 A-8';
cyl_smc02.company = 'SMC';
cyl_smc02.documentations = [
    ['Series MY1', 'https://www.smcpneumatics.com/pdfs/MY1.pdf']
];
cyl_smc02.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/24235.jpg';

let cyl_smc03 = new Rebuilt(24202, 'CQ2KB32-50D');
cyl_smc03.factoryId = 'CQ2KB32-50D';
cyl_smc03.sectionMaga = 'E3 C-2';
cyl_smc03.rebuiltClass = 'Cylindre';
cyl_smc03.company = 'SMC';
cyl_smc03.documentations = [
    ['CQ2 Compact Cylinder', 'https://www.smcpneumatics.com/smcdigitalcat3/docs/actuator/compact/cq2-0909.pdf']
];
cyl_smc03.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/24202.jpg';

let cyl_smc04 = new Rebuilt(24236, 'CQ2B50TF-20SZ');
cyl_smc04.factoryId = 'CQ2B50TF-20SZ';
cyl_smc04.sectionMaga = 'M1 A-4';
cyl_smc04.rebuiltClass = 'Cylindre';
cyl_smc04.company = 'SMC';
cyl_smc04.documentations = [
    ['CQ2 Compact Cylinder Auto Switch Mounting Groove', 'https://www.smcpneumatics.com/pdfs/CQ2_Z.pdf']
];
cyl_smc04.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/24236.jpg';

let cyl_smc05 = new Rebuilt(24126, 'CQ2KB32-30D');
cyl_smc05.factoryId = 'CQ2KB32-30D';
cyl_smc05.sectionMaga = 'M1 A-6';
cyl_smc05.rebuiltClass = 'Cylindre';
cyl_smc05.company = 'SMC';
cyl_smc05.documentations = [
    ['CQ2 Compact Cylinder Auto Switch Mounting Groove', 'https://www.smcpneumatics.com/pdfs/CQ2_Z.pdf']
];
cyl_smc05.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/24126.jpg';

let cyl_she01 = new Rebuilt(15999, '4MAC11');
cyl_she01.factoryId = '4MAC11';
cyl_she01.sectionMaga = 'F1 F-1';
cyl_she01.rebuiltClass = 'Cylindre';
cyl_she01.company = 'Sheffer';
cyl_she01.documentations = [
    ['MA Series Medium Duty', 'https://sheffercorp.com/wp-content/uploads/2017/08/ma-series-medium-duty.pdf']
]
cyl_she01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/15999.jpg';

let cyl_NaN01 = new Rebuilt(21720, 'S4AL-45A2V-BAA0');
cyl_NaN01.sectionMaga = 'C4 PLANC';
cyl_NaN01.rebuiltClass = 'Cylindre';
//---------------- Cylindre ----------------// End


//---------------- Gearbox ----------------// 
let gearbox_tigear01 = new Rebuilt(14990, 'Dodge Tigear 2 20/1 Right');
gearbox_tigear01.factoryId = '23A20R14';
gearbox_tigear01.sectionMaga = 'L4 F-2';
gearbox_tigear01.rebuiltClass = 'Gearbox';
gearbox_tigear01.company = 'Dodge'
gearbox_tigear01.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear01.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/14990.jpg';

let gearbox_tigear02 = new Rebuilt(16425, 'Dodge Tigear 2 10/1 Left');
gearbox_tigear02.factoryId = '23A10L14';
gearbox_tigear02.sectionMaga = 'L3 D-3';
gearbox_tigear02.rebuiltClass = 'Gearbox';
gearbox_tigear02.company = 'Dodge';
gearbox_tigear02.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear02.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/16425.jpg';

let gearbox_tigear03 = new Rebuilt(16426, 'Dodge Tigear 2 10/1 Right');
gearbox_tigear03.factoryId = '23A10R14';
gearbox_tigear03.sectionMaga = 'L4 C-1';
gearbox_tigear03.rebuiltClass = 'Gearbox';
gearbox_tigear03.company = 'Dodge';
gearbox_tigear03.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear03.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/16426.jpg';

let gearbox_tigear04 = new Rebuilt(16428, 'Dodge Tigear 2 15/1 Right');
gearbox_tigear04.factoryId = '23A15R14';
gearbox_tigear04.sectionMaga = 'L4 A-2';
gearbox_tigear04.rebuiltClass = 'Gearbox';
gearbox_tigear04.company = 'Dodge';
gearbox_tigear04.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear04.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/16426.jpg';

let gearbox_tigear05 = new Rebuilt(96135, 'Dodge Tigear 2 20/1 Hollow');
gearbox_tigear05.factoryId = '20Q20H56';
gearbox_tigear05.sectionMaga = 'KK4 D-4';
gearbox_tigear05.rebuiltClass = 'Gearbox';
gearbox_tigear05.company = 'Dodge';
gearbox_tigear05.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear05.img = 'P:/CTG-375%20Granby/Maintenance%20Mecanique/root/RebuiltRepo/image/96135.jpg';
//---------------- Gearbox ----------------// End


//------------------------------------------   PARTS  ---------------------------------------------//

//----0822125003(cyl)----// 
let cyl_ave01_sparePart = new Part(123, 'Spare part kit - standard');
cyl_ave01_sparePart.factoryId = 'R413000903';
cyl_ave01_sparePart.description = 'Sur réquisition';

cyl_ave01.addPart(cyl_ave01_sparePart);
//----0822125003(cyl)----// End

//----Atomiseur vieux----//
let atoVieux_airCap = new Part(14062, 'Air Cap');
atoVieux_airCap.factoryId = 'PAJB73328S';
atoVieux_airCap.sectionMaga = 'E1 E-1';
let atoVieux_fluidCap = new Part(15188, 'Fluid Cap');
atoVieux_fluidCap.factoryId = 'PFJB2850S';
atoVieux_fluidCap.sectionMaga = 'E1 E-1';
let atoVieux_gasket = new Part(15228, 'Gasket Teflon');
atoVieux_gasket.factoryId = '3612JBTEF';
atoVieux_gasket.sectionMaga = 'E1 E-2';
let atoVieux_packingGland = new Part(14904, 'Packing Gland');
atoVieux_packingGland.factoryId = 'CP4785-SS';
atoVieux_packingGland.sectionMaga = 'E2 D-7';
let atoVieux_packingSpring = new Part(15985, 'Packing Spring');
atoVieux_packingSpring.factoryId = 'CP4786-SS';
atoVieux_packingSpring.sectionMaga = 'E1 B-2';
let atoVieux_packingTeflon = new Part(14900, 'Packing Teflon');
atoVieux_packingTeflon.factoryId = 'CP4042-2-TEF';
atoVieux_packingTeflon.sectionMaga = 'E1 E-4';
let atoVieux_packingScrew = new Part(14896, 'Packing Screw');
atoVieux_packingScrew.factoryId = 'CP4024-SS';
atoVieux_packingScrew.sectionMaga = 'E1 E-4';
let atoVieux_pistonBody = new Part(14898, 'Piston Body');
atoVieux_pistonBody.factoryId = 'CP4027-SS';
atoVieux_pistonBody.sectionMaga = 'E1 E-4';
let atoVieux_aiguille = new Part(14060, 'Aiguille');
atoVieux_aiguille.factoryId = '56420035';
atoVieux_aiguille.sectionMaga = 'E2 D-7';
let atoVieux_washer = new Part(50324, 'Shakeproof Washer');
atoVieux_washer.factoryId = 'CP7778-410SS'
atoVieux_washer.sectionMaga = 'E1 E-1';
let atoVieux_capSpring = new Part(50080, 'Cap Spring');
atoVieux_capSpring.factoryId = 'CP4029-SS';
atoVieux_capSpring.sectionMaga = 'E2 E-2';

atomiseurcolle.addPart(atoVieux_airCap);
atomiseurcolle.addPart(atoVieux_fluidCap);
atomiseurcolle.addPart(atoVieux_gasket);
atomiseurcolle.addPart(atoVieux_packingGland);
atomiseurcolle.addPart(atoVieux_packingSpring);
atomiseurcolle.addPart(atoVieux_packingTeflon);
atomiseurcolle.addPart(atoVieux_packingScrew);
atomiseurcolle.addPart(atoVieux_pistonBody);
atomiseurcolle.addPart(atoVieux_aiguille);
atomiseurcolle.addPart(atoVieux_washer);
atomiseurcolle.addPart(atoVieux_capSpring);
//----Atomiseur vieux----// End



//----Atomiseur XA----//
let atomiseurLSX_sealKit = new Part(41017, 'Seal Kit');
atomiseurLSX_sealKit.factoryId = '39572SJB';
atomiseurLSX_sealKit.sectionMaga = 'E2 F-7';
let atomiseurLSX_needleTip = new Part(41018, 'Needle tip');
atomiseurLSX_needleTip.factoryId = '37333JB';
atomiseurLSX_needleTip.sectionMaga = 'E2 F-7';
let atomiseurLSX_gasket = new Part(15228, 'Gasket Teflon');
atomiseurLSX_gasket.factoryId = '3612JBTEF';
atomiseurLSX_gasket.sectionMaga = 'E1 E-2';

atomiseurLSX.addPart(atomiseurLSX_sealKit);
atomiseurLSX.addPart(atomiseurLSX_needleTip);
atomiseurLSX.addPart(atomiseurLSX_gasket);
//----Atomiseur XA----// End



//----block meule LSX----//
let bmLSX_base = new Part(19723, 'Assembly support');
bmLSX_base.factoryId = '340A05005';
bmLSX_base.sectionMaga = 'E4 E-2';
let bmLSX_strokeAjBlock = new Part(14044, 'Block ajustement stroke');
bmLSX_strokeAjBlock.factoryId = '323005009';
bmLSX_strokeAjBlock.sectionMaga = 'E2 C-7';
let bmLSX_stopStrokeBlock = new Part(14218, 'Block');
bmLSX_stopStrokeBlock.factoryId = '323005010';
bmLSX_stopStrokeBlock.sectionMaga = 'E2 C-4';
let bmLSX_linearBearing = new Part(14883, 'Brearing linéaire');
bmLSX_linearBearing.factoryId = 'LBBR 12';
bmLSX_linearBearing.sectionMaga = 'E2 F-8';
let bmLSX_spacer = new Part(17182, 'Spacer');
bmLSX_spacer.factoryId = '350A47020';
bmLSX_spacer.sectionMaga = 'E1 E-8';
let bmLSX_seal = new Part(14881, 'Dust seal');
bmLSX_seal.factoryId = '12X19X3';
bmLSX_seal.sectionMaga = 'E2 F-8';
let bmLSX_cyl = new Part(24220, 'Cylindre');
bmLSX_cyl.factoryId = 'CQ2B12-20D';
bmLSX_cyl.sectionMaga = 'E2 B-5';
let bmLSX_couplingCyl = new Part(16612, 'Coupling rod cylindre');
bmLSX_couplingCyl.factoryId = 'JB12-3-050 SMC';
bmLSX_couplingCyl.sectionMaga = 'E2  B-5';
let bmLSX_cylBracket = new Part(19722, 'Bracket pour cylindre');
bmLSX_cylBracket.factoryId = '350A47015';
bmLSX_cylBracket.sectionMaga = 'E4 E-2';
let bmLSX_shaftBracket = new Part(17076, 'Bracket pour rod linéaire');
bmLSX_shaftBracket.factoryId = '340A05007';
bmLSX_shaftBracket.sectionMaga = 'E1  E-8';
let bmLSX_couplingLovejoy = new Part(92619, 'Coupling style lovejoy');
bmLSX_couplingLovejoy.factoryId = '550147150970';
bmLSX_couplingLovejoy.sectionMaga = 'E2 B-4';
let bmLSX_lovejoy = new Part(15562, 'Lovejoy');
bmLSX_lovejoy.factoryId = '027B01001';
bmLSX_lovejoy.sectionMaga = 'E2 B-4';
let bmLSX_shaftGrindWheel = new Part(16958, 'Shaft');
bmLSX_shaftGrindWheel.factoryId = '323005002';
bmLSX_shaftGrindWheel.sectionMaga = 'E2 B-6';
let bmLSX_body = new Part(14280, 'Body');
bmLSX_body.factoryId = '027B01003';
bmLSX_body.sectionMaga = 'E3 B-4';
let bmLSX_motor = new Part(24380, 'Moteur pneumatique');
bmLSX_motor.factoryId = '1UP NRV-3A';
bmLSX_motor.sectionMaga = 'E2 A-9';

blocMeuleLSX.addPart(bmLSX_base);
blocMeuleLSX.addPart(bmLSX_strokeAjBlock);
blocMeuleLSX.addPart(bmLSX_stopStrokeBlock);
blocMeuleLSX.addPart(bmLSX_linearBearing);
blocMeuleLSX.addPart(bmLSX_spacer);
blocMeuleLSX.addPart(bmLSX_seal);
blocMeuleLSX.addPart(bmLSX_cyl);
blocMeuleLSX.addPart(bmLSX_couplingCyl);
blocMeuleLSX.addPart(bmLSX_cylBracket);
blocMeuleLSX.addPart(bmLSX_shaftBracket);
blocMeuleLSX.addPart(bmLSX_couplingLovejoy);
blocMeuleLSX.addPart(bmLSX_lovejoy);
blocMeuleLSX.addPart(bmLSX_shaftGrindWheel);
blocMeuleLSX.addPart(bmLSX_body);
blocMeuleLSX.addPart(bmLSX_motor);
//----block meule LSX----// End



//----Cylindre SMC #24235----//
let cyl_smc02_sealKit = new Part(24536, 'Seal kit');
cyl_smc02_sealKit.factoryId = 'MY1B63-PS';
cyl_smc02_sealKit.sectionMaga = 'E3 B-4';
let cyl_smc02_seal = new Part(24502, 'Seal');
cyl_smc02_seal.factoryId = 'MYB63-53-A7166';
cyl_smc02_seal.sectionMaga = 'M1 A-7';
let cyl_smc02_scrapper = new Part(24494, 'Scrapper');
cyl_smc02_scrapper.factoryId = 'MYB63-15AA7166';
cyl_smc02_scrapper.sectionMaga = 'M1  A-7';
let cyl_smc02_beltClamp = new Part(12676, 'Belt clamp');
cyl_smc02_beltClamp.factoryId = 'MYB63-31-A7166';
cyl_smc02_beltClamp.sectionMaga = 'M1  A-4';
let cyl_smc02_dustSeal = new Part(24248, 'Dust Seal');
cyl_smc02_dustSeal.factoryId = 'MYB63-16A-700';
cyl_smc02_dustSeal.sectionMaga = 'E5 MUR';

cyl_smc02.addPart(cyl_smc02_sealKit);
cyl_smc02.addPart(cyl_smc02_seal);
cyl_smc02.addPart(cyl_smc02_scrapper);
cyl_smc02.addPart(cyl_smc02_beltClamp);
cyl_smc02.addPart(cyl_smc02_dustSeal);
//----Cylindre SMC #24235----// End

//----gearbox_tigear01_02_03_04_05----//
let gearbox_tigear01_serviceKit = new Part(11012, 'Service Kit');
gearbox_tigear01_serviceKit.factoryId = '23ASSERVICEKIT';
gearbox_tigear01_serviceKit.sectionMaga = 'J2 B-1';
let gearbox_tigear01_inputSeal = new Part(18916, 'Input Seal');
gearbox_tigear01_inputSeal.factoryId = '334272';
gearbox_tigear01_inputSeal.sectionMaga = 'C1 C-6';
let gearbox_tigear01_ouputSeal = new Part(18902, 'Ouput Seal');
gearbox_tigear01_ouputSeal.factoryId = '334273';
gearbox_tigear01_ouputSeal.sectionMaga = 'C1 C-6';
let gearbox_tigear01_ouputSealH = new Part(124, 'Ouput Seal');
gearbox_tigear01_ouputSealH.factoryId = '334277';
gearbox_tigear01_ouputSealH.description = 'Sur réquisition';

gearbox_tigear01.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear02.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear03.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear04.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear05.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear01.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear02.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear03.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear04.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear05.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear01.addPart(gearbox_tigear01_ouputSeal);
gearbox_tigear02.addPart(gearbox_tigear01_ouputSeal);
gearbox_tigear03.addPart(gearbox_tigear01_ouputSeal);
gearbox_tigear04.addPart(gearbox_tigear01_ouputSeal);
gearbox_tigear05.addPart(gearbox_tigear01_ouputSealH);
//----gearbox_tigear01----// End

//----plyM10----//
let ply10_plyWheel = new Part(40147, 'Ply bonding wheel');
ply10_plyWheel.factoryId = '203724';
ply10_plyWheel.sectionMaga = 'F2 E-1';
let ply10_spacerLarge = new Part(17208, 'Spacer large');
ply10_spacerLarge.factoryId = '153022-2';
ply10_spacerLarge.sectionMaga = 'F2 E-3';
let ply10_spacerPetit = new Part(17214, 'Spacer mince');
ply10_spacerPetit.factoryId = '153022';
ply10_spacerPetit.sectionMaga = 'F2 E-4';
let ply10_oringCentre = new Part(15972, 'O-ring');
ply10_oringCentre.factoryId = 'BUN-70-0472';
ply10_oringCentre.sectionMaga = 'F2 E-5';
let ply10_flangeInternal = new Part(15164, 'Flange interne');
ply10_flangeInternal.factoryId = '153019'
ply10_flangeInternal.sectionMaga = 'F2 D-9';
let ply10_flangeExternal = new Part(15162, 'Flange externe');
ply10_flangeExternal.factoryId = '153020';
ply10_flangeExternal.sectionMaga = 'F2 A-6';
let ply10_spring = new Part(16550, 'Spring');
ply10_spring.factoryId = '23752288';
ply10_spring.sectionMaga = 'F2  E-6';
let ply10_pinPivot = new Part(16070, 'Pin pivot');
ply10_pinPivot.factoryId = '142317';
ply10_pinPivot.sectionMaga = 'F1 C-5';
let ply10_shaft = new Part(16068, 'Shaft');
ply10_shaft.factoryId = '142315';
ply10_shaft.sectionMaga = 'F1 C-5';


plyM10.addPart(ply10_plyWheel);
plyM10.addPart(ply10_spacerLarge);
plyM10.addPart(ply10_spacerPetit);
plyM10.addPart(ply10_oringCentre);
plyM10.addPart(ply10_flangeInternal);
plyM10.addPart(ply10_flangeExternal);
plyM10.addPart(ply10_spring);
plyM10.addPart(ply10_pinPivot);
plyM10.addPart(ply10_shaft);
//----plyM10----// End



//----plyM15----//
let ply15_body = new Part(30158, 'Body');
ply15_body.factoryId = 'NAQ 130A 01';
ply15_body.sectionMaga = 'P1 B-5';
let ply15_supportBody = new Part(15100, 'Support body');
ply15_supportBody.factoryId = 'NAQ 130A 02';
ply15_supportBody.sectionMaga = 'P1 B-4';
let ply15_supportWheel = new Part(17444, 'Support wheel');
ply15_supportWheel.factoryId = 'NAQ 130C 03';
ply15_supportWheel.sectionMaga = 'P1 B-3';
let ply15_shaftWheel = new Part(16034, 'Shaft');
ply15_shaftWheel.factoryId = 'NAQ 130C 07';
ply15_shaftWheel.sectionMaga = 'P1 D-2';
let ply15_plyWheel = new Part(16171, 'Ply bonding wheel');
ply15_plyWheel.factoryId = '11600NAQ1300820';
ply15_plyWheel.sectionMaga = 'P1 B-2';
let ply15_flangeWheel = new Part(15176, 'Flange wheel');
ply15_flangeWheel.factoryId = 'NAQ 130B 09';
ply15_flangeWheel.sectionMaga = 'P1 C-1';
let ply15_supportPiston = new Part(25431, 'Support piston');
ply15_supportPiston.factoryId = '';
ply15_supportPiston.sectionMaga = '';
let ply15_rubberPiston = new Part(24300, 'Rubber piston');
ply15_rubberPiston.factoryId = 'I16PCPRT18010';
ply15_rubberPiston.sectionMaga = 'E4 B-3';
let ply15_spacer1 = new Part(16714, 'Petit spacer');
ply15_spacer1.factoryId = 'D.18 X D.12 X 0.3';
ply15_spacer1.sectionMaga = 'P1 D-2';
let ply15_spacer2 = new Part(16716, 'Large spacer');
ply15_spacer2.factoryId = 'D.90 XD.70 X 0.3';
ply15_spacer2.sectionMaga = 'P1 D-2';
let ply15_bushing = new Part(25054, 'Bushing');
ply15_bushing.factoryId = 'D.13 X D.10 X 10';
ply15_bushing.sectionMaga = 'P1 F-2';
let Bearing_6001_2rs = new Part(18128, 'Bearing');
Bearing_6001_2rs.factoryId = '6001-2RS';
Bearing_6001_2rs.sectionMaga = 'B1 E-5';

plyM15.addPart(ply15_body);
plyM15.addPart(ply15_supportBody);
plyM15.addPart(ply15_supportWheel);
plyM15.addPart(ply15_shaftWheel);
plyM15.addPart(ply15_plyWheel);
plyM15.addPart(ply15_flangeWheel);
plyM15.addPart(ply15_supportPiston);
plyM15.addPart(ply15_rubberPiston);
plyM15.addPart(ply15_spacer1);
plyM15.addPart(ply15_spacer2);
plyM15.addPart(ply15_bushing);
plyM15.addPart(Bearing_6001_2rs);
//----plyM15----// End

//----pompeDia----//
let pompeDia_serviceKit = new Part(15190, 'Service Kit');
pompeDia_serviceKit.factoryId = '637140-4B';
pompeDia_serviceKit.sectionMaga = 'M1 E-2';

pompeDia.addPart(pompeDia_serviceKit);
//----pompeDia----// End

//----pusher rotatronique----//
let pusherRota_shaft = new Part(16988, 'Shaft');
pusherRota_shaft.factoryId = 'PS11-12-0807';
pusherRota_shaft.sectionMaga = 'H3 D-1';
let pusherRota_bloc = new Part(14226, 'Bloc');
pusherRota_bloc.factoryId = 'PS12-12-0807';
pusherRota_bloc.sectionMaga = 'H3 D-1';
let pusherRota_maille = new Part(95180, 'Maille');
pusherRota_maille.factoryId = '40-2 C/L ATT WA2';
pusherRota_maille.sectionMaga = 'H3 D-1';
let pusherRota_base = new Part(14162, 'Base');
pusherRota_base.factoryId = 'PS24-12-1107';
pusherRota_base.sectionMaga = 'H2 D-8';
let pusherRota_brasSupport = new Part(14312, 'Bras support');
pusherRota_brasSupport.factoryId = 'PS22-12-1107';
pusherRota_brasSupport.sectionMaga = 'H2 D-7';
let pusherRota_pusher = new Part(19647, 'Pusher');
pusherRota_pusher.factoryId = 'N/A';
pusherRota_pusher.sectionMaga = 'H2 C-4';
let pusherRota_bearing01 = new Part(18044, 'Bearing');
pusherRota_bearing01.factoryId = 'R4-2RS';
pusherRota_bearing01.sectionMaga = 'B1 C-6';

pusherRota.addPart(pusherRota_shaft);
pusherRota.addPart(pusherRota_bloc);
pusherRota.addPart(pusherRota_maille);
pusherRota.addPart(pusherRota_base);
pusherRota.addPart(pusherRota_brasSupport);
pusherRota.addPart(pusherRota_pusher);
pusherRota.addPart(pusherRota_bearing01);
//----pusher rotatronique----// End



//------------------------------------------   Make list  ---------------------------------------------//

const rebuiltList = new RebuiltList();


rebuiltList.addRebuilt(atomiseurcolle);
rebuiltList.addRebuilt(atomiseurLSX);
rebuiltList.addRebuilt(atomiseurForte);
rebuiltList.addRebuilt(blocMeuleLSX);
rebuiltList.addRebuilt(blocMeuleKuosIn);
rebuiltList.addRebuilt(blocMeuleKuosEx);
rebuiltList.addRebuilt(blocMeuleM10In);
rebuiltList.addRebuilt(blocMeuleM10Ex);
rebuiltList.addRebuilt(blocMeuleBretting);
rebuiltList.addRebuilt(carriageMandrelIR505);
rebuiltList.addRebuilt(chaineLanceurLSX);
rebuiltList.addRebuilt(clutchTGC20);
rebuiltList.addRebuilt(clutchTGC60);
rebuiltList.addRebuilt(hubLameKuos);
rebuiltList.addRebuilt(plyIR505);
rebuiltList.addRebuilt(plyM10);
rebuiltList.addRebuilt(plyM11);
rebuiltList.addRebuilt(plyM15);
rebuiltList.addRebuilt(plyM16);
rebuiltList.addRebuilt(plyM22);
rebuiltList.addRebuilt(pompeDia);
rebuiltList.addRebuilt(pusherRota);
rebuiltList.addRebuilt(rabbitIR505);
rebuiltList.addRebuilt(relaxGripper);
rebuiltList.addRebuilt(shaftBallouneEmb);
rebuiltList.addRebuilt(slitterM12);
rebuiltList.addRebuilt(slitterBretting);
rebuiltList.addRebuilt(cyl_ave01);
rebuiltList.addRebuilt(cyl_bos01);
rebuiltList.addRebuilt(cyl_fes01);
rebuiltList.addRebuilt(cyl_fes02);
rebuiltList.addRebuilt(cyl_num01);
rebuiltList.addRebuilt(cyl_num02);
rebuiltList.addRebuilt(cyl_pne01);
rebuiltList.addRebuilt(cyl_pne02);
rebuiltList.addRebuilt(cyl_sco01);
rebuiltList.addRebuilt(cyl_sco02);
rebuiltList.addRebuilt(cyl_she01);
rebuiltList.addRebuilt(cyl_smc01);
rebuiltList.addRebuilt(cyl_smc02);
rebuiltList.addRebuilt(cyl_smc03);
rebuiltList.addRebuilt(cyl_smc04);
rebuiltList.addRebuilt(cyl_smc05);
rebuiltList.addRebuilt(cyl_NaN01);
rebuiltList.addRebuilt(gearbox_tigear01);
rebuiltList.addRebuilt(gearbox_tigear02);
rebuiltList.addRebuilt(gearbox_tigear03);
rebuiltList.addRebuilt(gearbox_tigear04);
rebuiltList.addRebuilt(gearbox_tigear05);


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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // inclusive