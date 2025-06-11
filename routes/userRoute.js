const express = require("express");
const {
  loginControllers,
  registerControllers,
} = require("../controllers/userControllers");
const invixController = require ("../controllers/StockController");

// Router Object : To preform routing
const router = express.Router();

// Routers :

// POST || LOGIN USER
router.post("/login", loginControllers);

// POST || REGISTER USER
router.post("/register", registerControllers);

// POST || EXPENSE TRACKING
// add your respective Controllers: name them mostly "expenseControllers"
router.post("/expense");

// POST || STOCK PRICE PREDICTION MODEL (INVIX)
router.post("/invix", invixController);

// POST || FINANCIAL BLOG
// add your respective Controllers: name them mostly "blogControllers"
<<<<<<< HEAD
router.post('/aboutUs');
=======
router.post("/blog");
>>>>>>> eecf13201a1985674b93c832ad15ac6e0c1b7061

// POST || CALCULATOR
// add your respective Controllers: name them mostly "calculatorControllers"
router.post("/calculator");

// Export:
module.exports = router;
