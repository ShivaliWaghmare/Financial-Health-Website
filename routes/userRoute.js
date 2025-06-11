const express = require('express');
const { loginControllers, registerControllers } = require('../controllers/userControllers');

// Router Object : To preform routing
const router = express.Router();

// Routers :

// POST || LOGIN USER
router.post('/login', loginControllers);

// POST || REGISTER USER
router.post('/register', registerControllers);

// POST || EXPENSE TRACKING
// add your respective Controllers: name them mostly "expenseControllers"
router.post('/expense');

// POST || INVESMENT PORTFOLIO
// add your respective Controllers: name them mostly "portfolioContollers"
router.post('/portfolio');

// POST || FINANCIAL BLOG
// add your respective Controllers: name them mostly "blogControllers"
router.post('/aboutUs');

// POST || CALCULATOR
// add your respective Controllers: name them mostly "calculatorControllers"
router.post('/calculator');


// Export:
module.exports = router;