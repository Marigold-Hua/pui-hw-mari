const order = ["Sugar milk", 12]
const priceEffect = [];
//need to check if changePriceEffect updates global priceEffect -->
// might need to do priceEffect = this.priceEffect
console.log(changePriceEffect(order))

function changePriceEffect  (orderDetails){
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
