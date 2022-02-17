// Select elements
const expensesBtn = document.getElementById('expenses-btn');
const saveBtn = document.getElementById('save-btn');

const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clothesInput = document.getElementById('clothes');
const incomeElement = document.getElementById('hidden-value');

// Input field value
function calculateAmount(amountInput) {
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
  } else if (inputName > 0 && isNaN(inputName) == false) {
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
  const income = calculateAmount(incomeInput);
  const food = calculateAmount(foodInput);
  const rent = calculateAmount(rentInput);
  const clothes = calculateAmount(clothesInput);

  // Total expense amount
  const totalExpensesAmount = food + rent + clothes;

  // Total income and expense
  if (income > 0 && totalExpensesAmount < income) {
    totalExpenses.innerText = totalExpensesAmount;
    totalBalance.innerText = income - totalExpensesAmount;
    incomeElement.innerText = income;
  }

  // total calculation error
  if (totalExpensesAmount > income) {
    totalError.innerText =
      "Invalid Input: Expenditure can't be bigger than Income";
  } else if (totalExpensesAmount < income) {
    totalError.innerText = '';
  }

  // Add Errors to the input
  inputError(income, incomeError);
  inputError(food, foodError);
  inputError(rent, rentError);
  inputError(clothes, clothesError);
});

// Savings area event listener
saveBtn.addEventListener('click', function () {
  // Select saving elements
  const savingElement = document.getElementById('saving-amount');
  const savingInput = document.getElementById('save-input');
  const balanceElement = document.getElementById('total-balance');
  const remainingBalanceElement = document.getElementById('remaining-balance');
  const savingError = document.getElementById('saving-error');

  // saving parentage
  const saving = calculateAmount(savingInput);

  // Income input amount
  const incomeValue = parseFloat(incomeElement.innerText);
  const balanceAmount = parseFloat(balanceElement.innerText);

  // total saving amount
  const savingAmountTotal = (incomeValue * saving) / 100;

  // Total remaining balance
  const remainingBalance = balanceAmount - savingAmountTotal;

  if (balanceAmount >= savingAmountTotal) {
    savingElement.innerText = savingAmountTotal;
    remainingBalanceElement.innerText = remainingBalance;
    savingError.innerText = ""
  } else if (balanceAmount < savingAmountTotal) {
    savingError.innerText = "Invalid Input: You don't have enough money to save"
  }
});
