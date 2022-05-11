const router = require("express").Router();

const { addPayment, getAllPayments, getPaymentTotal } = require("../controllers/payment.controller");

router.post("/", addPayment);
router.get("/", getAllPayments);
router.get("/total", getPaymentTotal);

module.exports = router;
