let num1 = "";
let num2 = ""; 
let operator = "";
let num1Dec = false;
let num2Dec = false;
let chaining = false; //used to show if you are chaining operations

const displayContent = document.querySelector(".display");


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
        chaining = true; 
        num1 = add(num1, num2);
        console.log("after equals:" + num1);
        }
    else if(operator == "-"){
        display(subtract(num1, num2));
        num1 = subtract(num1, num2);
        console.log("after equals:" + num1);
    }
    else if(operator == "*"){
        display(multiply(num1, num2));
        num1 = multiply(num1, num2);
        console.log("after equals:" + num1);
    }
    else if(operator == "/"){
        if(num2 == 0){
            displayContent.textContent = "You can't divide by 0 you donut"
        }
        else{
            display(divide(num1, num2));
            num1 = divide(num1, num2);
            console.log("after equals:" + num1);
        }
        
    }
    num2 = "";
    chaining = true; 
    document.getElementById("decimal").disabled = false;
}

function display(value){
    //const display = document.querySelector(".display");

    if(value == "clearEverything"){
        num1 = "";
        num2 = "";
        operator = "";
        chaining = false; 
        document.getElementById("decimal").disabled = false;
        displayContent.textContent = "0";
    }
    else if(value == "clear"){
        displayContent.textContent = "0";
        document.getElementById("decimal").disabled = false;
        if(num2 != "" && !chaining){
            num2 = "";
            displayContent.textContent = operator;
        }
        else if(operator != ""){
            operator = "";
            displayContent.textContent = num1;
        }
        else if(num1 != "" && !chaining){
            num1 = "";
            displayContent.textContent = "0";
        }
        else{
            display("clearEverything");
        }
    }
    else{
        displayContent.textContent = value;
    }
}

function storeNum(value){
    if(value == "."){
        document.getElementById("decimal").disabled = true;
    }

    if(!chaining && operator == ""){
        num1 += value;
        display(num1);
        console.log(num1);
    }
    else if(chaining){
        display("clear");
        storeNum(value);
    }
    else{
        num2 += value;
        display(num2);
    }
}

function storeOperator(value){
    if(operator != undefined || operator != ""){
        operate();
        operator = value;
    }
    else{
        operator = value;
        console.log(operator);
    }
    chaining = false;
    display(value);
}