const billInput = document.getElementById("id-bill");
const showTip = document.getElementById("show-tip");
const showAmount = document.getElementById("show-amount");
const tipInput = document.getElementById("tip-percentage");
const numberOfPeopleInput = document.getElementById("number-of-people");
const calculateButton = document.getElementById("calculate-button");
const showTipPerPerson = document.getElementById("show-tip-per-person");
const showTotalPerPerson = document.getElementById("show-total-per-person");


let bill;
let tip;
let persons;
let calculateTip;
let calculateTipPerPerson;
let calculateTotalPerPerson;

calculateButton.addEventListener("click", () => {
    bill = billInput.value;
    tip = tipInput.value;
    persons = numberOfPeopleInput.value;

    calculateTip = (bill * tip) / 100;
    showTip.innerHTML = `${calculateTip}€`;
    showAmount.innerHTML = `is ${Number(bill) + calculateTip}€`;

    calculateTipPerPerson = (calculateTip / persons).toFixed(2);
    showTipPerPerson.innerText = `${calculateTipPerPerson}€`;

    calculateTotalPerPerson = Number(bill) / persons;
    showTotalPerPerson.innerText = `${calculateTotalPerPerson.toFixed(2)}€`;

});
