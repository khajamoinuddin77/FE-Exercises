function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;

    var result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Cannot divide by zero!");
                return;
            }
            break;
        default:
            alert("Invalid operation");
            return;
    }

    var resultWindow = window.open("", "Result", "width=150,height=100");
    resultWindow.document.write("<h2>Result:</h2>");
    resultWindow.document.write("<p>" + result + "</p>");
}
