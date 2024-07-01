// LoanContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { dbank_backend } from 'declarations/dbank_backend';

const LoanContext = createContext();

export function useLoan() {
  return useContext(LoanContext);
}

export function LoanProvider({ children }) {
  const [balance, setBalance] = useState('');
  const [activeMenu, setActiveMenu] = useState('Dashboard'); //Dashboard, Interest, Deposit, Withdraw

  async function fetchBalance() {
    const tempBalance = await dbank_backend.checkBalance();
    const formattedBalance = tempBalance.toFixed(2);
    setBalance(formattedBalance);
  }

  useEffect(() => {
    fetchBalance();
  }, []);

  function handleCompound() {
    dbank_backend.compound();
    alert('success');
    fetchBalance();
  }

  return (
    <LoanContext.Provider value={{ balance, fetchBalance, handleCompound, activeMenu, setActiveMenu }}>
      {children}
    </LoanContext.Provider>
  );
}
