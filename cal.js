function data(val) {
    calc.Display.value += val;
}

function ac() {
    calc.Display.value = "";
}

function c() {
    calc.Display.value = calc.Display.value.slice(0, -1);
}

function equal() {
    calc.Display.value = eval(calc.Display.value);
}