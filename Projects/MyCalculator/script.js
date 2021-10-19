"use strict";
let currentNumber = 0;
let result = 0;
let operator = "";
let flag = 0; // flag = 1(cờ lên) thì màn hình trở thành 0, sẵn sàng cho nhập số tiếp theo
// flag = 0(cờ hạ) thì màn hình hiện kết quả. 

let setCurrentNumber = function(num) {
    currentNumber = num;
}
let setResult = function(num) {
    result = num;
}
let setOperator = function(op) {
    operator = op;
    flag = 1;
}

let add = function add(a, b) {
    return a + b;
}
let minus = function minus(a, b) {
    return a - b;
}
let multiply = function multiply(a, b) {
    return a * b;
}
let division = function division(a, b) {
    return a / b;
}
let modulus = function modulus(a, b) {
    return a % b;
}

let printToCalculatingScreen = function(content) {
    let screen = document.getElementById("calculating");
    screen.value = content;
}

let printToScreen = function(content) {
    let screen = document.getElementById("result");
    screen.value = content;
}

let getValueFromScreen = function() {
    let screen = document.getElementById("result");
    return screen.value;
}

let numberInput = function(btn) { //Nhận vào button thì lấy giá trị của button đó ra
    let value = btn.value; // "7"
    let currentScreen = getValueFromScreen(); // "0"
    //When screen is 0
    if (flag === 1) {
        currentScreen = "0";
        flag = 0;
    }
    if (currentScreen === "0") {
        if (value === ".") {
            printToScreen(currentScreen + value);
        } else {
            printToScreen(value);
        }
    }
    //When screen is not 0
    else {
        if (value === ".") {
            if (currentScreen.indexOf(".") === -1) {
                printToScreen(currentScreen + value);
            } else {}
        } else {
            printToScreen(currentScreen + value);
        }
    }
}

let calculate = function() {
    switch (operator) {
        case "+":
            setResult(add(result * 10, currentNumber * 10) / 10);
            printToScreen(result);
            break;
        case "-":
            setResult(minus(result * 10, currentNumber * 10) / 10);
            printToScreen(result);
            break;
        case "*":
            setResult(multiply(result * 10, currentNumber * 10) / 10);
            printToScreen(result);
            break;
        case "/":
            if (currentNumber === 0) {
                printToScreen("Cannot devide by zero");
                break;
            }
            setResult(division(result * 10, currentNumber * 10) / 10);
            printToScreen(result);
            break;
        case "%":
            setResult(modulus(result * 10, currentNumber * 10) / 10);
            printToScreen(result);
            break;
    }
}

let operatorInput = function(btn) {
    let operator = btn.value;
    let currentScreen = getValueFromScreen();
    switch (operator) {
        case "+":
            printToCalculatingScreen(currentScreen + " " + operator);
            setCurrentNumber(Number(currentScreen));
            setOperator("+");
            setResult(Number(currentScreen));
            break;
        case "-":
            printToCalculatingScreen(currentScreen + " " + operator);
            setCurrentNumber(Number(currentScreen));
            setOperator("-");
            setResult(Number(currentScreen));
            break;
        case "*":
            printToCalculatingScreen(currentScreen + " " + operator);
            setCurrentNumber(Number(currentScreen));
            setOperator("*");
            setResult(Number(currentScreen));
            break;
        case "/":
            printToCalculatingScreen(currentScreen + " " + operator);
            setCurrentNumber(Number(currentScreen));
            setOperator("/");
            setResult(Number(currentScreen));
            break;
        case "%":
            printToCalculatingScreen(currentScreen + " " + operator);
            setCurrentNumber(Number(currentScreen));
            setOperator("%");
            setResult(Number(currentScreen));
            break;
        case "=":
            if (flag === 0) {
                setCurrentNumber(Number(currentScreen));
            }
            calculate();
            printToCalculatingScreen("");
            flag = 1;
            break;
    }
}

let del = function() {
    let currentScreen = getValueFromScreen();
    if (flag === 0 && currentScreen !== "0") {
        let afterDel;
        afterDel = currentScreen.substring(0, currentScreen.length - 1);
        printToScreen(afterDel);
    }
}

let clearAll = function() {
    printToScreen("0");
    printToCalculatingScreen("");
    setCurrentNumber("0");
    setOperator("");
    setResult("0");
}

let operatorButton = document.querySelectorAll('.operator');
operatorButton.forEach(function(oppbutton) {
    oppbutton.addEventListener('click', function() {
        operatorInput(oppbutton);
    });
});