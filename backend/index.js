const express = require('express');
const bodyParser = require('body-parser');
const { ethers } = require('ethers');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Replace with your contract address and ABI
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
    // Add your contract ABI here
];

const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/YOUR_ALCHEMY_KEY');
const adminPrivateKey = 'YOUR_ADMIN_PRIVATE_KEY';
const wallet = new ethers.Wallet(adminPrivateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

app.post('/api/message', async (req, res) => {
    const { message } = req.body;
    try {
        const tx = await contract.setMessage(message);
        await tx.wait();
        res.status(200).send('Message updated successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/api/message', async (req, res) => {
    const { password } = req.query;
    try {
        const message = await contract.getMessage(password);
        res.status(200).json({ message });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});



//Note:  Replace YOUR_CONTRACT_ADDRESS, YOUR_ALCHEMY_KEY, and YOUR_ADMIN_PRIVATE_KEY with actual values.