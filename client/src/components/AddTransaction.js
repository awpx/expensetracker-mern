import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [ text, setText ] = useState('')
  const [ amount, setAmount ] = useState(0)
  
  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    }

    addTransaction(newTransaction)

    setText('')
    setAmount(0)
  }

  return (
    <div className='addtransaction'>
      <h3>Tambah Transaksi Baru</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Keterangan</label>
          <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Masukan keterangan...' />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Jumlah Uang <br />
            <small><i>
            Gunakan tanda (-) didepan untuk pengeluaran. <br />
            Contoh: -5000 (pengeluaran), 5000 (pemasukan)
            </i></small>
          </label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Masukan jumlah uang...' />
        </div>
        <button className='btn'>Tambah Transaksi</button>
      </form>
    </div>
  )
}
