const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const queryRoutes = require('./routes/queryRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', queryRoutes);

const PORT = process.env.PORT || 5000;
const BASE_URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API Base URL: ${BASE_URL}`);
});
