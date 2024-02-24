//Key:Value pairs matching glazing and size with appropriate premiums and price multipliers
//Define roll class 
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

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

//Create cart array and instantiate 4 roll objects
/* 
let cart = [
    {
        rollType: "Original",
        rollGlazing: "Sugar Milk",
        packSize: "1",
        basePrice: "2.49"
    },
    {
        rollType: "Walnut",
        rollGlazing: "Vanilla Milk",
        packSize: '12',
        basePrice: "39.90"
    },
    {
        rollType: "Raisin",
        rollGlazing: "Sugar Milk",
        packSize: "3",
        basePrice: "8.97"
    },
    {
        rollType: "Apple"
        rollGlazing: "Keep Original"
        packSize: "3"
        basePrice: "10.47"
    }
];
*/

let cart = [];

console.log(cart);

//Obtain roll type from URL 
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

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

//Save the values associated with cinnamon roll type from database
const basePrice = rolls[rollType].basePrice;
const imagePath = "assets/products/" + rolls[rollType].imageFile;
const fullName = rollType + " Cinnamon Roll";
const altText = rolls[rollType].altText;

//Update DOM elements by roll type
changeHeading();
changeImage();
changeDisplayedBasePrice();

//Update heading of detail page
function changeHeading(){
    document.getElementById("roll-name").innerHTML = fullName;
}

//Update image to corresponding roll image
function changeImage(){
    const currentImage = document.getElementById("roll-image");
    currentImage.src = imagePath;
    currentImage.alt = altText;
}

//Update displayed base price
function changeDisplayedBasePrice(){
    document.getElementById("totalPrice").innerHTML = basePrice;
}

//Add event listeners for select changes
document.getElementById("glazingOptions").addEventListener('change', updateOrderPrice);
document.getElementById("packSize").addEventListener('change', updateOrderPrice);

//Add event listener for cart botton click
document.getElementById("addIt").addEventListener('click', addItToCart);

//Calculate roll price from given prarementar
function calculateOrderPrice(glazeOption, packSize) {
    glazePremium = rollType.value;
    packMultiplier = parseFloat(document.getElementById("packSize").value);
    basePrice = 
    price = (basePrice + glazePremium)*packMultiplier;
   
    document.getElementById("totalPrice").innerHTML = price.toFixed(2);
}

//Update displayed price from current roll detail
function updateOrderPrice() {
    glazePremium = parseFloat(document.getElementById("glazingOptions").value);
    packMultiplier = parseFloat(document.getElementById("packSize").value);
    price = (basePrice + glazePremium)*packMultiplier;
   
    document.getElementById("totalPrice").innerHTML = price.toFixed(2);
}

//Add current roll from detial page to cart
function addItToCart (){
    const glazeOption = document.getElementById('glazingOptions').value;
    const sizeOption = document.getElementById('packSize').value;

    const newRoll = new Roll(rollType, glazeOption, sizeOption, basePrice)
    cart.push(newRoll);
    console.log(cart);
}