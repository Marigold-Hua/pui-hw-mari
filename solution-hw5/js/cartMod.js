/*
//Cart Info
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
//Note: Ask about how to reduce code redundancy by designing JS file with key:values
//that should be universal - attempted to add glazeList and sizeList to rollsData but script.js 
//ssemingly had troubles accessing it. 
//Should also have roll object defined universally

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
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

//Define cart with four rolls 
let cart = [
    new Roll("Original", "Sugar milk", "1", rolls["Original"].basePrice),
    new Roll("Walnut", "Vanilla milk", "12",rolls["Walnut"].basePrice ),
    new Roll("Raisin", "Sugar milk", "3", rolls["Raisin"].basePrice),
    new Roll("Apple", "Keep original", "3",rolls["Apple"].basePrice )
];

for (let i = 0; i < cart.length; i++) {
   addRollToDom(cart[i]);
};

//Add roll item to cart DOM
function addRollToDom (currentRoll) {
    //clone cart item template
    const template = document.querySelector("template");
    const clone = template.content.cloneNode(true);

    //connect clone to roll element
    const imagePath = "assets/products/" + rolls[currentRoll.type].imageFile;
    const type = currentRoll.type;
    const glaze = currentRoll.glazing;
    const size = currentRoll.size;
    const totalPrice = updateOrderPrice(currentRoll);
    console.log(imagePath, type, glaze, size, totalPrice);

}

//Update price of the roll based on type, glaze, and size
//I DO NOT KNOW WHY THE WALNUT IS BEING MISCALCULATED WHEN THE REST ARE WORKING
function updateOrderPrice (roll) {
    return((roll.basePrice + glazeList[roll.glazing])*roll.size).toFixed(2); 
}
