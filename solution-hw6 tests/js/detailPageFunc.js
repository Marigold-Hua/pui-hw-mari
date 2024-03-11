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
/** const basePrice = rolls[rollType].basePrice;
const imagePath = "assets/products/" + rolls[rollType].imageFile;
const fullName = rollType + " Cinnamon Roll";
const altText = rolls[rollType].altText;
**/

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
    price = (basePrice + glazePremium)*packMultiplier;
   
    document.getElementById("totalPrice").innerHTML = price.toFixed(2);
}

//Update glazing and pack size details after add to cart button click, prior to adding to cart
/* function setGlazeSize(){
    const glazeOption = document.getElementById('glazingOptions').value;
    const sizeOption = document.getElementById('packSize').value;
    addItToCart(rollType, glazeOption, sizeOption, basePrice);
} */

//Add current roll to cart
function addItToCart (){
    const glazeOption = document.getElementById('glazingOptions').value;
    const sizeOption = document.getElementById('packSize').value;

    const newRoll = new Roll(rollType, glazeOption, sizeOption, basePrice)
    cart.push(newRoll);
    console.log(cart);
}