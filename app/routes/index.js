const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/ExpenseController");

router.post("/expenses", ExpenseController.create);
router.get("/expenses", ExpenseController.findAll);
router.get("/expenses/:id", ExpenseController.findOne);
router.put("/expenses/:id", ExpenseController.update);
router.delete("/expenses/:id", ExpenseController.delete);

module.exports = router;
