const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
    
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro){
     
    let valueInYen = valueInEuro * 156.5; 
    
    return valueInYen; 
}

const fromYenToPound = function(valueInEuro) {

    let valueInYen = valueInEuro * 0.87; 

    return valueInYen;
}


const sum = (a,b) => {
    return a + b; 
}

console.log(sum(7,3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }; 