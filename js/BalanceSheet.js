let Assetbutton=document.getElementById("addCurrentAssets");
let Liabilitiesbutton=document.getElementById("addCurrrentLiabilities");
let InvestmentPropbutton=document.getElementById("addInvestmentPropertyAndEquipment");
let Intangiblesbutton=document.getElementById("addIntangibles");
let LongtermLiabilitiesbutton=document.getElementById("addLongTermLiabilites");
let currentAssets=document.getElementById("CurrentAssets");
let currentLiabilties=document.getElementById("CurrentLiabilties");
let InvestmentPropandequip=document.getElementById("InvestmentPropertyandEquipment");
let LongtermLiabilities=document.getElementById("LongtermLiabilities");
let Intangibles=document.getElementById("intangibles");
let position=document.getElementById("tp");
let positioncontainer=document.getElementById("totalposition");
let CalculatePositionbutton=document.createElement("button");

//declaring asset variables
let cashTextBox=document.createElement("input");
let assetContainer= document.createElement("div");
let inventoryTextBox=document.createElement("input");
let suppliesTextBox=document.createElement("input");
let temporaryinvestmentsTextBox=document.createElement("input");



//declaring liabilities variable
let currentLiabiltiesContainer= document.createElement("div");
let acccountsPayableTextBox=document.createElement("input");
let notespayableTextBox=document.createElement("input");
let interestpayableTextBox=document.createElement("input");
let wagespayableTextBox=document.createElement("input")
let accruedexpensesTextBox=document.createElement("input");

//declaring Investment propert and equipment variables
let InvestmentPropertyandEquipmentcontainer= document.createElement("div");
let BuildingandImprovementsTextBox=document.createElement("input");
 let equipmentTextBox=document.createElement("input");
let temporaryinvestmentsTextBox2=document.createElement("input");
let landTextBox=document.createElement("input");


//decalring long-term liabilities

let LongtermtLiabiltiesContainer= document.createElement("div");
let notesPayableTextBox2=document.createElement("input");
let bondsspayableTextBox=document.createElement("input");


//declaring intangibles
let goodwillTextBox=document.createElement("input");
let tradeTextBox=document.createElement("input");
let Intangiblescontainer= document.createElement("div");

//hides buttton and lists textboxes 
function showAssets(){
Assetbutton.style.display="none";

currentAssets.appendChild(assetContainer);

//creating cash textbox

cashTextBox.setAttribute("id","cash-textbox");
cashTextBox.classList.add("AssetTextBoxes");

let textcash =document.createTextNode("Cash:");
assetContainer.appendChild(textcash);
assetContainer.appendChild(cashTextBox);

//creating Inventory textbox

inventoryTextBox.setAttribute("id","inventory-textbox");
inventoryTextBox.classList.add("AssetTextBoxes");
let textinventory =document.createTextNode("Inventory:");
assetContainer.appendChild(textinventory);
assetContainer.appendChild(inventoryTextBox);


//creating Supplies textbox

suppliesTextBox.setAttribute("id","supplies-textbox");
suppliesTextBox.classList.add("AssetTextBoxes");
let textsupplies =document.createTextNode("Supplies:");
assetContainer.appendChild(textsupplies);
assetContainer.appendChild(suppliesTextBox);


//creating temporary investments textbox

temporaryinvestmentsTextBox.setAttribute("id","temporaryinvestments-textbox");
temporaryinvestmentsTextBox.classList.add("AssetTextBoxes");
let texttemporaryinvestments =document.createTextNode("Temporary Investments:");

assetContainer.appendChild(texttemporaryinvestments);
assetContainer.appendChild(temporaryinvestmentsTextBox);

//styling the textboxes

assetContainer.style.display="flex";
assetContainer.style.maxWidth="200px";
assetContainer.style.minWidth="200px";
assetContainer.style.marginLeft="55%";
assetContainer.style.overflow="hidden";
assetContainer.style.flexDirection="column";

//adding event listeners to all current asset textboxes



cashTextBox.addEventListener("blur",showandCalculatePosition);




//creating currentAsset Subtotal
let currentAssetSubtotal= document.createElement("p");
currentAssetSubtotal.setAttribute("id","currentAssetSubtotal")
let textcurrentAssetSubtotal=document.createTextNode("Total Current Assets: ");
assetContainer.appendChild(textcurrentAssetSubtotal);


}
//adding event listeners to all current asset textboxes



function showCurrentLiabilities(){
    Liabilitiesbutton.style.display="none";
    
    currentLiabilties.appendChild(currentLiabiltiesContainer);
    
    //creating Accounts Payable textbox
    
    acccountsPayableTextBox.setAttribute("id","accountspayable-textbox");
    acccountsPayableTextBox.classList.add("CurrentLiabilities");
    let textaccountspayable =document.createTextNode("Accounts Payable: ");
    currentLiabiltiesContainer.appendChild(textaccountspayable);
    currentLiabiltiesContainer.appendChild(acccountsPayableTextBox);
    
    //creating Notes payable textbox
    
    notespayableTextBox.setAttribute("id","notespayable-textbox");
    notespayableTextBox.classList.add("CurrentLiabilities");
    let textnotespayable =document.createTextNode("Notes Payable:");
    currentLiabiltiesContainer.appendChild(textnotespayable);
    currentLiabiltiesContainer.appendChild(notespayableTextBox);
    
    
    //creating Interest payable textbox
   
    interestpayableTextBox.setAttribute("id","interestpayable-textbox");
    interestpayableTextBox.classList.add("CurrentLiabilities");
    let textinterestpayable =document.createTextNode("Interest Payable:");
    currentLiabiltiesContainer.appendChild(textinterestpayable);
    currentLiabiltiesContainer.appendChild( interestpayableTextBox);
    
    
    //creating wages payable investments textbox
  
    wagespayableTextBox.setAttribute("id","wagespayable-textbox");
    wagespayableTextBox.classList.add("CurrentLiabilities");
    let textwagespayableTextBox =document.createTextNode("Wages Payable: ");
    currentLiabiltiesContainer.appendChild(textwagespayableTextBox);
    currentLiabiltiesContainer.appendChild(wagespayableTextBox);

    //creating Accrued Expenses textbox

    accruedexpensesTextBox.setAttribute("id","accruedexpenses-textbox");
    accruedexpensesTextBox.classList.add("CurrentLiabilities");
    let textaccruedexpenses =document.createTextNode("Accrued Expenses:");
    currentLiabiltiesContainer.appendChild(textaccruedexpenses);
    currentLiabiltiesContainer.appendChild(  accruedexpensesTextBox);

    
    //styling the textboxes

    currentLiabiltiesContainer.style.minWidth="200px";
    currentLiabiltiesContainer.style.maxWidth="200px";
    currentLiabiltiesContainer.style.display="flex";
    
    currentLiabiltiesContainer.style.marginLeft="55%";
    currentLiabiltiesContainer.style.overflow="hidden";
    currentLiabiltiesContainer.style.flexDirection="column";
    


    
    
    
    //creating toal current Liabilities Subtotal
    
    
    let currentLiabilitiesSubtotal= document.createElement("p");
    currentLiabilitiesSubtotal.setAttribute("id","currentLiabilitiesSubtotal");
    let textcurrentLiabilitiesSubtotal=document.createTextNode("Total Current Liabilities: ");
    currentLiabiltiesContainer.appendChild( textcurrentLiabilitiesSubtotal);

}

//hides buttton and lists textboxes 
function showInvestmentProp(){
    InvestmentPropbutton.style.display="none";
    
    
    InvestmentPropandequip.appendChild(InvestmentPropertyandEquipmentcontainer);
    
    //creating land textbox

    landTextBox.setAttribute("id","land-textbox");
    landTextBox.classList.add("InvestmentPropertyandEquipment");
    let textland =document.createTextNode("Land: ");
    InvestmentPropertyandEquipmentcontainer.appendChild(textland );
    InvestmentPropertyandEquipmentcontainer.appendChild(landTextBox);
    
    //creating building and improvements textbox
 
    BuildingandImprovementsTextBox.setAttribute("id","buildingandimprovements-textbox");
    BuildingandImprovementsTextBox.classList.add("InvestmentPropertyandEquipment");
    let textbuildingandimprovements =document.createTextNode("Building and Improvements:");
    InvestmentPropertyandEquipmentcontainer.appendChild(textbuildingandimprovements);
    InvestmentPropertyandEquipmentcontainer.appendChild(  BuildingandImprovementsTextBox);
    
    
    //creating equipment textbox
    equipmentTextBox.setAttribute("id","equipment-textbox");
    equipmentTextBox.classList.add("InvestmentPropertyandEquipment");
    let textequipment =document.createTextNode("Supplies:");
    InvestmentPropertyandEquipmentcontainer.appendChild(textequipment);
    InvestmentPropertyandEquipmentcontainer.appendChild(equipmentTextBox);
    
    
    //creating temporary investments textbox
   
    temporaryinvestmentsTextBox2.setAttribute("id","temporaryinvestments2-textbox");
    temporaryinvestmentsTextBox2.classList.add("InvestmentPropertyandEquipment");
    let texttemporaryinvestments2 =document.createTextNode("Temporary Investments:");
    InvestmentPropertyandEquipmentcontainer.appendChild(texttemporaryinvestments2);
    InvestmentPropertyandEquipmentcontainer.appendChild(temporaryinvestmentsTextBox2);
    
    //styling the textboxes

    
    InvestmentPropertyandEquipmentcontainer.style.display="flex";
    InvestmentPropertyandEquipmentcontainer.style.maxWidth="200px";
    InvestmentPropertyandEquipmentcontainer.style.minWidth="200px";
    InvestmentPropertyandEquipmentcontainer.style.marginLeft="26%";
    InvestmentPropertyandEquipmentcontainer.style.overflow="hidden";
    InvestmentPropertyandEquipmentcontainer.style.flexDirection="column";

    
    //creating Investtmeant and equipment Subtotal
    
    
    let InvestmentPropandEquipSubtotal= document.createElement("p");
    InvestmentPropandEquipSubtotal.setAttribute("id","InvestmentPropertyandEquipment");
    let textInvestmentPropandEquipSubtotal=document.createTextNode("Total Investment Property and Equipment: ");
    InvestmentPropertyandEquipmentcontainer.appendChild(textInvestmentPropandEquipSubtotal);
    
    }

    function showLongtermLiabilites(){
        LongtermLiabilitiesbutton.style.display="none";
        
       
        LongtermLiabilities.appendChild(LongtermtLiabiltiesContainer);
        
        //creating Notes Payable textbox
      
        notesPayableTextBox2.classList.add("LongtermLiabilities");
        let textnotesspayable =document.createTextNode("Notes Payable: ");
        LongtermtLiabiltiesContainer.appendChild(textnotesspayable);
        LongtermtLiabiltiesContainer.appendChild(notesPayableTextBox2);
        
        //creating bonds payable textbox
      
   
        bondsspayableTextBox.classList.add("LongtermLiabilities");
        let textbondspayable =document.createTextNode("Bonds Payable:");
        LongtermtLiabiltiesContainer.appendChild(textbondspayable);
        LongtermtLiabiltiesContainer.appendChild( bondsspayableTextBox);
        
        

        //styling the textboxes
  
        LongtermtLiabiltiesContainer.style.minWidth="200px";
        LongtermtLiabiltiesContainer.style.maxWidth="200px";
        LongtermtLiabiltiesContainer.style.display="flex";
        
        LongtermtLiabiltiesContainer.style.marginLeft="55%";
        LongtermtLiabiltiesContainer.style.overflow="hidden";
        LongtermtLiabiltiesContainer.style.flexDirection="column";
        
        //creating toal longterm Liabilities Subtotal
        
        
        let LongtermLiabilitiesSubtotal= document.createElement("p");
        LongtermLiabilitiesSubtotal.setAttribute("id","LongtermLiabilitiesSubtotal");
        let textLongtermLiabilitiesSubtotal=document.createTextNode("Total Long-Term Liabilities: ");
        LongtermtLiabiltiesContainer.appendChild( textLongtermLiabilitiesSubtotal);

    
    }

//hides buttton and lists textboxes 
function showIntangibles(){
    Intangiblesbutton.style.display="none";
    
   
    Intangibles.appendChild(Intangiblescontainer);
    
    //creating trade textbox
  
    tradeTextBox.setAttribute("id","trade-textbox");
    tradeTextBox.classList.add("Intangibles");
    let texttrade=document.createTextNode("Trade: ");
    Intangiblescontainer.appendChild(texttrade);
    Intangiblescontainer.appendChild(tradeTextBox);

    //creating goodwill textbox
   
    goodwillTextBox.setAttribute("id","goodwill-textbox");
    goodwillTextBox.classList.add("Intangibles");
    let textgoodwill=document.createTextNode("Goodwill:");
    Intangiblescontainer.appendChild(textgoodwill);
    Intangiblescontainer.appendChild(goodwillTextBox);
    
   
    //styling the textboxes

    
    Intangiblescontainer.style.display="flex";
    Intangiblescontainer.style.maxWidth="200px";
    Intangiblescontainer.style.minWidth="200px";
    Intangiblescontainer.style.marginLeft="56%";
    Intangiblescontainer.style.overflow="hidden";
    Intangiblescontainer.style.flexDirection="column";
    
    
    
    //creating Investtmeant and equipment Subtotal
    
    
    let IntangiblesSubtotal= document.createElement("p");
    IntangiblesSubtotal.setAttribute("id","IntangiblesSubtotal");
    let textIntangiblessubtotal=document.createTextNode("Total Intangibles: ");
    Intangiblescontainer.appendChild(textIntangiblessubtotal);
    
    }


    //adding position button

function showandCalculatePosition(){

let CalculatePositionbutton=document.createElement("button");
CalculatePositionbutton.setAttribute("id","CalculateButton");
CalculatePositionbutton.textContent= "Calculate Position";
CalculatePositionbutton.style.width="35%";
CalculatePositionbutton.style.fontSize= "75%";
CalculatePositionbutton.style.fontWeight="bold";
CalculatePositionbutton.style.marginTop="2%";
CalculatePositionbutton.style.float="left";
CalculatePositionbutton.style.display.flexDirection="column";
position.appendChild(CalculatePositionbutton);

position.style.display="flex";

position.style.flexDirection="column";
CalculatePositionbutton.addEventListener ("click", calcassets);
CalculatePositionbutton.addEventListener ("click", calcliab);
CalculatePositionbutton.addEventListener ("click", calcIPandEq);
CalculatePositionbutton.addEventListener ("click", calclongliab);
CalculatePositionbutton.addEventListener ("click", calcintang);
CalculatePositionbutton.addEventListener ("click", calctotalass);
CalculatePositionbutton.addEventListener ("click", calctotalliab);
CalculatePositionbutton.addEventListener ("click", calctotal);
}


function calcassets() {
    let aSubtotal=parseInt(cashTextBox.value)+ parseInt(inventoryTextBox.value)+ parseInt(suppliesTextBox.value)+ parseInt(temporaryinvestmentsTextBox.value);
    aSubtotal.toString();

    let x=document.createTextNode("$"+aSubtotal);
    assetContainer.appendChild(x);

}
function calcliab() {
    let clSubtotal=parseInt(acccountsPayableTextBox.value)+ parseInt(notespayableTextBox.value)+ parseInt(interestpayableTextBox.value)+ parseInt(wagespayableTextBox.value)+ parseInt(accruedexpensesTextBox.value);
    clSubtotal.toString();

    let x=document.createTextNode("$"+clSubtotal);
    currentLiabiltiesContainer.appendChild(x);

}
function calcIPandEq() {
    let IPandEQSubtotal=parseInt(landTextBox.value)+ parseInt(BuildingandImprovementsTextBox.value)+ parseInt(equipmentTextBox.value)+ parseInt(temporaryinvestmentsTextBox2.value);
    IPandEQSubtotal.toString();

    let x=document.createTextNode("$"+IPandEQSubtotal);
    InvestmentPropertyandEquipmentcontainer.appendChild(x);

}

function calclongliab() {
    let longliabSubtotal=parseInt(notesPayableTextBox2.value)+ parseInt(bondsspayableTextBox.value);
    longliabSubtotal.toString();

    let x=document.createTextNode("$"+longliabSubtotal);
     LongtermtLiabiltiesContainer.appendChild(x);

}
function calcintang() {
    let intangSubtotal=parseInt(tradeTextBox.value)+ parseInt(goodwillTextBox.value);
    intangSubtotal.toString();

    let x=document.createTextNode("$"+intangSubtotal);
     Intangiblescontainer.appendChild(x);

}
function calctotalass() {
    let totalass=parseInt(cashTextBox.value)+ parseInt(inventoryTextBox.value) + parseInt(suppliesTextBox.value)+ parseInt(temporaryinvestmentsTextBox.value)+ parseInt(landTextBox.value)+ parseInt(BuildingandImprovementsTextBox.value)+ parseInt(equipmentTextBox.value)+ parseInt(temporaryinvestmentsTextBox2.value)+ parseInt(tradeTextBox.value)+ parseInt(goodwillTextBox.value);
    totalass.toString();
    let totalAssets=document.getElementById("TotalAssets");
    let x=document.createTextNode("$"+totalass);
     totalAssets.appendChild(x);

}
function calctotalliab() {
    let totalliab=parseInt(acccountsPayableTextBox.value)+ parseInt(notespayableTextBox.value) + parseInt(interestpayableTextBox.value)+ parseInt(wagespayableTextBox.value)+ parseInt(accruedexpensesTextBox.value)+ parseInt(notesPayableTextBox2.value)+ parseInt(bondsspayableTextBox.value);
    totalliab.toString();
    let totalLiabilties=document.getElementById("TotalLiabilities");
    let x=document.createTextNode("$"+totalliab);
    totalLiabilties.appendChild(x);

}
function calctotal() {
    let total=parseInt(cashTextBox.value)+ parseInt(inventoryTextBox.value) + parseInt(suppliesTextBox.value)+ parseInt(temporaryinvestmentsTextBox.value)+ parseInt(landTextBox.value)+ parseInt(BuildingandImprovementsTextBox.value)+ parseInt(equipmentTextBox.value)+ parseInt(temporaryinvestmentsTextBox2.value)+ parseInt(tradeTextBox.value)+ parseInt(goodwillTextBox.value)-parseInt(acccountsPayableTextBox.value)- parseInt(notespayableTextBox.value) - parseInt(interestpayableTextBox.value)- parseInt(wagespayableTextBox.value)- parseInt(accruedexpensesTextBox.value)- parseInt(notesPayableTextBox2.value)- parseInt(bondsspayableTextBox.value);
    total.toString();
    let totalposition=document.getElementById("position");
    let x=document.createTextNode("$"+total);
    totalposition.appendChild(x);

}




//click events
LongtermLiabilitiesbutton.addEventListener("click", showLongtermLiabilites);
Assetbutton.addEventListener("click", showAssets);
Liabilitiesbutton.addEventListener("click", showCurrentLiabilities);
InvestmentPropbutton.addEventListener("click", showInvestmentProp);
Intangiblesbutton.addEventListener("click", showIntangibles);

