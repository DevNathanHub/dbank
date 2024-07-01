// Deposit.jsx
import React from 'react';
import { useLoan } from '../context/LoanContext';
import { dbank_backend } from 'declarations/dbank_backend';
function Deposit() {
  const { fetchBalance } = useLoan();

  async function handleSubmit(event) {
    event.preventDefault();
    const depositAmount = parseFloat(event.target.elements.depositamount.value);
    await dbank_backend.deposit(depositAmount);
    event.target.elements.depositamount.value = '';
    alert('success');
    fetchBalance();
  }

  return (
    <main>
      <h2>Deposit</h2>
      <form onSubmit={handleSubmit}>
      <div class="form__group">
        <input class="form__input" id="depositamount" type="number" step="0.01" min={0}  placeholder="Deposit Amount" required="" />
        <label htmlFor="depositamount" class="form__label">Enter Amount to Deposit:</label>
        <button type="submit" className='button'>Deposit</button>
      </div>
    
        
      </form>
    </main>
  );
}

export default Deposit;
