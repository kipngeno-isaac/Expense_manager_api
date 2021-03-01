const ExpenseModel = require('../models/Expense');

module.exports = {
  create: async (req, res)=>{
    const { query } = req;
    try {
      let data = await ExpenseModel.find(query);
      res.status(200).send({
        status: true,
        data
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

  },
  findOne: async (req, res)=>{

  },
  update: async (req, res)=>{

  },
  delete: async (req, res)=>{

  }

}