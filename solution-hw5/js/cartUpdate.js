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

//Set empty cart array
let cart = [];

//Define roll class 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.rollImageURL = "assets/products/" + rolls[rollType].imageFile;
    }
}

function calculateOrderPrice(base, glazePremium, packMultiplier){
    price = (base + glazePremium)*packMultiplier;
    return price;
}

//Create roll and add it to cart 
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll (rollType, rollGlazing, packSize, basePrice);

    cart.push(newRoll);
    return newRoll;
}

//Create element with content correspondng to roll
function createElement(roll) {
    //Make clone of template
    const template = document.querySelector("#cart-item");
    const clone = template.content.cloneNode(true);

    //Connect clone to roll.element
    roll.element = clone;

    //Add item clone to dom under cart item parent
    const cartListElement = document.querySelector("#cart-item-list");
    cartListElement.prepend(roll.element);


    
    //Populate element with roll information
    //updateElement(roll);

    //Add functionality to remove button
    
    /*
    const btnDelete = roll.element.querySelector("icon-remove");
    console.log(btnDelete);
    btnDelete.addEventListner('click', () => {
        deleteRollItem(roll);
    })
    */
}

function updateElement(roll){
    //get HTML elements that need updation
    const cartImg = roll.element.querySelector(".cart-img");
    const rollName = roll.element.querySelector(".roll-name");
    const glazeType = roll.element.querySelector(".glazeType");
    const packSize = roll.element.querySelector(".pack-size");
    const cartItemPrice = roll.element.querySelector(".cart-item-price");

    console.log(cartImg, rollName, glazeType, packSize, cartItemPrice);

    console.log(roll.rollImageURL);
    //Copy roll content to HTML element
    cartImg.src =  roll.rollImageURL;
    rollName.textContent = roll.type + " Cinnamon Roll";
    glazeType.textContent = roll.glazing;
    packSize.textContent = roll.size;
    cartItemPrice.textContent = roll.rollPrice;
};

//deletes roll item upon press of icon-remove class
function deleteRollItem(roll){
    //Remove roll DOM object from UI
    roll.element.remove();
    //Remove roll object from cart array
    const index = cart.indexOf(roll);
    if (index > -1) {
        cart.splice(index, 1)
    }
    console.log(cart);
}
//Make 4 new roll objects 
const roll1 = addNewRoll(
    "Original",
    "Sugar Milk",
    "1",
    rolls["Original"].basePrice
);

const roll2 = addNewRoll(
    "Walnut",
    "Vanilla Milk",
    "12",
    rolls["Walnut"].basePrice
);

const roll3 = addNewRoll(
    "Raisin",
    "Sugar Milk",
    "3",
    rolls["Raisin"].basePrice
);

const roll4 = addNewRoll(
    "Apple",
    "Keep Original",
    "3",
    rolls["Apple"].basePrice
);

for (const roll of cart){
    createElement(roll);
}