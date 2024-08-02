# Sample Hardhat Project

# Secret Message Storage dApp

## Setup

1. **Install Dependencies**
   - Ensure you have Node.js and npm installed.
   - Run `npm install` in the `backend` folder to install Node.js dependencies.

2. **Deploy the Smart Contract**
   - Navigate to the project root and compile the smart contract: `npx hardhat compile`.
   - Deploy the smart contract: `npx hardhat run scripts/deploy.js --network <network>`.
   - Note the contract address and update it in `backend/index.js`.

3. **Run the Node.js Server**
   - Navigate to the `backend` folder.
   - Start the server: `node index.js`.

## Endpoints

- `POST /api/message`
  - Request Body: `{ "message": "new secret message" }`
  - Description: Updates the stored message.

- `GET /api/message`
  - Query Parameters: `password`
  - Description: Retrieves the stored message if the password is correct.

## Testing

Use Postman or any HTTP client to test the API endpoints.
