//ADD
function add(a, b) {
    displayValue = Number(a) + Number(b);
    return display.textContent = displayValue;
}
let addBtn = document.querySelector("#plus");
//FUNC FOR ADD BUTTON
function addB(val) {
    if (sign && !newEqual){
        firstop = operate(value, sign, displayValue);
    };
    newEqual = null;
    value = val;
    sign = '+';
    if (firstop) {
        displaySign.textContent = firstop + sign;
    } else {
        displaySign.textContent = value + sign;
    };
    return display.textContent = (displayValue = "");
}
//ADD BUTTON
addBtn.addEventListener('click', () => {
    addB(displayValue)
});


//SUBTRACT
function subtract(a, b) {
    displayValue = Number(a) - Number(b);
    return display.textContent = displayValue;
}
let subBtn = document.querySelector("#minus");
//FUNC FOR SUBTRACT BUTTON
function subB(val) {
    if (sign && !newEqual){
        firstop = operate(value, sign, displayValue);
    };
    newEqual = null;
    value = val;
    sign = '-';
    if (firstop) {
        displaySign.textContent = firstop + sign;
    } else {
        displaySign.textContent = value + sign;
    }
    return display.textContent = (displayValue = "");
}
//SUBTRACT BUTTON
subBtn.addEventListener('click', () => {
    subB(displayValue)
});


//MULTIPLY
function multiply(a, b) {
    displayValue = Number(a) * Number(b);
    return display.textContent = displayValue;
}
let multBtn = document.querySelector("#times");
//FUNC FOR MULTIPLICATION BUTTON
function multB(val) {
    if (sign && !newEqual){
        firstop = operate(value, sign, displayValue);
    };
    newEqual = null;
    value = val;
    sign = '*';
    if (firstop) {
        displaySign.textContent = firstop + sign;
    } else {
        displaySign.textContent = value + sign;
    }
    return display.textContent = (displayValue = "");
}
//MULTIPLICATION BUTTON
multBtn.addEventListener('click', () => {
    multB(displayValue)
});


//DIVIDE
function divide(a, b) {
    displayValue = Number(a) / Number(b);
    return display.textContent = displayValue;
}
let divBtn = document.querySelector("#divide");
//FUNC FOR DIVIDE BUTTON
function divB(val) {
    if (sign && !newEqual){
        firstop = operate(value, sign, displayValue);
    };
    newEqual = null;
    value = val;
    sign = '/';
    if (firstop) {
        displaySign.textContent = firstop + sign;
    } else {
        displaySign.textContent = value + sign;
    }
    return display.textContent = (displayValue = "");
}
//DIVIDE BUTTON
divBtn.addEventListener('click', () => {
    divB(displayValue)
});



//EQUALS
function operate(a, operator, b) {
    displaySign.textContent = "";
    if (firstop) {
        a = firstop;
    };
    if (operator === '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        if (a == '0' && b == '0') {
            return display.textContent = "ERROR";
        } else {
            return divide(a, b);
        }
    }
}
//EQUALS BUTTON
let equals = document.querySelector("#equal");
equals.addEventListener('click', () => {
    operate(value, sign, displayValue); newEqualPlus();
});
//MORE THAN ONE OPERATOR IN ONE EQUATION
function newEqualPlus() {
    return newEqual++;
};


//DISPLAY
let displayValue = "";
let display = document.querySelector(".display");
display.textContent = displayValue;
let displaySign = document.querySelector(".sign");



//VARIABLES
let value;
let sign;
let firstop;
let newEqual;



//CLEAR BUTTON
let clearBtn = document.querySelector("#clear");
function clear() {
    firstop = null;
    value = null;
    sign = null;
    newEqual = null;
    displaySign.textContent = "";
    display.textContent = (displayValue = "");
}
clearBtn.addEventListener('click', clear);


//NUMBER BUTTONS
let oneBtn = document.querySelector("#one");
function one() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 1;
    } else {
        return display.textContent = displayValue += "1";
    }
}
oneBtn.addEventListener('click', one);

let twoBtn = document.querySelector("#two");
function two() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 2;
    } else {
        return display.textContent = displayValue += "2";
    }
}
twoBtn.addEventListener('click', two);

let threeBtn = document.querySelector("#three");
function three() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 3;
    } else {
        return display.textContent = displayValue += "3";
    }
}
threeBtn.addEventListener('click', three);

let fourBtn = document.querySelector("#four");
function four() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 4;
    } else {
        return display.textContent = displayValue += "4";
    }
}
fourBtn.addEventListener('click', four);

let fiveBtn = document.querySelector("#five");
function five() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 5;
    } else {
        return display.textContent = displayValue += "5";
    }
}
fiveBtn.addEventListener('click', five);

let sixBtn = document.querySelector("#six");
function six() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 6;
    } else {
        return display.textContent = displayValue += "6";
    }
}
sixBtn.addEventListener('click', six);

let svnBtn = document.querySelector("#seven");
function seven() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 7;
    } else {
        return display.textContent = displayValue += "7";
    }
}
svnBtn.addEventListener('click', seven);

let eightBtn = document.querySelector("#eight");
function eight() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 8;
    } else {
        return display.textContent = displayValue += "8";
    }
}
eightBtn.addEventListener('click', eight);

let nineBtn = document.querySelector("#nine");
function nine() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 9;
    } else {
        return display.textContent = displayValue += "9";
    }
}
nineBtn.addEventListener('click', nine);

let zeroBtn = document.querySelector("#zero");
function zero() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = 0;
    } else {
        return display.textContent = displayValue += "0";
    }
}
zeroBtn.addEventListener('click', zero);


//OTHER BUTTONS
let deciBtn = document.querySelector("#deci");
function deci() {
    if (newEqual) {
        clear();
        return display.textContent = displayValue = '.';
    } else if (displayValue.includes('.')){
        return display.textContent = displayValue;
    } else {
        return display.textContent = displayValue += '.';
    }
}
deciBtn.addEventListener('click', deci);

let backBtn = document.querySelector("#basp");
function back() {
    displayValue = displayValue.substring(0, displayValue.length - 1);
    return display.textContent = displayValue;
}
backBtn.addEventListener('click', back);

let percBtn = document.querySelector("#perc");
function perc() {
    displayValue /= 100;
    return display.textContent = displayValue;
}
percBtn.addEventListener('click', perc);