//Key:Value pairs matching glazing and size with appropriate premiums and price multipliers
const glazeList = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5
};

const sizeList = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
};

//Populate select options for glazes and sizes
populateGlazes();
populateSizes();

//Use loop to populate glaze select options
function populateGlazes() {
    const glazes = document.getElementById("glazingOptions");
    
    //Clear options
    glazes.innerHTML= " ";
    
    for (var key in glazeList) {
        var option = document.createElement("option")
        option.text = key;
        option.value = glazeList[key];
        glazes.appendChild(option);
    }
}

//Use loop to populate size select options
function populateSizes() {
   const sizes = document.getElementById("packSize");
    
    //Clear options
    sizes.innerHTML= " ";
    
    for (var key in sizeList) {
        var option = document.createElement("option")
        option.text = key;
        option.value = sizeList[key];
        sizes.appendChild(option);
    }
}

//Update glaze premium on each change of glazing selector
function glazingChange(element) {
    const priceChange = element.value
    return priceChange;
}

//Update size multiplier on each change of glazing selector
function sizeChange(element) {
    const priceChange = element.value
    return priceChange;
}

/** let glazeType = "";
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
**/