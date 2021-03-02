const ExpenseModel = require('../models/Expense');

module.exports = {
  create: async (req, res)=>{
    const { body } = req;
    try {
      let expense = new ExpenseModel(body);
      await expense.save();
      res.status(201).send({
        status: true,
        data:expense,
        message: 'Expense saved successfully'
      });
    } catch (error) {
      res.status(500).send({
        status:false,
        error:error.message,
        message: 'Some error occured while retrieving Expenses'
      });
    }
  
  },
  findAll: async  (req, res)=>{
    const { query } = req;
    try {
      let expenses = await ExpenseModel.find(query);
      res.status(200).send({
        status: true,
        data: expenses,
        message: 'list of expenses'
      });
    } catch (error) {
      res.status(500).send({
        status:false,
        error:error.message,
        message: 'Some error occured while retrieving Expenses'
      });
    }
  
  },
  findOne: async (req, res)=>{
    const { id } = req.params;
    try {
      let expense = await ExpenseModel.findById(id);
      res.status(200).send({
        status: true,
        data: expense,
        message: 'Expense retrieved successfully'
      });
    } catch (error) {
      res.status(500).send({
        status:false,
        error:error.message,
        message: 'error occured while retrieving the Expense'
      });
    }
  
  },
  update: async (req, res)=>{
    
  },
  delete: async (req, res)=>{

  }

}