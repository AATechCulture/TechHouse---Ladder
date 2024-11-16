const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/form-data', (req, res) => {
    const formData = req.body;
    console.log('Form Data Received:', formData);
    // Process the data as needed
    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
