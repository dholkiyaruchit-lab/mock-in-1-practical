# 💰 Budget Tracker System

Live Link : https://budget-tracker-system-tawny.vercel.app/

A simple and responsive **Budget Tracker System** built using **HTML, CSS, Bootstrap, and JavaScript**.
The application allows users to add a budget, record expenses, view expense history, remove expenses, and track the remaining budget in real time.

All budget and expense data is stored in the browser using **LocalStorage**, so the data remains available even after refreshing the page.

---

## 🚀 Features

* 💵 Add and update total budget
* 🧾 Add expenses with title and amount
* 📊 View total budget
* 💸 View total expenses
* 💰 Calculate remaining budget automatically
* 📝 Display expense history in a table
* ❌ Remove individual expenses
* 🔄 Reset all budget and expense data
* 💾 Persistent data using LocalStorage
* 📱 Responsive design using Bootstrap and CSS Media Queries
* ⚠️ Validation for invalid budget and expense values
* 🚫 Prevent expenses from exceeding the available budget

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive design
* **Bootstrap 5** – Grid system and responsive components
* **JavaScript** – Application logic and DOM manipulation
* **LocalStorage** – Persistent browser-side data storage

---

## 📂 Project Structure

```text
Budget-Tracker/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

### 1. Add Budget

Enter a valid budget amount and click **Add Budget**.

The budget is stored in LocalStorage:

```javascript
localStorage.setItem("totalBudget", totalBudget);
```

---

### 2. Add Expense

Enter:

* Expense Title
* Expense Amount

After clicking **Add Expense**, the expense is added to the expense list.

Each expense contains:

```javascript
{
    id: Date.now(),
    name: name,
    amount: amount
}
```

The complete expense array is stored in LocalStorage:

```javascript
localStorage.setItem("expenses", JSON.stringify(expenses));
```

---

### 3. Budget Calculation

The application calculates the total expenses using `reduce()`:

```javascript
let totalExpenses = expenses.reduce(function (total, expense) {
    return total + expense.amount;
}, 0);
```

Remaining budget:

```javascript
let budgetLeft = totalBudget - totalExpenses;
```

---

### 4. Remove Expense

Each expense has a **Remove** button.

When clicked, the selected expense is removed from the array using `filter()`:

```javascript
expenses = expenses.filter(function (expense) {
    return expense.id !== id;
});
```

The updated data is then saved back to LocalStorage.

---

### 5. Reset All

The **Reset All** button removes:

* Total budget
* All expenses
* LocalStorage data

```javascript
localStorage.removeItem("totalBudget");
localStorage.removeItem("expenses");
```

---

## 💾 LocalStorage

This project uses browser LocalStorage to persist data.

### Stored Data

```text
totalBudget
expenses
```

Example:

```javascript
localStorage.getItem("totalBudget");
```

Expenses are converted between JavaScript objects and JSON using:

```javascript
JSON.stringify()
JSON.parse()
```

This means the data remains available after refreshing the browser.

---

## 📱 Responsive Design

The application uses:

* Bootstrap Grid
* CSS Media Queries
* Responsive table
* Flexible layout

The interface adapts to:

* 💻 Desktop
* 📱 Tablet
* 📱 Mobile

---

## 🧪 Validation

The application validates user input before adding data.

### Budget

* Budget must be greater than `0`.

### Expense

* Expense title cannot be empty.
* Expense amount must be greater than `0`.
* Budget must be added before adding an expense.
* Expense cannot exceed the available budget.

---

## 🎯 Main JavaScript Functions

| Function            | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `addBudget()`       | Adds and stores the budget                    |
| `addExpense()`      | Adds a new expense                            |
| `displayExpenses()` | Displays expenses in the table                |
| `removeExpense()`   | Removes a selected expense                    |
| `updateSummary()`   | Updates budget, expenses and remaining amount |
| `resetAll()`        | Clears all application data                   |

---

## ▶️ How to Run

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project

Open the project folder in VS Code.

### 3. Run

Open:

```text
index.html
```

You can also use **Live Server** in VS Code for a better development experience.

---

## 📸 Application Flow

```text
Add Budget
     ↓
Add Expense
     ↓
Expense Stored in LocalStorage
     ↓
Calculate Total Expenses
     ↓
Calculate Remaining Budget
     ↓
Display Expense History
     ↓
Remove Expense / Reset All
```

---

## 🌟 Future Improvements

Possible future enhancements:

* ✏️ Edit existing expenses
* 📅 Add expense dates
* 📊 Expense charts and analytics
* 🏷️ Expense categories
* 🔍 Search and filter expenses
* 📤 Export expenses to CSV/PDF
* 🌙 Dark mode
* 👤 User authentication
* ☁️ Cloud database integration
* 📱 Convert into a PWA/mobile application

---

## 👨‍💻 Author

**Ruchit Dholakiya**

### Technologies

`HTML` `CSS` `Bootstrap` `JavaScript` `LocalStorage`

---

## 📄 License

This project is created for **learning and practice purposes**.
