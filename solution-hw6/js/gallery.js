let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.base = basePrice;
    }
}

retrieveFromLocStorage();
updateBadge();

if (localStorage.getItem('storedRolls') != null){
    retrieveFromLocStorage();
}

//Retrieve cart from local storage
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