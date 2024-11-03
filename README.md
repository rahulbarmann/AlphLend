# 🏦 Lending and Borrowing DApp on Alephium

This DApp is built on the Alephium blockchain and allows users to securely borrow tokens against collateral deposits. Leveraging the unique features of Alephium’s ecosystem, this DApp implements a collateral-based lending and borrowing model with strict checks on loan repayment timing and accuracy.

## 🚀 Features

- Collateralized Borrowing: Users secure loans with collateral deposits, minimizing the risk of default.
- Time-Based Repayment Enforcement: Ensures that loans are repaid within 2 hours; otherwise, repayment is invalidated.
- Flexible Repayment: Users can repay the loan and receive their collateral back if conditions are met.
- Transparency and Security: Each action is recorded on-chain, and checks are in place to prevent under-collateralized borrowing and late repayments.

## ⚙️ Smart Contract Overview

The LendingBorrowing contract manages deposits, loans, and repayments. Key elements include:

- Collateral Token: The token type required as collateral.
- Loan Token: The token type disbursed to users as a loan.
- Collateral Ratio: The ratio of collateral required per loan token.
- Borrowing and Repayment Checks: Ensures timely repayment and exact loan amounts to secure collateral release.

### Contract Fields

- collateralTokenId: The ID of the token accepted as collateral.
- loanTokenId: The ID of the loan token.
- collateralRatio: Defines how much collateral is needed per unit of loan token.
- totalCollateral: Tracks the total collateral held by the contract.

## 📢 Getting Started

### Prerequisites

1. Alephium Node: Set up a local Alephium node or connect to the testnet.
2. Alephium CLI or SDK: Install the Alephium CLI or SDK to interact with the contract.
3. Wallet: Create a wallet on Alephium and fund it with testnet tokens (if using testnet).

### Setup and Deployment

1. Compile the Contract:

   alephium-cli compile path/to/LendingBorrowing.ral

2. Deploy the Contract:
   Specify initial values for the contract fields such as collateralTokenId, loanTokenId, collateralRatio, and totalCollateral.

   alephium-cli deploy path/to/compiled/LendingBorrowing.json --args collateralTokenId=<collateralTokenId> loanTokenId=<loanTokenId> collateralRatio=3 totalCollateral=0

3. Initialize the Contract (optional):
   Call any required initialization functions (if needed) to set up starting states or balances.

### User Guide

#### Deposit Collateral

To start borrowing, users first need to deposit collateral:
await lendingBorrowingContract.depositCollateral(callerAddress, collateralAmount);

#### Borrow Tokens

Once the required collateral is deposited, users can call the borrow function to receive loan tokens:
await lendingBorrowingContract.borrow(callerAddress);

#### Repay Loan

To return the loan and reclaim collateral, users can repay within the 2-hour time limit:
await lendingBorrowingContract.repayLoan(callerAddress, repaymentAmount);
If the repayment amount or timing conditions aren’t met, the transaction will fail.

## 🚨 Error Codes

- Error 1: Incorrect repayment amount.
- Error 2: Repayment past due (after 2 hours).
- Error 3: Insufficient collateral for release.

## 💡 Future Plans

- Cross-Chain Interoperability: Expand to support cross-chain collateral and loan transfers.
- NFT Collateral: Allow NFTs as collateral to support new types of assets.
- Credit Scoring: Integrate on-chain credit scoring for lower collateral requirements for trusted borrowers.
- Governance and Community Control: Transition to DAO-based control, empowering the Alephium community to adjust protocol parameters.

## 🤝 Contributing

We welcome contributions! Feel free to open issues or pull requests for new features or bug fixes.

## 📃 License

This DApp is open-source and licensed under the MIT License.

---

This DApp demonstrates a secure, time-enforced lending solution on Alephium, showcasing the potential of decentralized finance on a scalable blockchain platform.
