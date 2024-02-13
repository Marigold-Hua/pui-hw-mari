let glazeType = "";
let packSize = "";
let glazePremium = "";
let packSizeMultiplier = "";
const basePrice = 2.49;

function updateOrder() {
    glazeType = document.getElementById("glazingOptions").value;
    packSize = document.getElementById("packSize").value;
    matchPriceEffect(glazeType, packSize);
}


function matchPriceEffect(glazeType, packSize) {
    if (glazeType == "Vanilla milk") {
        glazePremium = 0.5;
    }
    else if(glazeType == "Double chocolate") {
        glazePremium = 1.5;
    }
    else {
        glazePremium = 0;
    }
        
    if (packSize == 1) {
        packSizeMultiplier = 1;
    }
    else if(packSize == 3) {
        packSizeMultiplier = 3;
    }
    else if(packSize == 6) {
        packSizeMultiplier = 5;
    }
    else {
        packSizeMultiplier = 10;
    }

    changeToPrice(glazePremium, packSizeMultiplier);
    
}

function changeToPrice(glazePremium, packSizeMultiplier){
    document.getElementById("priceCalc").innerHTML = (2.49+glazePremium)*packSizeMultiplier;
}

document.getElementById("glazingOptions").addEventListener('change', updateOrder);
document.getElementById("packSize").addEventListener('change', updateOrder);
/** 
 * 
let glazeType = "";
let packSize = "";
let glazePremium = "";
let packSizeMultiplier = "";

function updateOrder() {
    glazeType = document.getElementById("glazingOptions").value;
    packSize = document.getElementById("packSize").value;
    matchPriceEffect(glazeType, packSize);
}


function matchPriceEffect(glazeType, packSize) {
    if (glazeType === "Vanilla milk") {
        glazePremium = 0.5;
    }
    else if(glazeType === "Double chocolate") {
        glazePremium = 1.5;
    }
    else {
        glazePremium = 0;
    }
        
    if (packSize === 1) {
        packSizeMultiplier = 1;
    }
    else if(packSize === 3) {
        packSizeMultiplier = 3;
    }
    else if(packSize === 6) {
        packSizeMultiplier = 5;
    }
    else {
        packSizeMultiplier = 10;
    }

    console.log(glazeType, glazePremium, packSize, packSizeMultiplier);
    
}

document.getElementById("glazingOptions").addEventListener('change', updateOrder());
document.getElementById("packSize").addEventListener('change', updateOrder()); 
**/