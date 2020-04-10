const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  text: {
    type: String,
    trim:true,
    required: [true, 'Please add some text']
  },
  amount: {
    type: Number,
    required: [true, 'Please add positive or negative number']
  }
}, { timestamps: true })

module.exports = mongoose.model('transaction', TransactionSchema)