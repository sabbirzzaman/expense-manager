const expensesBtn = document.getElementById('expenses-btn');

const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clothesInput = document.getElementById('clothes');


function expenseAmount(amountInput) {
    const amountText = amountInput.value;
    const amount = parseFloat(amountText);

    amountInput.value = '';
    return amount;
}

expensesBtn.addEventListener('click', function() {
    const totalExpenses = document.getElementById('total-expenses');
    const totalBalance = document.getElementById('total-balance');

    const income = expenseAmount(incomeInput);
    
    const food = expenseAmount(foodInput)
    const rent = expenseAmount(rentInput)
    const clothes = expenseAmount(clothesInput)

    const totalExpensesAmount = food + rent + clothes;

    totalExpenses.innerText = totalExpensesAmount;
    totalBalance.innerText = income - totalExpensesAmount;

})


// Invalid Input: Please Enter a Number Value
// Invalid Input: Please Enter a Positive Value