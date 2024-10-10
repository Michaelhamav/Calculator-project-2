function calculator(){

    let number1 = document.getElementById("number1").value
    let number2 = document.getElementById("number2").value
    let operator = document.getElementById("operator").value


    // function checkInput(input) {
    //     if (input === undefined) {
    //       alert("Input is undefined. Please provide a value.");
    //     } else {
    //       console.log("Input value:", input);
    //     }
    //   }
      
    //   const userInput = prompt("Enter a value:");
    //   checkInput(userInput);

    let result;

    switch (operator) {
        case "add":
          result = Number(number1) + Number(number2);
          break;
      }
    switch (operator) {
        case "subtract":
            result = Number(number1) - Number(number2);
            break;
    }
    switch (operator) {
        case "multiply":
            result = Number(number1) * Number(number2);
            break;
    }
    switch (operator) {
        case "divide":
            result = Number(number1) / Number(number2);
            break;
    }
    switch (operator) {
        case "exponential":
            result = Number(number1) ** Number(number2);
            break;
    }

    let resultTag = document.getElementById("result");
    resultTag.innerHTML = `Result: ${result}`;
}