function calculator() {
    // Get the input values and operation
    let num1 = parseFloat(document.getElementById('input1').value);
    let num2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;
    let result = "";

    // Check for empty inputs
    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers!";
    } else {
        // Perform the selected operation
        switch (operation) {
            case "+":
                result = `${num1} + ${num2} = ${num1 + num2}`;
                break;
            case "-":
                result = `${num1} - ${num2} = ${num1 - num2}`;
                break;
            case "*":
                result = `${num1} * ${num2} = ${num1 * num2}`;
                break;
            case "/":
                if (num2 !== 0) {
                    result = `${num1} / ${num2} = ${num1 / num2}`;
                } else {
                    result = "Cannot divide by zero!";
                }
                break;
            default:
                result = "Invalid operation!";
        }
    }

    // Display the result with fade-in animation
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = result;
    resultDiv.classList.add('visible');
}
