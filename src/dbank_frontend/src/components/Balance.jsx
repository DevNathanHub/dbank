// Balance.jsx
import React from 'react';
import { useLoan } from '../context/LoanContext';

function Balance() {
  const { balance, fetchBalance, handleCompound } = useLoan();



  return (
    <main>
      <h2>Balance</h2>
      <h3>Total Balance: ${balance}</h3>
      <button onClick={fetchBalance} className='button'>Refresh</button>
      
    </main>
  );
}

export default Balance;
