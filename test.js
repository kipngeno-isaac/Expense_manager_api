/**
 *
 * @swagger
 * /expenses:
 *  post:
 *    description: Saves an expense
 *    payload:
 *      content:
 *        Application/json:
 *          schema:
 *            type: object
 *            properties:
 *              data:
 *                type: object
 *                title:
 *                  type:string
 *                  description: name of the expense
 *                  example: shopping
 *                  amount:
 *                   type: number
 *                   description: amount spend on expense
 *                   example: 500
 *
 */
