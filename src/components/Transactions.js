import React, { useState } from 'react';
import TransactionForm from '../components/TransactionForm';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const handleTransactionSubmit = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm onSubmit={handleTransactionSubmit} />
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>Car ID: {transaction.carId}, Buyer ID: {transaction.buyerId}, Seller ID: {transaction.sellerId}, Amount: ${transaction.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
