let totalBudget = Number(localStorage.getItem("totalBudget")) || 0;

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addBudget() {
  let budgetInput = document.getElementById("budget");

  let budget = Number(budgetInput.value);

  if (budget <= 0) {
    alert("Please enter a valid budget.");
    return;
  }

  totalBudget = budget;

  localStorage.setItem("totalBudget", totalBudget);

  updateSummary();

  budgetInput.value = "";
}

function addExpense() {
  let name = document.getElementById("expenseName").value.trim();

  let amount = Number(document.getElementById("expenseAmount").value);

  if (name === "" || amount <= 0) {
    alert("Please enter valid expense details.");
    return;
  }

  let totalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  if (totalBudget === 0) {
    alert("Please add budget first.");
    return;
  }

  if (amount > totalBudget - totalExpenses) {
    alert("Expense exceeds available budget.");
    return;
  }

  let expense = {
    id: Date.now(),
    name: name,
    amount: amount,
  };

  expenses.push(expense);

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();

  updateSummary();

  document.getElementById("expenseName").value = "";
  document.getElementById("expenseAmount").value = "";
}

function displayExpenses() {
  let table = document.getElementById("expenseList");

  table.innerHTML = "";

  expenses.forEach(function (expense) {
    let row = document.createElement("tr");

    row.innerHTML = `
                <td>${expense.name}</td>

                <td>${expense.amount.toFixed(2)}</td>

                <td>
                    <button
                        class="remove-btn"
                        onclick="removeExpense(${expense.id})">
                        Remove
                    </button>
                </td>
            `;

    table.appendChild(row);
  });
}

function removeExpense(id) {
  expenses = expenses.filter(function (expense) {
    return expense.id !== id;
  });

  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();

  updateSummary();
}

function updateSummary() {
  let totalExpenses = expenses.reduce(function (total, expense) {
    return total + expense.amount;
  }, 0);

  let budgetLeft = totalBudget - totalExpenses;

  document.getElementById("totalBudget").innerText = totalBudget.toFixed(2);

  document.getElementById("totalExpenses").innerText = totalExpenses.toFixed(2);

  document.getElementById("budgetLeft").innerText = budgetLeft.toFixed(2);
}


function resetAll() {
  let confirmReset = confirm("Are you sure you want to reset everything?");

  if (!confirmReset) {
    return;
  }

  totalBudget = 0;
  expenses = [];

  localStorage.removeItem("totalBudget");
  localStorage.removeItem("expenses");

  displayExpenses();

  updateSummary();
}

displayExpenses();

updateSummary();
