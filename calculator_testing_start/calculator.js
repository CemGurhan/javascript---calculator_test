const sum = function(a, b){
    return a + b;
};

const subtract = (a,b) => a-b ;

const multiply = (a,b) => a*b;

const divide = (a,b) => a/b;

const modulus = (a,b) => a%b;

const even = a => {
    if(a%2==0){
        return true;
    }
    return false;
};

const odd = a => {
    if(a%2 == 1){
        return true;
    }
    return false;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
