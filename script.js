let num1;
let num2; 
let operator;


function add(firstNum, secondNum) {
	return +firstNum + +secondNum; 
};

function subtract(firstNum, secondNum) {
	return firstNum - secondNum;
};

function multiply(...numbers) {
  let product = 1;
  for (const number of numbers){
    product = product * number;
  }
    return product;
};

function divide(firstNum, secondNum){
    return firstNum/secondNum; 
}

function operate(){
    if(num1 == undefined || num2 == undefined || operator == undefined){return}
    if(operator == "+"){
        display(add(num1, num2));
        num1 = add(num1, num2);
    }
    else if(operator == "-"){
        display(subtract(num1, num2));
        num1 = add(num1, num2);
    }
    else if(operator == "*"){
        display(multiply(num1, num2));
        num1 = add(num1, num2);
    }
    else if(operator == "/"){
        display(divide(num1, num2));
        num1 = add(num1, num2);
    }
}

function display(id){
    const display = document.querySelector(".display");

    if(id == "clear"){
        num1 = "";
        num2 = "";
        operator = "";
        display.textContent = "";
    }
    else{
        display.textContent = id;
    }
}

function storeNum(id){
    if(num1 == undefined){
        num1 = id;
    }
    else{
        num2 = id;
    }
    display(id);
}

function storeOperator(id){
    operator = id;
    display(id);
}