// Select elements
const expensesBtn = document.getElementById('expenses-btn');

const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clothesInput = document.getElementById('clothes');

// Input field value
function expenseAmount(amountInput) {
  const amountText = amountInput.value;
  const amount = parseFloat(amountText);

  amountInput.value = '';
  return amount;
}

// Input error
function inputError(inputName, errorName) {
  if (inputName <= 0) {
    errorName.innerText = 'Please Enter a Positive Value';
  } else if (isNaN(inputName)) {
    errorName.innerText = 'Invalid Input: Please Enter a Number Value';
  } else if (inputName > 0 && isNaN(inputName) == false){
    errorName.innerText = '';
  }
}

// Event listener for calculate button
expensesBtn.addEventListener('click', function () {
  // Select total calculation elements
  const totalExpenses = document.getElementById('total-expenses');
  const totalBalance = document.getElementById('total-balance');

  //   Select input error elements
  const incomeError = document.getElementById('income-error');
  const foodError = document.getElementById('food-error');
  const rentError = document.getElementById('rent-error');
  const clothesError = document.getElementById('clothes-error');
  const totalError = document.getElementById('total-error');

  // Input calculation
  const income = expenseAmount(incomeInput);
  const food = expenseAmount(foodInput);
  const rent = expenseAmount(rentInput);
  const clothes = expenseAmount(clothesInput);

  // Total expense amount
  const totalExpensesAmount = food + rent + clothes;

  // Total income and expense
  if (income > 0 && totalExpensesAmount < income) {
    totalExpenses.innerText = totalExpensesAmount;
    totalBalance.innerText = income - totalExpensesAmount;
  }

  // total calculation error
  if(totalExpensesAmount > income) {
    totalError.innerText = "Invalid Input: Total expenses can't be bigger then Income";
  }

  // Add Errors to the input
  inputError(income, incomeError);
  inputError(food, foodError);
  inputError(rent, rentError);
  inputError(clothes, clothesError);
});