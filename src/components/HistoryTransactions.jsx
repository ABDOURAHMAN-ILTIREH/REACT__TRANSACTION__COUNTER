import React from 'react'
import { useContext } from 'react'
import { GlobalContext} from '../context/globalContext'
import Transaction from './Transaction';

const HistoryTransactions = () => {

  const {transaction} = useContext(GlobalContext);
  return (
   <section className='section__main'>
     <h2 className='section__header'>History Transactions</h2>
     <div className="history__wrapper">
     {transaction.slice().reverse().map(itme =>(
        <Transaction key={itme.id} {...itme} />
     ))}
     </div>
   </section>
  )
}

export default HistoryTransactions