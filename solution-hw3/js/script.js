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

//The base price of a cinnamon roll
const basePrice = 2.49;

let glazeType = "";
let packSize = "";
let glazePremium = "";
let packSizeMultiplier = "";

//Populate select options for glazes and sizes
populateGlazes();
populateSizes();
document.getElementById("glazingOptions").addEventListener('change', updateOrder);
document.getElementById("packSize").addEventListener('change', updateOrder);

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

function updatePrice(glazePremium, sizeMultiplier) {
    document.getElementById("totalPrice").innerHTML = Math.round((((glazePremium+basePrice)*sizeMultiplier)*100)/100);
}

function updateOrder() {
    glazeType = document.getElementById("glazingOptions").value;
    packSize = document.getElementById("packSize").value;
    updatePrice(glazeType, packSize);
}