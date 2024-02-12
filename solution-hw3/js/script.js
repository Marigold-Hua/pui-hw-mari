/** const basePrice = 2.49;
const order = ["Double chocolate", 1]
const priceEffect = [];
//need to check if changePriceEffect updates global priceEffect -->
// might need to do priceEffect = this.priceEffect
console.log(updateCost(changePriceEffect(order)));

//NEED to empty array
document.getElementById("glazingOptions").addEventListener("click", displayDate);

element
function changePriceEffect(orderDetails){
    //Matches selected glazing to price effect
    if (orderDetails[0]=== "Vanilla milk") {
        priceEffect.push(0.5);
    }
    else if(orderDetails[0]=== "Double chocolate") {
        priceEffect.push(1.5);
    }
    else {
        priceEffect.push(0);
    }
        
    if (orderDetails[1]=== 1) {
        priceEffect.push(1);
    }
    else if(orderDetails[1]=== 3) {
        priceEffect.push(3);
    }
    else if(orderDetails[1]=== 6) {
        priceEffect.push(5);
    }
    else {
        priceEffect.push(10);
    }
    
    return priceEffect;
}

function updateCost(costParameters){
    return (basePrice + costParameters[0])*costParameters[1];
}

const order = 
{
    orderGlaze: "This is the glazing of the order",
    orderSize: "This is the pack size of the order"
};


**/
let glazeType = "";
let packSize = "";
let glazePremium = "";
let packSizeMultiplier = "";

function updateOrder() {
    glazeType = document.getElementById("glazingOptions").value;
    packSize = document.getElementById("packSize").value;
    console.log(glazeType, " ", packSize);
}

function matchPriceEffect() {

}

document.getElementById("glazingOptions").addEventListener('change', updateOrder);
document.getElementById("packSize").addEventListener('change', updateOrder);
/** 
 * 
let glazeType = "";
let packSize = "";
let glazePremium = "";
let packSizeMultiplier = "";

function updateOrder() {
    glazeType = document.getElementById("glazingOptions").value;
    packSize = document.getElementById("packSize").value;
    matchPriceEffect(glazeType, packSize);
}


function matchPriceEffect(glazeType, packSize) {
    if (glazeType === "Vanilla milk") {
        glazePremium = 0.5;
    }
    else if(glazeType === "Double chocolate") {
        glazePremium = 1.5;
    }
    else {
        glazePremium = 0;
    }
        
    if (packSize === 1) {
        packSizeMultiplier = 1;
    }
    else if(packSize === 3) {
        packSizeMultiplier = 3;
    }
    else if(packSize === 6) {
        packSizeMultiplier = 5;
    }
    else {
        packSizeMultiplier = 10;
    }

    console.log(glazeType, glazePremium, packSize, packSizeMultiplier);
    
}

document.getElementById("glazingOptions").addEventListener('change', updateOrder());
document.getElementById("packSize").addEventListener('change', updateOrder()); 
**/