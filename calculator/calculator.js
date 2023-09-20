let sumClick = document.getElementById('sumBtn');
sumClick.addEventListener('click',add);


function add(event) {
    console.log('The event is: ', event);
    let input1 = document.getElementById('inputOne').value;
    console.log('input1: ', typeof(input1), input1)

    let input2 = document.getElementById('inputTwo').value;
    console.log('input2: ', typeof(input2), input2)

    let result = document.getElementById('inputResults');
    console.log('result: ', typeof(result), result)

    let sum = parseFloat(input1) + parseFloat(input2);
    console.log('sum: ',typeof(sum),  sum)

    result.value = sum;
}

let subtractClick = document.getElementById('subtractionBtn');
subtractClick.addEventListener('click',subtract)

function subtract(event) {
    console.log('The event is: ', event);
     let input1 = document.getElementById('inputOne').value;
    let input2 = document.getElementById('inputTwo').value;
    let result = document.getElementById('inputResults');
    let subtraction = parseFloat(input1) - parseFloat(input2);
    result.value = subtraction;

    console.log('Subtraction is: ', subtraction); 
}

let multiplyClick = document.getElementById('multiplicationBtn');
multiplyClick.addEventListener('click',multiply)

function multiply(event) {
    console.log('el The event is: ', event);
     let input1 = document.getElementById('inputOne').value;
    let input2 = document.getElementById('inputTwo').value;
    let result = document.getElementById('inputResults');
    let multiplication = parseFloat(input1) * parseFloat(input2);
    result.value = multiplication;

    console.log('X is: ', multiplication); 
}

let divisionClick = document.getElementById('divisionBtn');
divisionClick.addEventListener('click',division)

function division(event) {
    console.log('The event is: ', event);
     let input1 = document.getElementById('inputOne').value;
    let input2 = document.getElementById('inputTwo').value;
    let result = document.getElementById('inputResults');
    let division = parseFloat(input1) / parseFloat(input2);
    result.value = division;

    console.log('Division is: ', division); 
}