const form = document.getElementById('form');
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people-number');
const customInput = document.getElementById('custom');
const percentInput = document.getElementsByClassName('percentage');
const billErrorMessage = document.getElementById('bill-error');
const peopleErrorMessage = document.getElementById('people-error');
const tipDisplay = document.getElementById('tip-per-person');
const totalDisplay = document.getElementById('total-per-person');
const resetBtn = document.getElementById('reset-button');

// Validating Functions 

function validateBill() {
    const validBill = /^([1-9]\d*(\.|\,)\d*|0?(\.|\,)\d*[1-9]\d*|[1-9]\d*)$/g;
    if (billInput.value.match(validBill)) {
        billErrorMessage.style.display = 'none';
    } else if (!billInput.value) {
        billErrorMessage.style.display = 'none';
    } else if (billInput.value === '0') {
        billErrorMessage.style.display = 'flex';
        billErrorMessage.innerText = "Can't be zero";
    } else {
        billErrorMessage.style.display = 'flex';
        billErrorMessage.innerText = 'Has to ba a number';
    };
}

billInput.addEventListener('keyup', () => {
    validateBill()
})

function validatePeople() {
    const validPeople = /^(0?[1-9]|[1-9][0-9])$/g;
    if (peopleInput.value.match(validPeople)) {
        peopleErrorMessage.innerText = '';
    } else if (!peopleInput.value) {
        peopleErrorMessage.innerText = '';
    } else if (peopleInput.value === '0') {
        peopleErrorMessage.style.display = 'flex';
        peopleErrorMessage.innerText = "Can't be zero";
    } else {
        peopleErrorMessage.style.display = 'flex';
        peopleErrorMessage.innerText = 'Has to be a number';
    }
}

peopleInput.addEventListener('keyup', () => {
    validatePeople();
})

/// Calculating function

function calculate() {
    for (let i = 0; i < percentInput.length; i++) {
        percentInput[i].addEventListener('click', () => {
            let firedButton = Number(percentInput[i].value);
            console.log(firedButton);
            let tipPerPerson = (billInput.value * (firedButton / 100)) / peopleInput.value; // Tip per person
            console.log(tipPerPerson);
            let totalPerPerson = (billInput.value / peopleInput.value) + tipPerPerson;
            console.log(totalPerPerson); 
            tipDisplay.innerText = `\$${tipPerPerson.toFixed(2)}`;
            totalDisplay.innerText = `\$${totalPerPerson.toFixed(2)}`;
        }) 
    } 
}

calculate();

// TWILIGHT ZONE


// Highlight Function

function highlight() {
    for (let i = 0; i < percentInput.length; i++) {
        percentInput[i].addEventListener('click', () => {
            percentInput[i].style.backgroundColor = "var(--clr-strongcyan)";
            percentInput[i].style.color = "var(--clr-verydarkcyan)";
        })
    } 
}

highlight();

// Reset function

function reset() {
    billInput.value = '';
    peopleInput.value = '';
    percentInput.value = '';
    tipDisplay.innerText = '$0.00';
    totalDisplay.innerText = '$0.00';
    resetBtn.style.filter = 'brightness(50%)';
    for (let i = 0; i < percentInput.length; i++) {
        percentInput[i].style.backgroundColor = "";
        percentInput[i].style.color = "";
    };
    setTimeout(() => {
        resetBtn.style.filter = 'brightness(100%)';
      }, "1000");
    percentInput[5].value = '';
    percentInput[5].style = '';
}


resetBtn.addEventListener('click', () => {
    reset();
})

window.addEventListener('load', () => {
    reset();
})


