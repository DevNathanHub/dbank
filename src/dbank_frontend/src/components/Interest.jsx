import React from 'react'
import { useLoan } from '../context/LoanContext';

function Interest() {
    const {  handleCompound } = useLoan();

    const fetchInterestEarned = () => {
        handleCompound();
        fetchBalance();
      }; 
  return (
    <div>
        <h1>Compound</h1>
        <button onClick={fetchInterestEarned} className='button'>Collect Interest</button>
    </div>
  )
}

export default Interest