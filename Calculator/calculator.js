// calculator.js

let expression = '';
let log = '';

function updateScreen() {
    document.getElementById('screen').textContent = expression || '0';
    document.getElementById('log').textContent = log;
}

function appendValue(val) {
    expression += val;
    updateScreen();
}

function clearAll() {
    expression = '';
    log = '';
    updateScreen();
}

function clearEntry() {
    expression = expression.slice(0, -1);
    updateScreen();
}

function calculate() {
    try {
        log = expression + ' =';
        expression = eval(expression).toString();
    } catch {
        expression = 'Error';
    }
    updateScreen();
}