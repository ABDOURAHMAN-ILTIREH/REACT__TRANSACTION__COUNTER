import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/globalContext';

const Transaction = ({text ,id ,amount}) => {
    const {deleteTrasaction} = useContext(GlobalContext)
    const sign =  amount < 0 ?'-' : '';
  return (
       <div className={`content ${amount< 0 ?'munis' : 'plus'}`}>
         <p>{text}</p>
         <span> {sign}{Math.abs(amount)} $</span>
        <button id='closer'
        onClick={()=>deleteTrasaction(id)}
        >x</button>
       </div>
  )
}

export default Transaction