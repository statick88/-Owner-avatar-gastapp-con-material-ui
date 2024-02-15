// App.jsx

import { useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Función para manejar la adición de transacciones (ingresos y gastos)
  const handleAddTransaction = (newTransaction) => {
    const amount = parseInt(newTransaction.amount);
    if (amount < 0) {
      // Es un gasto, por lo tanto, restamos al total de gastos
      setTotalExpenses(totalExpenses - amount); // Corregimos aquí
    } else {
      // Es un ingreso
      setIncome(income + amount);
    }
    setTransactions([...transactions, newTransaction]);
  };

  // Calcular el ahorro
  const savings = income - totalExpenses;

  // Función para guardar el salario ingresado por el usuario
  const handleSaveSalary = (newSalary) => {
    setIncome(parseInt(newSalary));
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <TransactionForm
        onAddTransaction={handleAddTransaction}
        onSaveSalary={handleSaveSalary}
      />
      <TransactionList transactions={transactions} />
      <div className="totals">
        <h2>Totals</h2>
        <p>Total Income: {income}</p>
        <p>Total Expenses: {totalExpenses}</p>
        <p>Savings: {savings > 0 ? savings : 0}</p>
      </div>
    </div>
  );
}

export default App;
