import { useState } from "react";
import PropTypes from "prop-types";
import "./TransactionForm.css";

function TransactionForm({ onAddTransaction, onSaveSalary }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [showCustomCategory, setShowCustomCategory] = useState(false);
  const [customCategory, setCustomCategory] = useState("");
  const [salary, setSalary] = useState(""); // Estado para el salario

  const basicCategories = [
    { name: "Alimentación", emoji: "🍔" },
    { name: "Transporte", emoji: "🚗" },
    { name: "Estudio", emoji: "📚" },
    { name: "Otro", emoji: "💰" },
  ];

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    if (e.target.value === "Otro") {
      setShowCustomCategory(true);
    } else {
      setShowCustomCategory(false);
    }
  };

  const handleCustomCategoryChange = (e) => {
    setCustomCategory(e.target.value);
  };

  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount.trim() || (!category.trim() && !customCategory.trim())) return;
    const amountValue = parseInt(amount);
    if (amountValue >= 0) {
      alert("Por favor ingresa un monto negativo para los gastos.");
      return;
    }
    onAddTransaction({
      amount: amountValue.toString(),
      category: customCategory.trim() || category,
    });
    setAmount("");
    setCategory("");
    setShowCustomCategory(false);
    setCustomCategory("");
  };

  const handleSaveSalary = (e) => {
    e.preventDefault();
    if (!salary.trim()) return; // Validar que el salario no esté vacío
    onSaveSalary(salary);
    setSalary(""); // Limpiar el campo del salario después de guardarlo
  };

  return (
    <div>
      <form onSubmit={handleSaveSalary} className="salary-form">
        <input
          type="number"
          placeholder="Ingresa tu salario"
          value={salary}
          onChange={handleSalaryChange}
        />
        <button type="submit">Guardar Salario</button>
      </form>
      <form onSubmit={handleSubmit} className="transaction-form">
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={handleAmountChange}
        />
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Selecciona una categoría</option>
          {basicCategories.map((cat, index) => (
            <option key={index} value={cat.name}>
              {cat.emoji} {cat.name}
            </option>
          ))}
          <option value="Otro">Otro</option>
        </select>
        {showCustomCategory && (
          <input
            type="text"
            placeholder="Ingresa la categoría"
            value={customCategory}
            onChange={handleCustomCategoryChange}
          />
        )}
        <button type="submit">Agregar Transacción</button>
      </form>
    </div>
  );
}

TransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
  onSaveSalary: PropTypes.func.isRequired,
};

export default TransactionForm;
