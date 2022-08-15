import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const Balance = () => {
  const {transaction} = useContext(GlobalContext)

  const amount = transaction.map( itme => itme.amount);
  const income = amount.filter( itme => itme > 0).reduce( (acc, itme) => (acc + itme),0).toFixed(2);
  const expance = (amount.filter( itme => itme < 0).reduce( (acc, itme) => (acc + itme),0)* -1).toFixed(2);
  return (
    <div className="balance">
        <div className="wrapper__counter">
           <div className='income__state'>
           <h3>income</h3>
           <span>${income}</span>
           </div>
           <div  className="expence__state">
           <h3>expence</h3>
           <span>${expance}</span>
           </div>
        </div>
    </div>
  )
}

export default Balance