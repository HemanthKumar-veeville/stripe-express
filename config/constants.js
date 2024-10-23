const constants = {
  MESSAGES: {
    ACCOUNT_CREATED: "Connected account created successfully.",
    ACCOUNT_LINK_CREATED: "Account onboarding link generated successfully.",
    TRANSFER_SUCCESS: "Funds transferred successfully.",
    INVALID_AMOUNT:
      "Invalid transfer amount. Please ensure the amount is a positive number.",
    ACCOUNT_ID_REQUIRED: "Connected account ID is required.",
    AMOUNT_REQUIRED: "Transfer amount is required.",
    SERVER_ERROR: "An unexpected error occurred. Please try again later.",
    TRANSFER_ID_REQUIRED: "Transfer ID is required.",
    TRANSFER_NOT_FOUND: "Transfer not found.",
    PAYOUT_ID_REQUIRED: "Payout ID is required.",
    PAYOUT_CANCELED: "Payout canceled successfully.",
    PAYOUT_CANNOT_CANCEL: "Payout cannot be canceled at this time.",
  },
};

module.exports = constants;
