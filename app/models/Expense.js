const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  amount:{
    type: Number,
    required: true
  },
  status:{
    type:Boolean,
    default: true
  }  
},
{
  timestamps:true
}
);

module.exports = mongoose.model('Expense', ExpenseSchema);