import React from 'react'
import './App.css'
import { AddTransaction } from './components/AddTransaction'
import { Balance } from './components/Balance'
import { Header } from './components/Header'
import { IncomeExpense } from './components/IncomeExpense'
import { TransactionList } from './components/TransactionList'
import { GlobalContextProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalContextProvider>
  )
}

export default App