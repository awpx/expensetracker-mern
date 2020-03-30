import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className='transactionlist'>
      <h3>Riwayat</h3>
      <ul className='list'>
        {transactions.map(transaction => (
          <Transaction 
            key={transaction.id} 
            transaction={transaction} 
          /> 
        ))}

        
      </ul>
    </div>
  )
}
