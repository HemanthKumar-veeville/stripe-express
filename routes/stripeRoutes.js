const express = require("express");
const StripeController = require("../controllers/stripeController");
const router = express.Router();

// Route to create a connected express account
router.post("/create-account", StripeController.createExpressAccount);

// Route to generate onboarding link
router.post("/create-account-link", StripeController.createAccountLink);

// Route to transfer funds to connected account
router.post("/transfer-funds", StripeController.transferFunds);

// Retrieve balance
router.get("/balance", StripeController.getBalance);

// Retrieve transfer status by transferId
router.get("/transfer/:transferId", StripeController.getTransferStatus);

// Cancel a payout by payoutId
router.post("/payout/:payoutId/cancel", StripeController.cancelPayout);

// List all connected accounts
router.get("/accounts", StripeController.listAllConnectedAccounts);

module.exports = router;
