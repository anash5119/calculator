let num1 = "";
let num2 = ""; 
let operator = "";
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
  console.log(numbers);
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
}

function display(id){
    //const display = document.querySelector(".display");

    if(id == "clear"){
        num1 = "";
        num2 = "";
        operator = "";
        chaining = false; 
        console.log("after clear:" + num1 + num2 + operator);
        displayContent.textContent = "";
    }
    else{
        displayContent.textContent = id;
    }
}

function storeNum(id){
    if(!chaining && operator == ""){
        num1 += id;
        display(num1);
    }
    else if(chaining){
        display("clear");
        storeNum(id);
    }
    else{
        num2 += id;
        display(num2);
    }

    // if(num1 == undefined || num1 == ""){
    //     num1 = id;
    //     console.log(num1);
    // }
    // else{
    //     num2 += id;
    //     console.log(num2);
    // }
    //display(id);
}

function storeOperator(id){
    if(operator != undefined || operator != ""){
        operate();
        operator = id;
    }
    else{
        operator = id;
        console.log(operator);
    }
    chaining = false;
    display(id);
}