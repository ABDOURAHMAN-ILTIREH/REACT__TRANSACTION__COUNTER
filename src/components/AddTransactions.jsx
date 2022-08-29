import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/globalContext'

const AddTransactions = () => {
   const [text,setText] = useState('')
   const [amount, setAmount] = useState('')
   const {AddTransaction} = useContext(GlobalContext)

  const onSubmit = e =>{
    e.preventDefault();
    const  newTransaction = {
      id: Math.floor( Math.random() * 100),
      text,
      amount: + amount,
    }
    AddTransaction(newTransaction);
    // console.log('hello world')
    setText(e.target.value = "");
    setAmount(e.target.value = "");
  }

  return (
    <section>
        <h2>Add new Transactions</h2>
        <form>
                <div className="input__row">

                <label htmlFor="text">text</label>
                <input type="text" id='text' onChange={(e)=>setText(e.target.value)} value={text} placeholder='enter a product' />

                <label htmlFor="amount">  amount<br />(negative - expence, possitive - income)</label>
                <input type="number" id='amount' onChange={(e)=>setAmount(e.target.value)} value={amount} placeholder="enter a value"/>
                
                </div>
                <button
                onClick={onSubmit}
                >add transactions</button>
        </form>
    </section>
  )
}

export default AddTransactions