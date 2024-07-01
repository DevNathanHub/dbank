import React from 'react';
import Balance from './components/Balance';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import Interest from './components/Interest';
import { useLoan } from './context/LoanContext';

function LoanApp() {
  const { activeMenu } = useLoan();

  return (
    <div>
      {activeMenu === 'Dashboard' && (
        <div>
          <Balance />
        </div>
      )}
      {activeMenu === 'Deposit' && (
        <div>
          <Deposit />
        </div>
      )}
      {activeMenu === 'Withdraw' && (
        <div>
          <Withdraw />
        </div>
      )}
      {activeMenu === 'Interest' && (
        <div>
          <Interest />
        </div>
      )}
    </div>
  );
}

export default LoanApp;
