//Roll class constructor
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

//Define empty cart array
let cart = [];

//Retrieve cart from local storage if array is not null
if (localStorage.getItem('storedRolls') != null){
    retrieveFromLocStorage();
}

function retrieveFromLocStorage(){
    const rollArrayString = localStorage.getItem('storedRolls');
    const rollArray = JSON.parse(rollArrayString);
    for(const rollData of rollArray){
        const roll = new Roll(rollData.type, rollData.glazing, 
            rollData.size, rollData.basePrice);
        cart.push(roll);
    }
    console.log(cart);
}

//Appropriate key:value price for glazing + size's effect on price
const glazeList = {
    "Keep Original": 0.0,
    "Sugar Milk": 0.0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
};

const sizeList = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
};

//Function for creating new roll anbd adding to cart set
function addNewRoll(rollType, rollGlazing, packSize, rollPrice){
    //Create new roll with parameters
    const roll = new Roll(rollType, rollGlazing, packSize, rollPrice);

    //Add roll to cart array, tracking all rolls in cart
    cart.push(roll);

    return roll;
}

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
    const itemPrice = (roll.basePrice + glazePremium)*packMultiplier;
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
    if (index > -1){
        Array.splice(index, 1);
    }
    updateCartPrice();
}

for (const roll of cart) {
    createElement(roll);
};

