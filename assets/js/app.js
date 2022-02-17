const expensesBtn = document.getElementById('expenses-btn');

function inputAmount(inputId) {
    const amountElement = document.getElementById(inputId);
    const totalAmountText = amountElement.value;
    const totalAmount = parseFloat(totalAmountText);

    amountElement.value = '';
    return totalAmount;
}

expensesBtn.addEventListener('click', function() {
    const totalExpenses = document.getElementById('total-amount');

    const foodExpenses = inputAmount('food');
    const rentExpenses = inputAmount('rent');
    const clothesExpenses = inputAmount('clothes');

    const newTotalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    totalExpenses.innerText = newTotalExpenses;

    console.log(newTotalExpenses)
})