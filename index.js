const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const app = express();


// middleware
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send('assignment-12-server is running');
});
app.listen(port, () =>
    console.log('assignment-12-server is running on ${port}')
)