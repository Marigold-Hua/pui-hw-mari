//Key:Value pairs matching glazing and size with appropriate premiums and price multipliers
const glazeList = {
    "Keep original": 0.0,
    "Sugar milk": 0.0,
    "Vanilla milk":  0.5,
    "Double chocolate":  1.5
};

const sizeList = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
};

//The base price of a cinnamon roll
const basePrice = 2.49;

//Populate select options for glazes 
for (var key in glazeList) {
    var option = document.createElement("option")
    option.text = key;
    option.value = glazeList[key];
    document.getElementById("glazingOptions").appendChild(option);
}

//Populate select options for sizes
for (var key in sizeList) {
    var option = document.createElement("option")
    option.text = key;
    option.value = sizeList[key];
    document.getElementById("packSize").appendChild(option);
}

//Add event listeners for select changes
document.getElementById("glazingOptions").addEventListener('change', updateOrderPrice);
document.getElementById("packSize").addEventListener('change', updateOrderPrice);

//Update displayed price
function updateOrderPrice() {
    glazePremium = parseFloat(document.getElementById("glazingOptions").value);
    packMultiplier = parseFloat(document.getElementById("packSize").value);
    price = (basePrice + glazePremium)*packMultiplier;
   
    document.getElementById("totalPrice").innerHTML = price.toFixed(2);
}