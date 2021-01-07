const defaultResult = 0;
let currentResult = defaultResult;

// Gets input from input field
function getUserNumberInput(){
    return parseInt(userInput.value);
}

// Generates writes calculation log
function createAndWriteOutput(resultBeforeCalc, operator, resultAfterNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${resultAfterNumber}`; 
    outputResult(currentResult, calcDescription); //from vendor.js

function add() {
    const initialResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult += enteredNumber;
    createAndWriteOutput(initialResult, '+', enteredNumber);
}

function subtract() {
    const initialResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult -= enteredNumber;
    createAndWriteOutput(initialResult, '-', enteredNumber);
}

function multiply() {
    const initialResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult *= enteredNumber;
    createAndWriteOutput(initialResult, '*', enteredNumber)
}

function divide() {
    const initialResult = currentResult;
    const enteredNumber = getUserNumberInput();
    currentResult /= enteredNumber;
    createAndWriteOutput(initialResult, '/', enteredNumber)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
