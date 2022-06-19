//--------------------------------------   REBUILTS  --------------------------------------------//


let atomiseurcolle = new Rebuilt(14111, 'Atomiseur 1/4JAU');
atomiseurcolle.factoryId = '1/4JAU-SS';
atomiseurcolle.sectionMaga = 'E2 C-8';
atomiseurcolle.rebuiltClass = 'Atomiseur';
atomiseurcolle.documentations = [
    ['Spare Parts', 'rebuiltDoc/PL14JAU-SS-&14JAUCO-SS.pdf']
];
atomiseurcolle.img = 'image/14111.jpg';

let atomiseurLSX = new Rebuilt(14357, 'Atomiseur 1/4XA');
atomiseurLSX.factoryId = '1/4XA02SSBRJBSF050F';
atomiseurLSX.sectionMaga = 'E2 E-4';
atomiseurLSX.rebuiltClass = 'Atomiseur';
atomiseurLSX.company = 'Bete Fog Nozzle inc.'
atomiseurLSX.documentations = [
    ['Spare Parts', 'rebuiltDoc/XAspraygun.pdf']
];
atomiseurLSX.img = 'image/14357.jpg';

let atomiseurForte = new Rebuilt(14359, 'Atomiseur 1/8VAU');
atomiseurForte.factoryId = 'PL 1/8VAU-SS';
atomiseurForte.sectionMaga = 'Q3 A-1';
atomiseurForte.rebuiltClass = 'Atomiseur';
atomiseurForte.company = 'Spraying System Co.';
atomiseurForte.documentations = [
    ['Spare Parts', '//ad.cascades.com/data/CTG-375 Granby/Maintenance Mecanique/016- Ligne 16/016-016 (Log saw)/4- Spare Parts/spraying systems.pdf']
];
atomiseurForte.img = 'image/14359.jpg';

let blocMeuleLSX = new Rebuilt(98865, 'Bloc meule LSX');
blocMeuleLSX.sectionMaga = 'E2 E-8';
blocMeuleLSX.rebuiltClass = 'Aiguisage';
blocMeuleLSX.img = 'image/98865.jpg';

let blocMeuleKuosIn = new Rebuilt(19693, 'Bloc meule kuos interne');
blocMeuleKuosIn.sectionMaga = 'D1 E-8';
blocMeuleKuosIn.rebuiltClass = 'Aiguisage';
blocMeuleKuosIn.img = 'image/19693.jpg';
blocMeuleKuosIn.documentations = [
    ['Exploded View', 'image/blocMeuleKuosInExploded.png']
];


let blocMeuleKuosEx = new Rebuilt(106, 'Bloc meule kuos externe');
blocMeuleKuosEx.rebuiltClass = 'Aiguisage';

let blocMeuleM10In = new Rebuilt(16328, 'Pulsar Internal Grindstone');
blocMeuleM10In.factoryId = '224379';
blocMeuleM10In.sectionMaga = 'F2 D-8';
blocMeuleM10In.rebuiltClass = 'Aiguisage';
blocMeuleM10In.img = 'image/16328.jpg';
blocMeuleM10In.documentations = [
    ['Exploded View', 'rebuiltDoc/pulsarInt.pdf']
];

let blocMeuleM10Ex = new Rebuilt(16326, 'Pulsar External Grindstone');
blocMeuleM10Ex.factoryId = '224381';
blocMeuleM10Ex.sectionMaga = 'F2 C-3';
blocMeuleM10Ex.rebuiltClass = 'Aiguisage';
blocMeuleM10Ex.img = 'image/16326.jpg';
blocMeuleM10Ex.documentations = [
    ['Exploded View', 'rebuiltDoc/pulsarExt.pdf']
];

let blocMeuleBretting = new Rebuilt(109, 'Bloc meule Bretting');
blocMeuleBretting.rebuiltClass = 'Aiguisage';
blocMeuleBretting.documentations = [
    ['Spare Parts', 'rebuiltDoc/bladeSharpenerBrettingLS.pdf']
];

let carriageMandrelIR505Droit = new Rebuilt(14685, 'Carriage mandrel IR505 Droit');
carriageMandrelIR505Droit.factoryId = '243030002';
carriageMandrelIR505Droit.sectionMaga = 'E3 D-2';
carriageMandrelIR505Droit.rebuiltClass = 'Assembly';
carriageMandrelIR505Droit.img = 'image/14685.jpg';

let chaineLanceurLSX = new Rebuilt(20006, 'Chaine lanceur LSX');
chaineLanceurLSX.sectionMaga = 'E1 C-8';
chaineLanceurLSX.rebuiltClass = 'Assembly';
chaineLanceurLSX.img = 'image/20006.jpg';

let clutchTGC60 = new Rebuilt(14756, 'Clutch TGC60');
clutchTGC60.factoryId = 'TGC60';
clutchTGC60.sectionMaga = 'R2 E-1';
clutchTGC60.company = 'Browning';
clutchTGC60.documentations = [
    ['Operation and Maintenance Instructions', 'https://cdnmedia.regalbeloit.com/images/d120001/medias/docus/4402/InstallationManuals_Form_8322E.pdf']
];
clutchTGC60.img = 'image/14758.jpg';

let clutchTGC20 = new Rebuilt(14758, 'Clutch TGC20');
clutchTGC20.factoryId = 'TGC20'
clutchTGC20.company = 'Browning';
clutchTGC20.sectionMaga = 'R2 E-2';
clutchTGC20.documentations = [
    ['Operation and Maintenance Instructions', 'https://cdnmedia.regalbeloit.com/images/d120001/medias/docus/4402/InstallationManuals_Form_8322E.pdf']
];
clutchTGC20.img = 'image/14756.jpg';

let clutchTGC200 = new Rebuilt(17574, 'Clutch TGC200');
clutchTGC200.factoryId = 'TGC200'
clutchTGC200.company = 'Browning';
clutchTGC200.sectionMaga = 'R2 F-2';
clutchTGC200.documentations = [
    ['Operation and Maintenance Instructions', 'https://cdnmedia.regalbeloit.com/images/d120001/medias/docus/4402/InstallationManuals_Form_8322E.pdf']
];
clutchTGC200.img = 'image/17574.jpg';

let hubLameKuos = new Rebuilt(12779, "Hub lame Kuo's Assy");
hubLameKuos.sectionMaga = 'D1 D-5';
hubLameKuos.rebuiltClass = 'Assembly';
hubLameKuos.documentations = [
    ['Exploded View', 'image/hubKuosAssyImg01.png'],
    ['7216 BEP Technical Document' , 'rebuiltDoc/7216BEPDOC.pdf']
];
hubLameKuos.img = 'image/12779.jpg';

let plyIR505 = new Rebuilt(113, 'Plybonder IR505');

let plyM10 = new Rebuilt(114, 'Plybonder M10');
plyM10.rebuiltClass = 'Plybonder';
plyM10.img = 'image/114.jpg';

let plyM11 = new Rebuilt(30034, 'Plybonder M11 Double');
plyM11.rebuiltClass = 'Plybonder';
plyM11.sectionMaga = 'G2 B-3'
plyM11.img = 'image/30034.jpg';

let plyM15 = new Rebuilt(116, 'Plybonder M15');
plyM15.factoryId = 'NAQ_130C_00';
plyM15.company = 'Delsar'
plyM15.rebuiltClass = 'Plybonder';
plyM15.documentations = [
    ['Spare Parts', 'rebuiltDoc/NAQ_130C_00_ESPLOSO.pdf']
];
plyM15.img = 'image/116.jpg';

let plyM16 = new Rebuilt(117, 'Plybonder M16');
plyM16.rebuiltClass = 'Plybonder';
plyM16.documentations = [
    ['Spare Parts', 'P:/CTG-375%20Granby/Maintenance%20Mecanique/016- Ligne 16/016-007 (Rewinder)/1- Plans/4- Spare Parts/M16 Plybonder.pdf']
];
plyM16.img = 'image/117.jpg';

let plyM22 = new Rebuilt(118, 'Plybonder M22');
plyM22.rebuiltClass = 'Plybonder';
plyM22.img = 'image/118.jpg'

let pompeDia = new Rebuilt(24399, 'Pompe Diaphragme');
pompeDia.factoryId = '66605J-34B';
pompeDia.sectionMaga = 'M2 H-1';
pompeDia.rebuiltClass = 'Pompe';
pompeDia.company = 'Aro';
pompeDia.documentations = [
    ['Manual', 'https://d1pkofokfruj4.cloudfront.net/media/upload/resource/j/ARO-2019-66605X-1-2-Inch-Classic-Non-Metallic-Diaphragm-Pump-Manual-Fluid-Section.pdf']
];
pompeDia.img = 'image/10019.webp';

let pusherRota = new Rebuilt(14161, 'Pusher rotatonique assy.');
pusherRota.sectionMaga = 'H2 D-9';
pusherRota.rebuiltClass = 'Assembly';

let rabbitIR505 = new Rebuilt(14026, 'Rabbit/Carriage');
rabbitIR505.factoryId = '243045008';
rabbitIR505.sectionMaga = 'E3 D-3';
rabbitIR505.rebuiltClass = 'Assembly';
rabbitIR505.img = 'image/14026.jpg';

let relaxGripper = new Rebuilt(40191, 'Relax Gripper');
relaxGripper.factoryId = 'B20192005';
relaxGripper.sectionMaga = 'I2 C-8';
relaxGripper.rebuiltClass = 'Assembly';
relaxGripper.img = 'image/40191.jpg';
relaxGripper.documentations = [
    ['Exploded View', 'rebuiltDoc/relaxGrip.pdf']
];

let shaftBallouneEmb = new Rebuilt(120, 'Shaft balloune');

let slitterM12 = new Rebuilt(121, 'Slitter M12');
slitterM12.rebuiltClass = 'Cutting';
slitterM12.img = 'image/121.jpg';
slitterM12.documentations = [
    ['Expoded View', 'image/slitterM12Expl.png']
];

let slitterBretting = new Rebuilt(13224, 'Slitter Class I');
slitterBretting.factoryId = 'Slitter Class I';
slitterBretting.sectionMaga = 'LL2 D-8';
slitterBretting.rebuiltClass = 'Cutting';
slitterBretting.company = 'Tidland';
slitterBretting.documentations = [
    ['Installation, Operation and Maintenance', 'rebuiltDoc/Tidland_PSAutoKnifeholder_Manual_1.pdf']
];
slitterBretting.img = 'image/13224.jpg';




//---------------- Cylindre ----------------//
let cyl_ave01 = new Rebuilt(40112, '0822125003');
cyl_ave01.factoryId = '0822125003';
cyl_ave01.sectionMaga = 'F3 F-5';
cyl_ave01.rebuiltClass = 'Cylindre';
cyl_ave01.company = 'Aventics';
cyl_ave01.img = 'image/40112.jpg';

let cyl_ave02 = new Rebuilt(21720, 'S4AL-45A2V-BAA0');
cyl_ave02.factoryId = 'S4AL-45A2V-BAA0';
cyl_ave02.sectionMaga = 'C4 PLANC';
cyl_ave02.rebuiltClass = 'Cylindre';
cyl_ave02.company = 'Aventics';
cyl_ave02.img = 'image/21720.jpg';

let cyl_bos01 = new Rebuilt(24192, '0.822.232.003');
cyl_bos01.factoryId = '0822232003';
cyl_bos01.sectionMaga = 'F3 D-4';
cyl_bos01.rebuiltClass = 'Cylindre';
cyl_bos01.company = 'Bosch';
cyl_bos01.documentations = [
    ['Configuration documentation', 'P:/CTG-375%20Granby/Maintenance%20Mecanique/html/Source/RebuiltRepo/rebuiltDoc/0822232003_MNI-DA-16-0050-D-01-01-1-00-000-00_22393861.pdf']
]
cyl_bos01.img = 'image/24192.jpg';

let cyl_fes01 = new Rebuilt(11275, 'DGC-32-600-GF-PPV-A');
cyl_fes01.factoryId = 'DGC-32-600-GF-PPV-A';
cyl_fes01.sectionMaga = 'G4 A-1';
cyl_fes01.rebuiltClass = 'Cylindre';
cyl_fes01.company = 'Festo';
cyl_fes01.img = 'image/11275.jpg';
cyl_fes01.documentations = [
    ['Linear drives DGC', 'https://www.festo.com/media/pim/014/D15000100122014.PDF']
]

let cyl_fes02 = new Rebuilt(28306, 'DSBC-40-200-PPVA-N3');
cyl_fes02.factoryId = 'DSBC-40-200-PPVA-N3';
cyl_fes02.sectionMaga = 'I4 B-9';
cyl_fes02.rebuiltClass = 'Cylindre';
cyl_fes02.company = 'Festo';
cyl_fes02.img = 'image/28306.jpg';
cyl_fes02.documentations = [
    ['Standards-based cylinders DSBC', 'https://www.festo.com/media/pim/133/D15000100122133.PDF']
];

let cyl_num01 = new Rebuilt(92928, 'P2AL-0512D-B2AO');
cyl_num01.factoryId = 'P2AL-0512D-B2AO';
cyl_num01.sectionMaga = 'C2 D-3';
cyl_num01.rebuiltClass = 'Cylindre';
cyl_num01.company = 'Numatics';
cyl_num01.img = 'image/92928.jpg';

let cyl_num02 = new Rebuilt(50133, 'F1AL-30A7J-C2AO');
cyl_num02.factoryId = 'F1AL-30A7J-C2AO';
cyl_num02.sectionMaga = 'D3 D-1';
cyl_num02.rebuiltClass = 'Cylindre';
cyl_num02.company = 'Numatics';
cyl_num02.img = 'image/50133.jpg';

let cyl_pne01 = new Rebuilt(24218, '1309.200.0800.01.SP');
cyl_pne01.factoryId = '1309.200.0800.01.SP';
cyl_pne01.rebuiltClass = 'Cylindre';
cyl_pne01.sectionMaga = 'C2 D-4';
cyl_pne01.company = 'Pneumax';
cyl_pne01.img = 'image/24218.jpg';

let cyl_pne02 = new Rebuilt(20205, '1348.50.80.01');
cyl_pne02.factoryId = '1348.50.80.01';
cyl_pne02.sectionMaga = 'F3 F-2';
cyl_pne02.rebuiltClass = 'Cylindre';
cyl_pne02.company = 'Pneumax';
cyl_pne02.documentations = [
    ['Série 1348/1350', 'https://manufacturescorpion.com/uploads/documents/1348.pdf']
]
cyl_pne02.img = 'image/20205.jpg';

let cyl_sco01 = new Rebuilt(92889, '1319.32.350.01');
cyl_sco01.factoryId = '1319.32.350.01';
cyl_sco01.sectionMaga = 'C3 E-7';
cyl_sco01.rebuiltClass = 'Cylindre';
cyl_sco01.company = 'Scorpion';
cyl_sco01.documentations = [
    ['Série 1319/1321', 'https://manufacturescorpion.com/uploads/documents/1319.pdf'],
    ['Series 1300 Accessories and fixing device', 'https://manufacturescorpion.com/uploads/documents/EN_fixation_ISO.pdf']
];
cyl_sco01.img = 'image/92889.jpg';

let cyl_sco02 = new Rebuilt(92898, '1260.32.15.SP');
cyl_sco02.factoryId = '1260.32.15.SP';
cyl_sco02.sectionMaga = 'G4 D-8';
cyl_sco02.rebuiltClass = 'Cylindre';
cyl_sco02.company = 'Scorpion';
cyl_sco02.documentations = [
    ['Series 1200', 'https://manufacturescorpion.com/uploads/documents/1260_2020.pdf']
];
cyl_sco02.img = 'image/92898.jpg';

let cyl_sco03 = new Rebuilt(24200, '1319.100.300.1');
cyl_sco03.factoryId = '1319.100.300.1';
cyl_sco03.sectionMaga = 'P1 G-5';
cyl_sco03.rebuiltClass = 'Cylindre';
cyl_sco03.company = 'Scorpion';
cyl_sco03.documentations = [
    ['Série 1319/1321', 'https://manufacturescorpion.com/uploads/documents/1319.pdf'],
    ['Series 1300 Accessories and fixing device', 'https://manufacturescorpion.com/uploads/documents/EN_fixation_ISO.pdf']
];
cyl_sco03.img = 'image/24200.jpg';

let cyl_smc01 = new Rebuilt(20014, 'C96SB32-50');
cyl_smc01.factoryId = 'C96SB32-50';
cyl_smc01.sectionMaga = 'E2 E-2';
cyl_smc01.rebuiltClass = 'Cylindre';
cyl_smc01.company = 'SMC';
cyl_smc01.documentations = [
    ['Series C96', 'https://www.smcpneumatics.com/pdfs/C96.pdf']
];
cyl_smc01.img = 'image/20014.jpg';

let cyl_smc02 = new Rebuilt(24235, 'MY1B63G-700');
cyl_smc02.factoryId = 'MY1B63G-700';
cyl_smc02.rebuiltClass = 'Cylindre';
cyl_smc02.sectionMaga = 'E5 A-8';
cyl_smc02.company = 'SMC';
cyl_smc02.documentations = [
    ['Series MY1', 'https://www.smcpneumatics.com/pdfs/MY1.pdf']
];
cyl_smc02.img = 'image/24235.jpg';

let cyl_smc03 = new Rebuilt(24202, 'CQ2KB32-50D');
cyl_smc03.factoryId = 'CQ2KB32-50D';
cyl_smc03.sectionMaga = 'E3 C-2';
cyl_smc03.rebuiltClass = 'Cylindre';
cyl_smc03.company = 'SMC';
cyl_smc03.documentations = [
    ['CQ2 Compact Cylinder', 'https://www.smcpneumatics.com/smcdigitalcat3/docs/actuator/compact/cq2-0909.pdf']
];
cyl_smc03.img = 'image/24202.jpg';

let cyl_smc04 = new Rebuilt(24236, 'CQ2B50TF-20SZ');
cyl_smc04.factoryId = 'CQ2B50TF-20SZ';
cyl_smc04.sectionMaga = 'M1 A-4';
cyl_smc04.rebuiltClass = 'Cylindre';
cyl_smc04.company = 'SMC';
cyl_smc04.documentations = [
    ['CQ2 Compact Cylinder Auto Switch Mounting Groove', 'https://www.smcpneumatics.com/pdfs/CQ2_Z.pdf']
];
cyl_smc04.img = 'image/24236.jpg';

let cyl_smc05 = new Rebuilt(24126, 'CQ2KB32-30D');
cyl_smc05.factoryId = 'CQ2KB32-30D';
cyl_smc05.sectionMaga = 'M1 A-6';
cyl_smc05.rebuiltClass = 'Cylindre';
cyl_smc05.company = 'SMC';
cyl_smc05.documentations = [
    ['CQ2 Compact Cylinder Auto Switch Mounting Groove', 'https://www.smcpneumatics.com/pdfs/CQ2_Z.pdf']
];
cyl_smc05.img = 'image/24126.jpg';

let cyl_she01 = new Rebuilt(15999, '4MAC11');
cyl_she01.factoryId = '4MAC11';
cyl_she01.sectionMaga = 'F1 F-1';
cyl_she01.rebuiltClass = 'Cylindre';
cyl_she01.company = 'Sheffer';
cyl_she01.documentations = [
    ['MA Series Medium Duty', 'https://sheffercorp.com/wp-content/uploads/2017/08/ma-series-medium-duty.pdf']
]
cyl_she01.img = 'image/15999.jpg';
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
gearbox_tigear01.img = 'image/14990.jpg';

let gearbox_tigear02 = new Rebuilt(16425, 'Dodge Tigear 2 10/1 Left');
gearbox_tigear02.factoryId = '23A10L14';
gearbox_tigear02.sectionMaga = 'L3 D-3';
gearbox_tigear02.rebuiltClass = 'Gearbox';
gearbox_tigear02.company = 'Dodge';
gearbox_tigear02.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear02.img = 'image/16425.jpg';

let gearbox_tigear03 = new Rebuilt(16426, 'Dodge Tigear 2 10/1 Right');
gearbox_tigear03.factoryId = '23A10R14';
gearbox_tigear03.sectionMaga = 'L4 C-1';
gearbox_tigear03.rebuiltClass = 'Gearbox';
gearbox_tigear03.company = 'Dodge';
gearbox_tigear03.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear03.img = 'image/16426.jpg';

let gearbox_tigear04 = new Rebuilt(16428, 'Dodge Tigear 2 15/1 Right');
gearbox_tigear04.factoryId = '23A15R14';
gearbox_tigear04.sectionMaga = 'L4 A-2';
gearbox_tigear04.rebuiltClass = 'Gearbox';
gearbox_tigear04.company = 'Dodge';
gearbox_tigear04.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear04.img = 'image/16426.jpg';

let gearbox_tigear05 = new Rebuilt(96135, 'Dodge Tigear 2 20/1 Hollow');
gearbox_tigear05.factoryId = '20Q20H56';
gearbox_tigear05.sectionMaga = 'KK4 D-4';
gearbox_tigear05.rebuiltClass = 'Gearbox';
gearbox_tigear05.company = 'Dodge';
gearbox_tigear05.documentations = [
    ['Tigear-2 gearing Engineering catalog', 'https://search.abb.com/library/Download.aspx?DocumentID=9AKK107393&LanguageCode=en&DocumentPartId=&Action=Launch']
];
gearbox_tigear05.img = 'image/96135.jpg';
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



//----Atomiseur M16----//
let atomiseurForte_needle = new Part(15870, 'Needle Assembly');
atomiseurForte_needle.factoryId = '28222-002-SS';
atomiseurForte_needle.sectionMaga = 'Q2 D-8';
let atomiseurForte_fluidCap = new Part(15185, 'Fluid Cap');
atomiseurForte_fluidCap.factoryId = 'VF-1650-SS';
atomiseurForte_fluidCap.sectionMaga = 'Q2 D-8';
let atomiseurForte_oRing = new Part(15984, 'O-Ring');
atomiseurForte_oRing.factoryId = 'CP29578-001-VITEF'
atomiseurForte_oRing.sectionMaga = 'Q2 F-6';

atomiseurForte.addPart(atomiseurForte_needle);
atomiseurForte.addPart(atomiseurForte_fluidCap);
atomiseurForte.addPart(atomiseurForte_oRing);
//----Atomiseur M16----// End



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
let bmLSX_shaft1 = new Part(17018, 'Shaft Linéaire');
bmLSX_shaft1.factoryId = 'Shaft 10mm x 150mm';
bmLSX_shaft1.sectionMaga = 'E1 B-14';

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
blocMeuleLSX.addPart(bmLSX_shaft1);
//----block meule LSX----// End


//----blocMeuleBretting----//
let blocMeuleBretting_cyl = new Part(13264, 'Cylindre');
blocMeuleBretting_cyl.factoryId = 'BHH118 1/8';
blocMeuleBretting_cyl.sectionMaga = 'LL2 D-3';
let blocMeuleBretting_bearin01 = new Part(65515, 'Bearing');
blocMeuleBretting_bearin01.factoryId = '5201A-2RS';
blocMeuleBretting_bearin01.description = 'Sur réquisition';
let blocMeuleBretting_wheelGrd = new Part(13259, 'Wheel-Grinding');
blocMeuleBretting_wheelGrd.factoryId = 'CBN4-180-75V';
blocMeuleBretting_wheelGrd.sectionMaga = 'L2 B-2';

blocMeuleBretting.addPart(blocMeuleBretting_cyl);
blocMeuleBretting.addPart(blocMeuleBretting_bearin01);
blocMeuleBretting.addPart(blocMeuleBretting_wheelGrd);
//----blocMeuleBretting----// End


//----blocMeuleKuosIn----//
let blocMeuleKuosIn_oilSeal01 = new Part(30124, 'Oil Seal');
blocMeuleKuosIn_oilSeal01.factoryId = '60x62x3';
blocMeuleKuosIn_oilSeal01.sectionMaga = 'E4 E-4';
let blocMeuleKuosIn_oilSeal02 = new Part(30125, 'Oil Seal');
blocMeuleKuosIn_oilSeal02.factoryId = 'P-52-63x51.6x5.7';
blocMeuleKuosIn_oilSeal02.sectionMaga = 'E4 E-4';
let blocMeuleKuosIn_spring = new Part(30126, 'Spring');
blocMeuleKuosIn_spring.factoryId = '61x52x65Lx4.5';
blocMeuleKuosIn_spring.sectionMaga = 'E4 E-4';
let blocMeuleKuosIn_threadedRod = new Part(30121, 'Threaded Rod');
blocMeuleKuosIn_threadedRod.factoryId = 'Threaded Rod';
blocMeuleKuosIn_threadedRod.sectionMaga = 'E4 E-5';
let blocMeuleKuosIn_nut = new Part(30120, 'Nut');
blocMeuleKuosIn_nut.factoryId = 'Nut';
blocMeuleKuosIn_nut.sectionMaga = 'E4 E-4';
let blocMeuleKuosIn_bearing = new Part(18002, 'Bearing');
blocMeuleKuosIn_bearing.factoryId = '6002 zz';
blocMeuleKuosIn_bearing.sectionMaga = 'B1 E-4';
let blocMeuleKuosIn_bushing01 = new Part(14446, 'Bushing');
blocMeuleKuosIn_bushing01.factoryId = 'MB404412 TH';
blocMeuleKuosIn_bushing01.sectionMaga = 'E1 B-12';



blocMeuleKuosIn.addPart(blocMeuleKuosIn_oilSeal01);
blocMeuleKuosIn.addPart(blocMeuleKuosIn_oilSeal02);
blocMeuleKuosIn.addPart(blocMeuleKuosIn_spring);
blocMeuleKuosIn.addPart(blocMeuleKuosIn_threadedRod);
blocMeuleKuosIn.addPart(blocMeuleKuosIn_nut);
blocMeuleKuosIn.addPart(blocMeuleKuosIn_bearing);
blocMeuleKuosIn.addPart(blocMeuleKuosIn_bushing01);
//----blocMeuleKuosIn----// End


//----blocMeuleM10 In&Ext----//
let blocMeuleM10In_support = new Part(17412, 'Support');
blocMeuleM10In_support.factoryId = '223832';
blocMeuleM10In_support.sectionMaga = 'F2 D-7';
let blocMeuleM10In_wheelGrind = new Part(17698, 'Grinding Wheel');
blocMeuleM10In_wheelGrind.factoryId = '223850';
blocMeuleM10In_wheelGrind.sectionMaga = 'F3';
let blocMeuleM10In_stopRingNut = new Part(17388, 'Stop Ring Nut');
blocMeuleM10In_stopRingNut.factoryId = '223872';
blocMeuleM10In_stopRingNut.sectionMaga = 'F2 C-5';
let blocMeuleM10In_pinGasket = new Part(96164, 'Pin Gasket');
blocMeuleM10In_pinGasket.factoryId = '223875';
blocMeuleM10In_pinGasket.description = 'Sur réquisition';
let blocMeuleM10In_bushing1 = new Part(91450, 'Bushing');
blocMeuleM10In_bushing1.factoryId = '224385';
blocMeuleM10In_bushing1.sectionMaga = 'F2 A-7';
let blocMeuleM10In_bushing2 = new Part(14472, 'Bushing');
blocMeuleM10In_bushing2.factoryId = '21171633';
blocMeuleM10In_bushing2.sectionMaga = 'F1 C-6';
let blocMeuleM10In_bushing3 = new Part(14474, 'Bushing');
blocMeuleM10In_bushing3.factoryId = '21171696';
blocMeuleM10In_bushing3.sectionMaga = 'F1 C-6';
let blocMeuleM10In_ring1 = new Part(97041, 'Ring');
blocMeuleM10In_ring1.factoryId = '224384';
blocMeuleM10In_ring1.description = 'Sur réquisition';
let blocMeuleM10In_ring2 = new Part(16590, 'Ring');
blocMeuleM10In_ring2.factoryId = '20512428';
blocMeuleM10In_ring2.sectionMaga = 'F2 A-6';
let blocMeuleM10In_ring3 = new Part(16600, 'Seal Ring');
blocMeuleM10In_ring3.factoryId = '20512058';
blocMeuleM10In_ring3.sectionMaga = 'F2 A-6';
let blocMeuleM10In_ring4 = new Part(15982, 'Seal Ring');
blocMeuleM10In_ring4.factoryId = '20505318';
blocMeuleM10In_ring4.sectionMaga = 'F2 C-4';
let blocMeuleM10In_ring5 = new Part(16602, 'Seal Ring');
blocMeuleM10In_ring5.factoryId = '20512089';
blocMeuleM10In_ring5.sectionMaga = 'F2 A-6';
let blocMeuleM10In_ring6 = new Part(16592, 'Seal Ring');
blocMeuleM10In_ring6.factoryId = '20512828';
blocMeuleM10In_ring6.sectionMaga = 'F2 A-6';
let blocMeuleM10In_ring7 = new Part(16596, 'Seal Ring');
blocMeuleM10In_ring7.factoryId = '20505901';
blocMeuleM10In_ring7.sectionMaga = 'F2 E-2';
let blocMeuleM10In_spacer1 = new Part(16598, 'Ring Spacer');
blocMeuleM10In_spacer1.factoryId = '20512925';
blocMeuleM10In_spacer1.sectionMaga = 'F2 E-2';
let blocMeuleM10In_spacer2 = new Part(97956, 'Spacer');
blocMeuleM10In_spacer2.factoryId = '224388';
blocMeuleM10In_spacer2.sectionMaga = 'F2 D-4';
let blocMeuleM10In_spacer3 = new Part(97955, 'Spacer');
blocMeuleM10In_spacer3.factoryId = '224391';
blocMeuleM10In_spacer3.sectionMaga = 'F2 D-4';
let blocMeuleM10In_stopperRing = new Part(17390, 'Stopper Ring');
blocMeuleM10In_stopperRing.factoryId = '224387';
blocMeuleM10In_stopperRing.description = 'Sur Réquisition';
let blocMeuleM10In_shaft1 = new Part(17006, 'Shaft Grindstone');
blocMeuleM10In_shaft1.factoryId = '224389';
blocMeuleM10In_shaft1.sectionMaga = 'F2 C-5';
let blocMeuleM10In_shaft2 = new Part(17058, 'Shaft');
blocMeuleM10In_shaft2.factoryId = '224393';
blocMeuleM10In_shaft2.sectionMaga = 'F2 D-5';
let blocMeuleM10In_intGrindHolder = new Part(14934, 'Internal Grindstone Holder');
blocMeuleM10In_intGrindHolder.factoryId = '224390';
blocMeuleM10In_intGrindHolder.sectionmaga = 'F2 D-6';
let blocMeuleM10In_spring = new Part(14790, 'Compression Spring');
blocMeuleM10In_spring.factoryId = '23461679';
blocMeuleM10In_spring.sectionMaga = 'F2 C-3';
let blocMeuleM10In_fanMeule = new Part(21904, 'Fan De Meule');
blocMeuleM10In_fanMeule.factoryId = '223880';
blocMeuleM10In_fanMeule.sectionMaga = 'F2 D-7';

let blocMeuleM10Ex_plug = new Part(96311, 'Plug');
blocMeuleM10Ex_plug.factoryId = '224397';
blocMeuleM10Ex_plug.sectionMaga = 'F2 D-4';
let blocMeuleM10Ex_extGrindHolder = new Part(14932, 'External Grindstone Holder');
blocMeuleM10Ex_extGrindHolder.factoryId = '224398';
blocMeuleM10Ex_extGrindHolder.sectioMaga = 'f2 D-6';
let blocMeuleM10Ex_shaft2 = new Part(16940, 'Shaft');
blocMeuleM10Ex_shaft2.factoryId = '224399';
blocMeuleM10Ex_shaft2.sectionMaga = 'F2 D-5';

blocMeuleM10In.addPart(blocMeuleM10In_support);
blocMeuleM10In.addPart(blocMeuleM10In_wheelGrind);
blocMeuleM10In.addPart(blocMeuleM10In_stopRingNut);
blocMeuleM10In.addPart(blocMeuleM10In_pinGasket);
blocMeuleM10In.addPart(blocMeuleM10In_bushing1);
blocMeuleM10In.addPart(blocMeuleM10In_bushing2);
blocMeuleM10In.addPart(blocMeuleM10In_bushing3);
blocMeuleM10In.addPart(blocMeuleM10In_ring1);
blocMeuleM10In.addPart(blocMeuleM10In_ring2);
blocMeuleM10In.addPart(blocMeuleM10In_ring3);
blocMeuleM10In.addPart(blocMeuleM10In_ring4);
blocMeuleM10In.addPart(blocMeuleM10In_ring5);
blocMeuleM10In.addPart(blocMeuleM10In_ring6);
blocMeuleM10In.addPart(blocMeuleM10In_ring7);
blocMeuleM10In.addPart(blocMeuleM10In_spacer1);
blocMeuleM10In.addPart(blocMeuleM10In_spacer2);
blocMeuleM10In.addPart(blocMeuleM10In_spacer3);
blocMeuleM10In.addPart(blocMeuleM10In_stopperRing);
blocMeuleM10In.addPart(blocMeuleM10In_shaft1);
blocMeuleM10In.addPart(blocMeuleM10In_shaft2);
blocMeuleM10In.addPart(blocMeuleM10In_intGrindHolder);
blocMeuleM10In.addPart(blocMeuleM10In_spring);
blocMeuleM10In.addPart(blocMeuleM10In_fanMeule);

blocMeuleM10Ex.addPart(blocMeuleM10In_support);
blocMeuleM10Ex.addPart(blocMeuleM10In_wheelGrind);
blocMeuleM10Ex.addPart(blocMeuleM10In_stopRingNut);
blocMeuleM10Ex.addPart(blocMeuleM10In_pinGasket);
blocMeuleM10Ex.addPart(blocMeuleM10In_bushing1);
blocMeuleM10Ex.addPart(blocMeuleM10In_bushing2);
blocMeuleM10Ex.addPart(blocMeuleM10In_bushing3);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring1);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring2);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring3);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring4);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring5);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring6);
blocMeuleM10Ex.addPart(blocMeuleM10In_ring7);
blocMeuleM10Ex.addPart(blocMeuleM10In_spacer1);
blocMeuleM10Ex.addPart(blocMeuleM10In_spacer2);
blocMeuleM10Ex.addPart(blocMeuleM10In_spacer3);
blocMeuleM10Ex.addPart(blocMeuleM10In_stopperRing);
blocMeuleM10Ex.addPart(blocMeuleM10In_shaft1);
blocMeuleM10Ex.addPart(blocMeuleM10Ex_shaft2);
blocMeuleM10Ex.addPart(blocMeuleM10Ex_extGrindHolder);
blocMeuleM10Ex.addPart(blocMeuleM10In_spring);
blocMeuleM10Ex.addPart(blocMeuleM10In_fanMeule);
blocMeuleM10Ex.addPart(blocMeuleM10Ex_plug);
//----blocMeuleM10 In&Ext----// End


//----clutch TGC----//
let clutchTGC60_bearing01 = new Part(18608, 'Bearing');
clutchTGC60_bearing01.factoryId = 'B-15732-1';
clutchTGC60_bearing01.sectionMaga = 'R1 C-8';
let clutchTGC60_bearing02 = new Part(18606, 'Bearing');
clutchTGC60_bearing02.factoryId = 'B-15732-3';
clutchTGC60_bearing02.sectionMaga = 'R1 C-8';
let clutchTGC60_bearing03 = new Part(18510, 'Bearing');
clutchTGC60_bearing03.factoryId = 'A-15730-1';
clutchTGC60_bearing03.sectionMaga = 'R1 C-7';
let clutchTGC60_thrustWasher = new Part(18513, 'Thrust Washer');
clutchTGC60_thrustWasher.factoryId = 'A-16511';
clutchTGC60_thrustWasher.sectionMaga = 'R1 C-7';
let clutchTGC60_rollPin = new Part(18511, 'Pin Roll');
clutchTGC60_rollPin.factoryId = 'A-73403-1';
clutchTGC60_rollPin.sectionMaga = 'R1 C-7';
let clutchTGC60_lever = new Part(15652, 'Lever');
clutchTGC60_lever.factoryId = 'B-16510';
clutchTGC60_lever.sectionMaga = 'R1 C-3';
let clutchTGC60_dowelPin = new Part(14996, 'Dowel Pin');
clutchTGC60_dowelPin.factoryId = 'A-17647';
clutchTGC60_dowelPin.sectionMaga = 'R1 C-3';
let clutchTGC60_spring01 = new Part(17246, 'Spring');
clutchTGC60_spring01.factoryId = 'A-17059';
clutchTGC60_spring01.sectionMaga = 'R1 C-2';

clutchTGC60.addPart(clutchTGC60_bearing01);
clutchTGC60.addPart(clutchTGC60_bearing02);
clutchTGC60.addPart(clutchTGC60_bearing03);
clutchTGC60.addPart(clutchTGC60_thrustWasher);
clutchTGC60.addPart(clutchTGC60_rollPin);
clutchTGC60.addPart(clutchTGC60_lever);
clutchTGC60.addPart(clutchTGC60_dowelPin);
clutchTGC60.addPart(clutchTGC60_spring01);

let clutchTGC200_bearing01 = new Part(18390, 'Bearing');
clutchTGC200_bearing01.factoryId = 'A-14407';
clutchTGC200_bearing01.sectionMaga = 'R1 C-9';
let clutchTGC200_bearing02 = new Part(18392, 'Bearing');
clutchTGC200_bearing02.factoryId = 'A-14408';
clutchTGC200_bearing02.sectionMaga = 'R1 C-9';
let clutchTGC200_bearing03 = new Part(18394, 'Bearing');
clutchTGC200_bearing03.factoryId = 'A-14409';
clutchTGC200_bearing03.sectionMaga = 'R1 C-9';
let clutchTGC200_thrustWasher = new Part(17592, 'Thrust Washer');
clutchTGC200_thrustWasher.factoryId = 'B-13406';
clutchTGC200_thrustWasher.sectionMaga = 'R1 C-5';
let clutchTGC200_dowelPin = new Part(14998, 'Dowel Pin');
clutchTGC200_dowelPin.factoryId = 'A-17648';
clutchTGC200_dowelPin.sectionMaga = 'R1 C-9';
let clutchTGC200_spring01 = new Part(17244, 'Spring');
clutchTGC200_spring01.factoryId = 'A-16989 ';
clutchTGC200_spring01.sectionMaga = 'R1 B-6';

clutchTGC200.addPart(clutchTGC200_bearing01);
clutchTGC200.addPart(clutchTGC200_bearing02);
clutchTGC200.addPart(clutchTGC200_bearing03);
clutchTGC200.addPart(clutchTGC200_thrustWasher);
clutchTGC200.addPart(clutchTGC200_dowelPin);
clutchTGC200.addPart(clutchTGC200_spring01);
//----clutch TGC----// End


//----Cylindre cyl_sco1319----//
let cyl_sco03_repairKit = new Part(50284, 'Repair Kit');
cyl_sco03_repairKit.factoryId = 'RG1319/0006';
cyl_sco03_repairKit.sectionMaga = 'M1 G-3';

cyl_sco03.addPart(cyl_sco03_repairKit);
cyl_sco01.addPart(cyl_sco03_repairKit);
//----Cylindre cyl_sco1319----// End


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
let gearbox_tigear01_serviceKitH = new Part(124, 'Service Kit');
gearbox_tigear01_serviceKitH.factoryId = '20AHSERVICEKIT';
gearbox_tigear01_serviceKitH.description = 'Sur réquisition';
let gearbox_tigear01_inputSealH = new Part(125, 'Input Seal');
gearbox_tigear01_inputSealH.factoryId = '334271';
gearbox_tigear01_inputSealH.description = 'Sur réquisition';
let gearbox_tigear01_ouputSealH = new Part(126, 'Ouput Seal');
gearbox_tigear01_ouputSealH.factoryId = '334276';
gearbox_tigear01_ouputSealH.description = 'Sur réquisition';

gearbox_tigear01.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear02.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear03.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear04.addPart(gearbox_tigear01_serviceKit);
gearbox_tigear05.addPart(gearbox_tigear01_serviceKitH);
gearbox_tigear01.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear02.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear03.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear04.addPart(gearbox_tigear01_inputSeal);
gearbox_tigear05.addPart(gearbox_tigear01_inputSealH);
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
let ply15_supportPiston = new Part(25432, 'Support piston');
ply15_supportPiston.factoryId = 'NA04';
ply15_supportPiston.sectionMaga = 'P1 F-2';
let ply15_rubberPiston = new Part(24300, 'Rubber piston');
ply15_rubberPiston.factoryId = 'I16PCPRT18010';
ply15_rubberPiston.sectionMaga = 'E4 B-3';
let ply15_spacer1 = new Part(16714, 'Petit spacer');
ply15_spacer1.factoryId = 'D.18xD.12x0.3';
ply15_spacer1.sectionMaga = 'P1 D-2';
let ply15_spacer2 = new Part(16716, 'Large spacer');
ply15_spacer2.factoryId = 'D.90xD.70x0.3';
ply15_spacer2.sectionMaga = 'P1 D-2';
let ply15_bushing = new Part(25054, 'Bushing');
ply15_bushing.factoryId = 'D.13xD.10x10';
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


//----plyM22----//
let ply22_block = new Part(123, 'Block');
ply22_block.factoryId = 'F018-0018';
ply22_block.description = 'Sur réqusition';
let ply22_stop = new Part(124, 'Stop');
ply22_stop.factoryId = 'F002-2727';
ply22_stop.description = 'Sur réquisition';
let ply22_felt = new Part(125, 'Felt');
ply22_felt.factoryId = 'F009-5978';
ply22_felt.description = 'Sur réquisition';
let ply22_support01 = new Part(126, 'Support');
ply22_support01.factoryId = 'F009-3330'
ply22_support01.description = 'Sur réquisition';
let ply22_plate01 = new Part(127, 'Plate');
ply22_plate01.factoryId = 'F018-0005';
ply22_plate01.description = 'Sur réquisition';
let ply22_support02 = new Part(128, 'Support');
ply22_support02.factoryId = 'F018-0010';
ply22_support02.description = 'Sur réquisition';
let ply22_ballJoint = new Part(129, 'Bearing');
ply22_ballJoint.factoryId = 'GE 25 ES-2RS';
ply22_ballJoint.description = 'Sur réquisition';
let ply22_shaft = new Part(130, 'Shaft');
ply22_shaft.factoryId = 'F002-5010';
ply22_shaft.description = 'Sur réquisition';
let ply22_top = new Part(131, 'Top');
ply22_top.factoryId = 'F002-5011';
ply22_top.description = 'Sur Réquisition';
let ply22_washer01 = new Part(132, 'Washer');
ply22_washer01.factoryId = 'F002-5012';
ply22_washer01.description = 'Sur réquisition';
let ply22_limiter = new Part(133, 'Limiter');
ply22_limiter.factoryId = 'F003-6819';
ply22_limiter.description = 'Sur réquisition';
let ply22_wheel = new Part(134, 'Wheel');
ply22_wheel.factoryId = 'F018-0014';
ply22_wheel.description = 'Sur réquisition';
let ply22_threadRod = new Part(96130, 'Threaded Rod');
ply22_threadRod.factoryId = 'F009-0148';
ply22_threadRod.sectionMaga = 'KK2 D-8';
let ply22_washer02 = new Part(135, 'Washer');
ply22_washer02.factoryId = 'F001-7607';
ply22_washer02.description = 'Sur réquisition';
let ply22_key = new Part(136, 'Key');
ply22_key.factoryId = 'A 5x5x16';
let ply22_reg = new Part(137, 'Regulator');
ply22_reg.factoryId = 'F009-1758';
ply22_reg.description = 'Sur réquisition';
let ply22_plate02 = new Part(138, 'Plate');
ply22_plate02.factoryId = 'F009-1760';
ply22_plate02.description = 'Sur réquisition';
let ply22_wingScrew = new Part(139, 'Wing Screw');
ply22_wingScrew.factoryId = '65681';
ply22_wingScrew.description = 'Sur réquisition';
let ply22_knurl = new Part(99737, 'Molletage');
ply22_knurl.factoryId = '017-13-98(01)';
ply22_knurl.description = 'Sur Réquisition';

plyM22.addPart(ply22_block);
plyM22.addPart(ply22_stop);
plyM22.addPart(ply22_felt);
plyM22.addPart(ply22_support01);
plyM22.addPart(ply22_plate01);
plyM22.addPart(ply22_support02);
plyM22.addPart(ply22_ballJoint);
plyM22.addPart(ply22_shaft);
plyM22.addPart(ply22_top);
plyM22.addPart(ply22_washer01);
plyM22.addPart(ply22_limiter);
plyM22.addPart(ply22_wheel);
plyM22.addPart(ply22_threadRod);
plyM22.addPart(ply22_washer02);
plyM22.addPart(ply22_key);
plyM22.addPart(ply22_reg);
plyM22.addPart(ply22_plate02);
plyM22.addPart(ply22_wingScrew);
plyM22.addPart(ply22_knurl);
//----plyM22----// End


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


//----relaxGripper----//
let relaxGripper_fingerSup = new Part(15114, 'Pick-Up Support');
relaxGripper_fingerSup.factoryId = 'B358003851';
relaxGripper_fingerSup.sectionMaga = 'I1 D-8';
let relaxGripper_rotativePin = new Part(16742, 'Rotation Pin');
relaxGripper_rotativePin.factoryId = 'B356003485';
relaxGripper_rotativePin.sectionMaga = 'I1 D-9';
let relaxGripper_spring = new Part(17236, 'Spring');
relaxGripper_spring.factoryId = 'B358003226 EL80';
relaxGripper_spring.sectionMaga = 'I1 D-9';
let relaxGripper_flangeBushing = new Part(15160, 'Flange Bushing');
relaxGripper_flangeBushing.factoryId = 'B421310014';
relaxGripper_flangeBushing.sectionMaga = 'I1 D-9';
let relaxGripper_clampingModule = new Part(20877, 'Mod.Block');
relaxGripper_clampingModule.factoryId = 'B727313292';
relaxGripper_clampingModule.sectionMaga = 'I2 F-4';
let relaxGripper_tabPick = new Part(15396, 'Tab For Pick-Up Device');
relaxGripper_tabPick.factoryId = 'B358003224';
relaxGripper_tabPick.sectionMaga = 'I1 D-3';
let relaxGripper_barHolder = new Part(14542, 'Bar Holder Plate');
relaxGripper_barHolder.factoryId = 'B359001772';
relaxGripper_barHolder.sectionMaga = 'I1 D-2';
let relaxGripper_pickUpStop = new Part(01, 'Pick-Up Stop Block');
relaxGripper_pickUpStop.factoryId = 'B358003225';
relaxGripper_pickUpStop.description = 'Sur Réquisition';

relaxGripper.addPart(relaxGripper_fingerSup);
relaxGripper.addPart(relaxGripper_rotativePin);
relaxGripper.addPart(relaxGripper_spring);
relaxGripper.addPart(relaxGripper_flangeBushing);
relaxGripper.addPart(relaxGripper_clampingModule);
relaxGripper.addPart(relaxGripper_tabPick);
relaxGripper.addPart(relaxGripper_barHolder);
relaxGripper.addPart(relaxGripper_pickUpStop);
//----relaxGripper----// End


//----rabbitIR505----//
let rabbitIR505_couteauAig = new Part(92772, 'Couteau Aiguisé');
rabbitIR505_couteauAig.factoryId = '02501080 AIG';
rabbitIR505_couteauAig.sectionMaga = 'E3 C-7';
let rabbitIR505_couteauNeuf = new Part(25219, 'Couteau Neuf');
rabbitIR505_couteauNeuf.factoryId = '02501080';
rabbitIR505_couteauNeuf.sectionMaga = 'E3 C-7';
let rabbitIR505_cuttingGroup = new Part(14926, 'Cutting Group');
rabbitIR505_cuttingGroup.factoryId = '55A70002';
rabbitIR505_cuttingGroup.sectionMaga = 'E3 C-4';
let rabbitIR505_bracket = new Part(14282, 'Bracket');
rabbitIR505_bracket.factoryId = '243034005';
rabbitIR505_bracket.sectionMaga = 'E3 C-4';
let rabbitIR505_shaft = new Part(15598 , 'Knife Holder Shaft');
rabbitIR505_shaft.factoryId = '248019030'
rabbitIR505_shaft.sectionMaga = 'E3 C-4';
let rabbitIR505_taperWasher = new Part(16718, 'Taper Washer');
rabbitIR505_taperWasher.factoryId = '24809031';
rabbitIR505_taperWasher.sectionMaga = 'E3 C-4';

rabbitIR505.addPart(rabbitIR505_couteauAig);
rabbitIR505.addPart(rabbitIR505_couteauNeuf);
rabbitIR505.addPart(rabbitIR505_cuttingGroup);
rabbitIR505.addPart(rabbitIR505_bracket);
rabbitIR505.addPart(rabbitIR505_shaft);
rabbitIR505.addPart(rabbitIR505_taperWasher);
//----rabbitIR505----// End


//----hub lame kuos----// 
let hubLameKuos_km10 = new Part(15022, 'Lock Nut');
hubLameKuos_km10.factoryId = 'KM10';
hubLameKuos_km10.sectionMaga = 'B3 B-5';
let hubLameKuos_mb10 = new Part(16720, 'Lock Washer');
hubLameKuos_mb10.factoryId = 'MB10';
hubLameKuos_mb10.sectionMaga = 'B3 B-5';
let hubLameKuos_bearing = new Part(18358, 'Bearing');
hubLameKuos_bearing.factoryId = '7216 BEP';
hubLameKuos_bearing.sectionMaga = 'B3 H-4';
let hubLameKuos_poulie = new Part(16252, 'Poulie');
hubLameKuos_poulie.factoryId = 'HTD 47-8M-35';
hubLameKuos_poulie.sectionMaga = 'D1 C-2';
let hubLameKuos_shaft = new Part(17035, 'Shaft');
hubLameKuos_shaft.factoryId = 'Shaft Of Rotary';
hubLameKuos_shaft.sectionMaga = 'D1 D-4';

hubLameKuos.addPart(hubLameKuos_km10);
hubLameKuos.addPart(hubLameKuos_mb10);
hubLameKuos.addPart(hubLameKuos_bearing);
hubLameKuos.addPart(hubLameKuos_poulie);
hubLameKuos.addPart(hubLameKuos_shaft);
//----hub lame kuos----// End












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
rebuiltList.addRebuilt(carriageMandrelIR505Droit);
rebuiltList.addRebuilt(chaineLanceurLSX);
rebuiltList.addRebuilt(clutchTGC20);
rebuiltList.addRebuilt(clutchTGC60);
rebuiltList.addRebuilt(clutchTGC200);
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
rebuiltList.addRebuilt(cyl_ave02);
rebuiltList.addRebuilt(cyl_bos01);
rebuiltList.addRebuilt(cyl_fes01);
rebuiltList.addRebuilt(cyl_fes02);
rebuiltList.addRebuilt(cyl_num01);
rebuiltList.addRebuilt(cyl_num02);
rebuiltList.addRebuilt(cyl_pne01);
rebuiltList.addRebuilt(cyl_pne02);
rebuiltList.addRebuilt(cyl_sco01);
rebuiltList.addRebuilt(cyl_sco02);
rebuiltList.addRebuilt(cyl_sco03);
rebuiltList.addRebuilt(cyl_she01);
rebuiltList.addRebuilt(cyl_smc01);
rebuiltList.addRebuilt(cyl_smc02);
rebuiltList.addRebuilt(cyl_smc03);
rebuiltList.addRebuilt(cyl_smc04);
rebuiltList.addRebuilt(cyl_smc05);
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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} // inclusive