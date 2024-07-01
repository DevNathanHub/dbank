import { useLoan } from '../context/LoanContext';

function LeftBar() {
    const { setActiveMenu } = useLoan();

    const handleActiveTab = (active) => {
        setActiveMenu(active);
    }

    return (
        <div className='left-bar'>
            <img src="/cover.png" alt="DFINITY logo" width='300px' height='150px' className='banner'/>
            <br />
            <div className='menu-list'>
                <button className='button-tab' onClick={() => handleActiveTab('Dashboard')}>Dashboard</button>
                <button className='button-tab' onClick={() => handleActiveTab('Interest')}>Interest</button>
                <button className='button-tab' onClick={() => handleActiveTab('Deposit')}>Deposit</button>
                <button className='button-tab' onClick={() => handleActiveTab('Withdraw')}>Withdraw</button>
            </div>
        </div>
    );
}

export default LeftBar;
