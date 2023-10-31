// src/components/FinancialSummary.js
import React from 'react';
import '../styles/FinancialSummary.css';

const FinancialSummary = ({ data }) => {
  const totalExpense = data
    .filter((item) => item.Amount < 0)
    .reduce((sum, item) => sum + item.Amount, 0);

  const totalIncome = data
    .filter((item) => item.Amount >= 0)
    .reduce((sum, item) => sum + item.Amount, 0);

  const difference = (totalIncome - Math.abs(totalExpense)).toFixed(2);

  return (
    <div className="financial-summary-container">
      <div className="mini-card">
        <p>Expense</p>
        <p>{totalExpense}</p>
      </div>
      <div className="mini-card">
        <p>Income</p>
        <p>{totalIncome}</p>
      </div>
      <div className="mini-card">
        <p>Difference</p>
        <p>{difference}</p>
      </div>
    </div>
  );
};

export default FinancialSummary;
