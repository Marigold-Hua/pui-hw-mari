//Databse of roll information
const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg",
        "altText": "Plain cinnamon roll with cinnamon sticks on plate"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg",
        "altText": "Apple cinnamon roll on plate with fork"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg",
        "altText": "Raisin cinnamon roll close-up"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg",
        "altText": "Walnut cinnamon roll aerial view on plate with cinnamon sticks on plate nearby"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg",
        "altText": "Double chocolate cinnamon roll closeup in newspaper wrap"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg",
        "altText": "Strawberry cinnamon roll lolllipops with strawberries"
    }    
};

//Define roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
};

//Define empty cart array
let cart = [];

//Define glaze key:value pairs
const glazeList = {
    "Keep original": 0.0,
    "Sugar milk": 0.0,
    "Vanilla milk":  0.5,
    "Double chocolate":  1.5
};

//Define size key:value pairs
const sizeList = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
};
