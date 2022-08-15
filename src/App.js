import './App.css';
import Balance from './components/Balance';
import HistoryTransactions from './components/HistoryTransactions';
import AddTransactions from './components/AddTransactions';
import Header from './components/Header';
import { GlobalProvider } from './context/globalContext';

function App() {
  return (
      <main className='main__container'>
         <GlobalProvider>
               <Header />
            <div className='main__wrapper'>
               <div className='main__left'>
                  <Balance />
                  <AddTransactions />
               </div>
                  <HistoryTransactions />
            </div>
        </GlobalProvider>
      </main>
  );
}

export default App;
