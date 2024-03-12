//localStorage.clear();
//Define Roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.base = basePrice;
    }
}

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

//Declare empty cart
let cart = [];

//Retrieve cart from local storage if array is not null
if (localStorage.getItem('storedRolls') != null){
    retrieveFromLocStorage();
}

updateBadge();
//create element for each roll in cart
for (const roll of cart) {
    createElement(roll);
};

function createElement(roll){
    //make clone of cart item template
    const template = document.querySelector("#cart-item-template");
    const clone = template.content.cloneNode(true);

    //Connect clone to roll.element
    roll.element = clone.querySelector(".cart-item")

    //Add cart item clone to DOM under parent (#cart-list)
    const cartListElement = document.querySelector("#cart-list");
    cartListElement.append(roll.element);
    
    //Call function that updates elements in roll.element
    updateCartItem(roll);
}

function updateCartItem(roll){
    //Access DOM object children for roll
    const rollImg = roll.element.querySelector(".cart-img");
    const rollType =  roll.element.querySelector(".type");
    const glazing =roll.element.querySelector(".glaze");
    const pack = roll.element.querySelector(".pack-size");
    const calcPrice = roll.element.querySelector(".calc-item-price");

    //Update DOM object information to match corresponding roll
    rollImg.src = "assets/products/" + rolls[roll.type].imageFile;
    rollImg.alt = rolls[roll.type].altText;
    rollType.innerText = roll.type;
    glazing.innerText = roll.glazing;
    pack.innerText = roll.size;
    calcPrice.innerText = calcItemPrice(roll); 

    //Add remove functionality

    //Connect to remove element
    const btnRemove = roll.element.querySelector(".remove");;
    //Add event listener to Remove text
    btnRemove.addEventListener('click', () => {
        deleteRoll(roll)
    });

    //updates cart price
    updateCartPrice();
}

//Calculates and returns price of roll items
function calcItemPrice(roll){
    const glazePremium = glazeList[roll.glazing];
    const packMultiplier = sizeList[roll.size];
    const itemPrice = (roll.base + glazePremium)*packMultiplier;
    return itemPrice.toFixed(2);
}

//Updates cart cost html
function updateCartPrice(){
    const cartPrice = document.querySelector(".cart-cost");
    cartPrice.innerText = calcCartPrice();
}

//Calculates and returns price of cart array
function calcCartPrice(){
    let price = 0;
    for (const roll of cart) {
        price += parseFloat(calcItemPrice(roll));
    };
    return price.toFixed(2);
} 

//delete roll from DOM and cart
function deleteRoll(roll){
    //remove roll DOM object from UI
    roll.element.remove();

    //remove roll from cart array
    const index = cart.indexOf(roll);
    if (index > -1) {
        cart.splice(index, 1);
    }
    console.log(cart);

    //Update cart price
    updateCartPrice();

    //Update local storage
    saveToLocStorage();
    
    //Update displayed number in badge
    updateBadge();

}

//Updates local storage
function saveToLocStorage(){
    const rollArrayString = JSON.stringify(cart);
    console.log(rollArrayString);
    localStorage.setItem('storedRolls', rollArrayString);
}


//Retrieve roll information from local storagr
function retrieveFromLocStorage(){
    const rollArrayString = localStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    for(const rollData of rollArray){
        const roll = new Roll(rollData.type, rollData.glazing, 
            rollData.size, rollData.base);
        cart.push(roll);
    }
    console.log(cart);
}

function updateBadge(){
   const cartCount = cart.length;

   const badge = document.querySelector(".num-items");
   badge.innerText = cartCount;
}
