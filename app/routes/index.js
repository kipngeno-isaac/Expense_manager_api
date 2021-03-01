const express = require('express');
const router = express.Router();
const ExpenseController = require('../controllers/ExpenseController');

router.post('/expenses', ExpenseController.create);
router.get('/expenses', ExpenseController.findAll);
router.put('/expenses/:id', ExpenseController.update);
router.delete('/expenses/:id', ExpenseController.delete);

exports = router;