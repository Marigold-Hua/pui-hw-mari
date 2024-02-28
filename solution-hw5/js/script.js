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

//Define roll class 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//Set empty cart array
let cart = [];

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

//Update displayed price
function updateOrderPrice() {
    glazePremium = parseFloat(document.getElementById("glazingOptions").value);
    packMultiplier = parseFloat(document.getElementById("packSize").value);
    price = calculateOrderPrice(basePrice, glazePremium, packMultiplier);
   
    document.getElementById("totalPrice").innerHTML = price.toFixed(2);
}

function calculateOrderPrice(base, glazePremium, packMultiplier){
    price = (base + glazePremium)*packMultiplier;
    return price;
}

//Add current roll to cart
function addItToCart (){
    const glazeOption = document.getElementById('glazingOptions').value;
    const sizeOption = document.getElementById('packSize').value;

    const newRoll = new Roll(rollType, glazeOption, sizeOption, basePrice)
    cart.push(newRoll);
    console.log(cart);
}

/*
//Define roll class 

//Update product detail page based on URL specs
function updateProductDetailPage(){
    //Save the values associated with cinnamon roll type from database
    const basePrice = rolls[rollType].basePrice;
    const imagePath = "assets/products/" + rolls[rollType].imageFile;
    const fullName = rollType + " Cinnamon Roll";
    const altText = rolls[rollType].altText;
    const glazePremium = parseFloat(document.getElementById("glazingOptions").value);
    const packMultiplier = parseFloat(document.getElementById("packSize").value);

    //Update DOM elements by roll type
    changeHeading(fullName);
    changeImage(imagePath), altText;
    changeDisplayedBasePrice(basePrice);
    updateOrderPrice(glazePremium, packMultiplier, basePrice);
}

//Update heading of detail page
function changeHeading(fullName){
    document.getElementById("roll-name").innerHTML = fullName;
}

//Update image to corresponding roll image
function changeImage(imagePath, altText){
    const currentImage = document.getElementById("roll-image");
    currentImage.src = imagePath;
    currentImage.alt = altText;
}

//Update displayed base price
function changeDisplayedBasePrice(basePrice){
    document.getElementById("totalPrice").innerHTML = basePrice;
}

//Add event listeners for select changes
document.getElementById("glazingOptions").addEventListener('change', updateProductDetailPage());
document.getElementById("packSize").addEventListener('change',updateProductDetailPage());

//Add event listener for cart botton click
document.getElementById("addIt").addEventListener('click', addItToCart);

//Update displayed price
function updateOrderPrice(glazePremium, packMultiplier, basePrice) {
    price = (basePrice + glazePremium)*packMultiplier;
    document.getElementById("totalPrice").innerHTML = price.toFixed(2);
}

//Add current roll to cart
function addItToCart (){
    const glazeOption = document.getElementById('glazingOptions').value;
    const sizeOption = document.getElementById('packSize').value;

    const newRoll = new Roll(rollType, glazeOption, sizeOption, basePrice)
    cart.push(newRoll);
    console.log(cart);
}
*/