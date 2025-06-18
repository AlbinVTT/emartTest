
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

// Initiate payment flow: Validate with compliance, then process payment
app.post('/initiatepayment', async (req, res) => {
    const { username, amount } = req.body;

    try {
        // Step 1: Compliance check
        const complianceResponse = await axios.post('http://compliance:80/compliancecheck', {
            KycApproved: true,
            Balance: 1000
        });

        if (complianceResponse.data.status !== 'Approved') {
            return res.status(400).json({ error: 'Compliance check failed' });
        }

        // Step 2: Process order
        const orderResponse = await axios.post('http://orderprocessor:5001/processpayment', {
            username,
            amount
        });

        return res.json({ message: 'Payment successful', order: orderResponse.data });

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: 'Payment processing failed' });
    }
});

app.listen(3001, () => console.log('API Gateway running on port 3001'));
