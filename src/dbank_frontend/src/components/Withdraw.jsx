// Withdraw.jsx
import React from 'react';
import { useLoan } from '../context/LoanContext';
import { dbank_backend } from 'declarations/dbank_backend';

function Withdraw() {
  const { fetchBalance } = useLoan();

  async function handleSubmit(event) {
    event.preventDefault();
    const withdrawAmount = parseFloat(event.target.elements.withdrawamount.value);
    await dbank_backend.withdraw(withdrawAmount);
    event.target.elements.withdrawamount.value = '';
    alert('success');
    fetchBalance();
  }

  return (
    <main>
      <h2>Withdraw</h2>
      <form onSubmit={handleSubmit}>
        
        <div class="form__group">
        <input class="form__input" id="withdrawamount" type="number" step="0.01" min={0}  placeholder="Deposit Amount" required="" />
        <label htmlFor="depositamount" class="form__label">Enter Amount to Withdraw</label>
        <button type="submit" className='button'>Withdraw</button>
      </div>
      </form>
    </main>
  );
}

export default Withdraw;
