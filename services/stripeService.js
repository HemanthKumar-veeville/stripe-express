const stripe = require("../config/stripe");
const constants = require("../config/constants");

class StripeService {
  // Create Express Connected Account
  static async createExpressAccount(email, country = "FR") {
    try {
      const account = await stripe.accounts.create({
        type: "express",
        country: country,
        email: email,
      });
      return {
        success: true,
        message: constants.MESSAGES.ACCOUNT_CREATED,
        data: account,
      };
    } catch (error) {
      throw new Error(constants.MESSAGES.SERVER_ERROR);
    }
  }

  // Create Onboarding Link for Connected Account
  static async createAccountLink(accountId, refreshUrl, returnUrl) {
    if (!accountId) throw new Error(constants.MESSAGES.ACCOUNT_ID_REQUIRED);

    try {
      const accountLink = await stripe.accountLinks.create({
        account: accountId,
        refresh_url: refreshUrl,
        return_url: returnUrl,
        type: "account_onboarding",
      });
      return {
        success: true,
        message: constants.MESSAGES.ACCOUNT_LINK_CREATED,
        data: accountLink,
      };
    } catch (error) {
      throw new Error(constants.MESSAGES.SERVER_ERROR);
    }
  }

  // Transfer funds to Connected Account
  static async transferFunds(amount, currency, destination, description) {
    if (!amount || amount <= 0)
      throw new Error(constants.MESSAGES.INVALID_AMOUNT);
    if (!destination) throw new Error(constants.MESSAGES.ACCOUNT_ID_REQUIRED);

    try {
      const transfer = await stripe.transfers.create({
        amount: amount * 100, // Stripe uses cents
        currency: currency,
        destination: destination,
        description: description,
      });
      return {
        success: true,
        message: constants.MESSAGES.TRANSFER_SUCCESS,
        data: transfer,
      };
    } catch (error) {
      console.error(error?.message);
      throw new Error(constants.MESSAGES.SERVER_ERROR);
    }
  }

  // Get Stripe Balance for the platform
  static async getBalance() {
    try {
      const balance = await stripe.balance.retrieve();
      return {
        success: true,
        data: balance,
      };
    } catch (error) {
      throw new Error(constants.MESSAGES.SERVER_ERROR);
    }
  }

  // Retrieve Transfer Status
  static async getTransferStatus(transferId) {
    if (!transferId) throw new Error(constants.MESSAGES.TRANSFER_ID_REQUIRED);
    try {
      const transfer = await stripe.transfers.retrieve(transferId);
      return {
        success: true,
        data: transfer,
      };
    } catch (error) {
      throw new Error(constants.MESSAGES.TRANSFER_NOT_FOUND);
    }
  }

  // Cancel a Payout
  static async cancelPayout(payoutId) {
    if (!payoutId) throw new Error(constants.MESSAGES.PAYOUT_ID_REQUIRED);
    try {
      const payout = await stripe.payouts.cancel(payoutId);
      return {
        success: true,
        message: constants.MESSAGES.PAYOUT_CANCELED,
        data: payout,
      };
    } catch (error) {
      throw new Error(constants.MESSAGES.PAYOUT_CANNOT_CANCEL);
    }
  }

  // List All Connected Accounts
  static async listAllConnectedAccounts() {
    try {
      const accounts = await stripe.accounts.list();
      return {
        success: true,
        data: accounts,
      };
    } catch (error) {
      throw new Error(constants.MESSAGES.SERVER_ERROR);
    }
  }
}

module.exports = StripeService;
