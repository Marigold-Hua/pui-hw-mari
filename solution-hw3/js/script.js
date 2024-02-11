//context - use .onchange event to listen for when select value changes
//question - can you walk through the two steps - specifically what event listener and event handler are and how they work together?
//Glazing option event handler
/*
function onGlazingUpdate() {
    alert("Glazing updated!");
}

document.querySelector("#glazingOptions").addEventListener("click", onUpdateClick)

const glazingSelected = document.getElementByID("glazingOptions");
console.log(glazingSelected);

function glazingChange(element) {
    // get value of selected glazing option
    // const priceChange = Product;
    // code to update price
}
 */
//Select priceCalculated element - might want to use getElementByID instead?
let priceCalc = document.querySelector(".priceCalculated");
//Seperate by each element that's changing? in my mind p much same logic for glazing and pack size 
//Then result of logic for two streams is combined for final price changes
let glazingSelected = priceCalc.value;
//Check that correct element is selected: console.log(priceCalc);
//Trying to get what is selected

priceCalc.onChange = changedSelection(); 

function changedSelection() {
    var glazingSelected = priceCalc.value;
    var text = priceCalc[else.selectedIndex].text;
}