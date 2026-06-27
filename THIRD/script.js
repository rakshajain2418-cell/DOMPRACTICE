let balance = 0;
let income = 0;
let expense = 0;

function updateSummary() {
  document.getElementById("balance").textContent = balance;
  document.getElementById("income").textContent = income;
  document.getElementById("expense").textContent = expense;
}

function showAddForm() {
  document.getElementById("add-form").style.display = "block";
}

function addTransaction() {
  const desc = document.getElementById("desc").value;
  const amt = parseInt(document.getElementById("amount").value);
  const type = document.getElementById("type").value;

  if (!desc || isNaN(amt)) {
    alert("Please enter valid details");
    return;
  }

  const list = document.getElementById("transaction-list");
  const div = document.createElement("div");
  div.className = "transaction";

  const nameSpan = document.createElement("span");
  nameSpan.textContent = desc;

  const amtSpan = document.createElement("span");
  amtSpan.className = "amount";

  if (type === "income") {
    amtSpan.textContent = "₹" + amt;
    amtSpan.classList.add("positive");
    income += amt;
    balance += amt;
  } else {
    amtSpan.textContent = "₹" + amt;
    amtSpan.classList.add("negative");
    expense += amt;
    balance -= amt;
  }

  div.appendChild(nameSpan);
  div.appendChild(amtSpan);
  list.appendChild(div);

  updateSummary();


  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("type").value = "income";
  document.getElementById("add-form").style.display = "none";
}

function searchTransaction(query) {
  const items = document.querySelectorAll("#transaction-list .transaction");
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query.toLowerCase()) ? "flex" : "none";
  });
}
