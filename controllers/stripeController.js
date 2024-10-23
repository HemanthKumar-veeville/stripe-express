const StripeService = require("../services/stripeService");
const errorHandler = require("../utils/errorHandler");

class StripeController {
  // Create Express Connected Account
  static async createExpressAccount(req, res) {
    const { email } = req.body;

    try {
      const result = await StripeService.createExpressAccount(email);
      res.status(201).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Create Onboarding Link
  static async createAccountLink(req, res) {
    const { accountId, refreshUrl, returnUrl } = req.body;

    try {
      const result = await StripeService.createAccountLink(
        accountId,
        refreshUrl,
        returnUrl
      );
      res.status(200).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Transfer Funds
  static async transferFunds(req, res) {
    const { amount, currency, destination, description } = req.body;

    try {
      const result = await StripeService.transferFunds(
        amount,
        currency,
        destination,
        description
      );
      res.status(200).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Retrieve Balance
  static async getBalance(req, res) {
    try {
      const result = await StripeService.getBalance();
      res.status(200).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Retrieve Transfer Status
  static async getTransferStatus(req, res) {
    const { transferId } = req.params;
    try {
      const result = await StripeService.getTransferStatus(transferId);
      res.status(200).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // Cancel Payout
  static async cancelPayout(req, res) {
    const { payoutId } = req.params;
    try {
      const result = await StripeService.cancelPayout(payoutId);
      res.status(200).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  // List All Connected Accounts
  static async listAllConnectedAccounts(req, res) {
    try {
      const result = await StripeService.listAllConnectedAccounts();
      res.status(200).json(result);
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

module.exports = StripeController;
