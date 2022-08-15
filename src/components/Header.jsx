import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/globalContext'

const Header = () => {
  const {transaction} = useContext(GlobalContext)
  const amount = transaction.map( itme => itme.amount)
  const total = amount.reduce((acc, item) => (acc + item),0).toFixed(2)

  return (
    <>
  <h1>expence tracker</h1>
      <div className='balance__wrapper'>
          <div>
          <h2>your balance</h2>
           <span>${total}</span>
          </div>
      </div>
    </>
  
  )
}

export default Header