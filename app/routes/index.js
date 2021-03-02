const express = require("express");
const router = express.Router();
const ExpenseController = require("../controllers/ExpenseController");


/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Create an Expense.
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       description: The name of the expense.
 *                       example: shopping
 *                     amount:
 *                       type: number
 *                       description: The cost of the expense.
 *                       example: 500
*/
router.post("/expenses", ExpenseController.create);
router.get("/expenses", ExpenseController.findAll);
router.get("/expenses/:id", ExpenseController.findOne);
router.put("/expenses/:id", ExpenseController.update);
router.delete("/expenses/:id", ExpenseController.delete);

module.exports = router;
