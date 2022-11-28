const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();


// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.8lhtxek.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        // const productsCollection = client.db("mirrawDb").collection("products");
        const phonesCollection = client.db("usedPhone").collection("phones");

        app.get('/phones', async (req, res) => {
            // const id = req.params.id;
            const query = {};
            const phone = await phonesCollection.find(query).toArray();
            res.send(phone)

        })

    }
    finally {
        // await client.close();
    }
}
run().catch(error => console.log(error));

app.get('/', async (req, res) => {
    res.send('assignment-12-server is running');
});
app.listen(port, () =>
    console.log(`assignment-12-server is running on ${port}`)
)