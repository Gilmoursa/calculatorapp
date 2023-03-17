let result = document.getElementById("result");

function addToResult(value) {
    if (result.innerHTML == "0") {
        result.innerHTML = "";
    }
    result.innerHTML += value;
}

function clearResult() {
    result.innerHTML = "0";
}

function calculateResult() {
    result.innerHTML = eval(result.innerHTML);
}
